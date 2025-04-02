"use client";
import React, { useActionState } from "react";
import {
  CardFooter,
  CardHeader,
  Link,
  ScrollShadow,
  Input,
  Card,
  CardBody,
  Button,
  Tabs,
  Tab,
  Image,
  Divider,
  addToast,
  Form,
} from "@heroui/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Alert from "@mui/material/Alert";
import { Slide, Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";
import * as actions from "@/actions";
import { GitHub, Google } from "@mui/icons-material";
import { useSession } from "next-auth/react";

export default function Entry(props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [loginState, loginAction, isLoginPending] = useActionState(
    actions.loginUser,
    {
      errors: {},
      inputs: {},
    }
  );
    const [signupState, signupAction, isPending] = useActionState(
      actions.registerUser,
      {
        errors: {},
        inputs: {},
      }
    );

  const [isVisible, setIsVisible] = React.useState({
    loginPassword: false,
    signupPassword: false,
    signupConfirm: false,
  });

  const toggleVisibility = (field) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const buttonClass =
    "bg-[#4C5D65] font-semibold hover:font-extrabold hover:bg-[#F27F14] text-white h-16";

  const [isSignedUp, setIsSignedUp] = React.useState(false);

  const [openSignupAlert, setOpenSignupAlert] = React.useState(false);

  // const [details, setDetails] = React.useState({
  //   email: "somename@dmail.com",
  //   p1: "P@ssw0rd123",
  //   p2: "P@ssw0rd123",
  //   firstName: "Halfname",
  //   lastName: "Halfname",
  // });
  const [details, setDetails] = React.useState({
    email: "",
    p1: "",
    p2: "",
    firstName: "",
    lastName: "",
  });

  // const [loginDetails, setLoginDetails] = React.useState({
  //   email: "somename@bmail.com",
  //   p1: "P@ssw0rd123",
  // });
  const [loginDetails, setLoginDetails] = React.useState({
    email: "",
    p1: "",
  });

  const [errorMessage, setErrorMessage] = React.useState("");

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSignupAlert(false);
  };

  function handleSignupChange(event) {
    const { name, value } = event.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  }

  function handleLoginChange(event) {
    const { name, value } = event.target;
    setLoginDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  }

  function handleLoginSubmit() {
    if (!loginDetails.email || !loginDetails.p1) {
      // setErrorMessage("Please fill in all fields for login.");
      addToast({
        color: "danger",
        title: "Please fill in all fields for login.",
      });
      return;
    }

    if (!validateEmail(loginDetails.email)) {
      // setErrorMessage("Please enter a valid email address.");
      addToast({
        color: "danger",
        title: "Please enter a valid email address.",
      });
      return;
    }

    //   // Simulate login using NextAuth's signIn function
    //   signIn("credentials", {
    //     email: loginDetails.email,
    //     password: loginDetails.p1,
    //     redirect: false, // Don't automatically redirect after login
    //   }).then((response) => {
    //     if (response?.error) {
    //       addToast({
    //         color: "danger",
    //         title: "Login failed. Please check your credentials.",
    //       });
    //     } else {
    //       router.push("/dashboard");
    //       addToast({
    //         variant: "success",
    //         title: "Login successful! Redirecting...",
    //       });
    //     }
    //   });
    // }

    // // Proceed with login action (e.g., API call)
    // if (!isSignedUp) {
    //   // setErrorMessage("You are not signed up yet.");
    //   addToast({
    //     color: "danger",
    //     title: "You are not signed up yet.",
    //   });
    //   return;
    // }

    // setErrorMessage("");

    const loginData = {
      name: loginDetails.email,
      password: loginDetails.p1,
    };

    loginUser(loginData);

    // console.log("Login Details:", loginDetails);
  }
  function handleSignupSubmit() {
    if (
      !details.email ||
      !details.p1 ||
      !details.p2 ||
      !details.firstName ||
      !details.lastName
    ) {
      // setErrorMessage("Please fill in all fields for sign up.");
      addToast({
        color: "danger",
        title: "Please fill in all fields for sign up.",
      });
      return;
    }

    if (!validateEmail(details.email)) {
      // setErrorMessage("Please enter a valid email address.");
      addToast({
        color: "danger",
        title: "Please enter a valid email address.",
      });
      return;
    }

    if (details.p1 !== details.p2) {
      // setErrorMessage("Passwords do not match.");
      addToast({
        color: "danger",
        title: "Passwords do not match.",
      });
      return;
    }

    // Proceed with signup action (e.g., API call)
    setErrorMessage("");
    // setOpenSignupAlert(true);
    // addToast({
    //   variant: "success",
    //   title: "You've successfully signed up. Please log in to continue.",
    // });
    // setIsSignedUp(true);

    console.log("Sign Up Details:", details);

    const formData = {
      name: details.firstName,
      // email: details.email,
      password: details.p1,
    };
    registerUser(formData);
  }

  // Email validation function using regex
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isInvalidLoginEmail = React.useMemo(() => {
    if (loginDetails.email === "") return false;

    return validateEmail(loginDetails.email) ? false : true;
  }, [loginDetails.email]);

  const isInvalidSignUpEmail = React.useMemo(() => {
    if (details.email === "") return false;

    return validateEmail(details.email) ? false : true;
  }, [details.email]);

  function handleLoginClear(inputName) {
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [inputName]: "",
    }));
  }

  // Clear function for signup form inputs
  function handleSignupClear(inputName) {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [inputName]: "",
    }));
  }

  return (
    <div className="flex flex-wrap min-h-screen flex-row-reverse items-center justify-around p-4 sm:p-10 bg-[#3A5565] select-none">
      <Card className="px-6 py-6 rounded-[20px] w-[440px]">
        <CardHeader className="justify-center">
          <div className="flex gap-2">
            <h1>Get Started </h1>
            <div className="flex ">
              <p className="font-black text-inherit text-xl">PIZzA</p>
              <p className="font-regular text-inherit">Delivery</p>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          {errorMessage && (
            <div className="text-reddanger text-center mb-4">
              {errorMessage}
            </div>
          )}
          <Tabs
            variant="underlined"
            defaultSelectedKey={props.defaultTab}
            classNames={{ tab: "h-12 font-medium mb-2" }}
            fullWidth
            size="lg"
            radius="lg"
          >
            <Tab key="login" title="Login">
              <Form
                key={JSON.stringify(loginState.inputs)} // Ensure form resets on success
                action={loginAction}
                validationErrors={loginState.errors}
                validationBehavior="aria"
              >
                <div className="flex-col w-full space-y-5 justify-center">
                  <Input
                    name="email"
                    type="email"
                    label="Email"
                    isInvalid={!!loginState.errors?.email}
                    errorMessage={loginState.errors?.email}
                    defaultValue={loginState.inputs?.email || ""}
                  />
                  <Input
                    isClearable
                    name="p1"
                    label="Password"
                    isInvalid={!!loginState.errors?.password}
                    errorMessage={loginState.errors?.password}
                    defaultValue={loginState.inputs?.password || ""}
                    endContent={
                      <span
                        className="focus:outline-none"
                        type="button"
                        onClick={() => toggleVisibility("loginPassword")}
                        aria-label="toggle password visibility"
                      >
                        {isVisible.loginPassword ? (
                          <VisibilityIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <VisibilityOffIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </span>
                    }
                    type={isVisible.loginPassword ? "text" : "password"}
                  />
                  <div className="flex justify-end">
                    <Button
                      className="place-self-end"
                      variant="light"
                      onPress={() =>
                        addToast({
                          variant: "success",
                          title: "Did you forget to eat?",
                          duration: 1000,
                        })
                      }
                    >
                      Forgot password?
                    </Button>
                  </div>

                  <Button
                    fullWidth
                    radius="lg"
                    className={buttonClass}
                    variant="solid"
                    size="lg"
                    type="submit"
                  >
                    Login
                  </Button>
                </div>
              </Form>
              <Divider className="my-5" />

              <div className="flex justify-between">
                <div className="flex w-full px-3 items-center gap-3">
                  <h2 className="font-light">
                    {session?.user ? "Signed In" : "Sign in with"}
                  </h2>
                  {/* <form action={}>
                    <Button isIconOnly variant="light" size="sm" type="submit">
                      <Google />
                    </Button>
                  </form> */}
                  <form action={actions.signInGithub}>
                    <Button isIconOnly variant="light" size="sm" type="submit">
                      <GitHub />
                    </Button>
                  </form>
                </div>
                <Button
                  className="place-self-end"
                  variant="light"
                  onPress={() => {
                    navigate("/pizza-delivery/admin");
                  }}
                  href="/pizza-delivery/admin"
                >
                  Admin?
                </Button>
              </div>
            </Tab>

            <Tab key="signup" title="Sign up">
              <Form
                key={JSON.stringify(signupState.inputs)} // Ensure form resets on success
                action={signupAction}
                validationErrors={signupState.errors}
                validationBehavior="aria"
              >
                <div className="flex-col space-y-5 justify-center">
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      name="firstName"
                      type="text"
                      label="First Name"
                      isInvalid={!!signupState.errors?.firstName}
                      errorMessage={signupState.errors?.firstName}
                      defaultValue={signupState.inputs?.firstName || ""}
                    />
                    <Input
                      name="lastName"
                      type="text"
                      label="Last Name"
                      isInvalid={!!signupState.errors?.lastName}
                      errorMessage={signupState.errors?.lastName}
                      defaultValue={signupState.inputs?.lastName || ""}
                    />
                  </div>
                  <Input
                    name="email"
                    type="email"
                    label="Email"
                    isInvalid={!!signupState.errors?.email}
                    errorMessage={signupState.errors?.email}
                    defaultValue={signupState.inputs?.email || ""}
                  />
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      isClearable
                      name="p1"
                      type={isVisible.signupPassword ? "text" : "password"}
                      label="Password"
                      isInvalid={!!signupState.errors?.p1}
                      errorMessage={signupState.errors?.p1}
                      defaultValue={signupState.inputs?.p1 || ""}
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={() => toggleVisibility("signupPassword")}
                          aria-label="toggle password visibility"
                        >
                          {isVisible.signupPassword ? (
                            <VisibilityIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <VisibilityOffIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                    />
                    <Input
                      isClearable
                      name="p2"
                      type={isVisible.signupConfirm ? "text" : "password"}
                      label="Confirm Password"
                      isInvalid={!!signupState.errors?.p2}
                      errorMessage={signupState.errors?.p2}
                      defaultValue={signupState.inputs?.p2 || ""}
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={() => toggleVisibility("signupConfirm")}
                          aria-label="toggle confirm password visibility"
                        >
                          {isVisible.signupConfirm ? (
                            <VisibilityIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <VisibilityOffIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                    />
                  </div>
                  <Button
                    fullWidth
                    radius="lg"
                    className={buttonClass}
                    variant="solid"
                    size="lg"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                  <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={openSignupAlert}
                    autoHideDuration={6000}
                    onClose={handleAlertClose}
                  >
                    <Alert
                      onClose={handleAlertClose}
                      severity="success"
                      variant="filled"
                      sx={{ width: "100%" }}
                    >
                      You’ve successfully signed up. Please log in to continue.
                    </Alert>
                  </Snackbar>
                </div>
              </Form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
      <Card className="bg-transparent sm:flex ">
        <CardBody>
          <div className="select-none pointer-events-none">
            <Image
              width={720}
              src="/Images/windowPizza.png"
              alt="HeroUI Album Cover"
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

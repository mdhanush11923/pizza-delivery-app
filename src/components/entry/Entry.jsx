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
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import SocialLogin from "./SocialLogin";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Entry(props) {
  // const router = useRouter();
  // const { data: session, status } = useSession();

  // if (status === "authenticated") {
  //   router.replace("/admin"); // Redirect logged-in users
  //   return null; // Prevent rendering login form
  // }

  const [isSignedUp, setIsSignedUp] = React.useState(false);

  const [openSignupAlert, setOpenSignupAlert] = React.useState(false);

  const [details, setDetails] = React.useState({
    email: "",
    p1: "",
    p2: "",
    firstName: "",
    lastName: "",
  });

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
              <LoginForm />
              <Divider className="my-5" />
              <SocialLogin />
            </Tab>

            <Tab key="signup" title="Sign up">
              <RegisterForm />
              <Divider className="my-5" />
              <SocialLogin />
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

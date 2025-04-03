import { Button } from "@heroui/react";
import { GitHub, Google } from "@mui/icons-material";
import * as actions from "@/actions";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function SocialLogin() {
  // const { data: session, status } = useSession();

  return (
    <div className="flex justify-between">
      <div className="flex w-full px-3 items-center gap-3">
        <h2 className="font-light">Continue with</h2>
        <form action={actions.signInGoogle}>
          <Button isIconOnly variant="light" size="sm" type="submit">
            <Google />
          </Button>
        </form>
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
          redirect("/pizza-delivery/admin");
        }}
        href="/pizza-delivery/admin"
      >
        Admin?
      </Button>
    </div>
  );
}

import dynamic from "next/dynamic";
import Loading from "@/components/LoadingPage";
const Menu = dynamic(() => import("@/components/MenuPage"), {
  loading: () => <Loading />,
});

export default function MenuPage() {
  return <Menu />;
}

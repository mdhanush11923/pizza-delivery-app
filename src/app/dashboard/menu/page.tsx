import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
const Menu = dynamic(() => import("@/components/Menu"), {
  loading: () => <Loading />,
});

export default function MenuPage() {
  return <Menu />;
}

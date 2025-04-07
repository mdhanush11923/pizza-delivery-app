import Loading from "@/components/LoadingPage";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/HeroPage"), {
  loading: () => <Loading />,
});

export default function PricingPage() {
  return (
    <Hero/>
  );
}

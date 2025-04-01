import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <Loading />,
});

export default function PricingPage() {
  return (
    <Hero/>
  );
}

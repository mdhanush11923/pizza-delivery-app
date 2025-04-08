import dynamic from "next/dynamic";
import Loading from "@/components/LoadingPage";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/CartData";
import CartUi from "@/components/cart/CartUi";
// import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Topbar = dynamic(() => import("@/components/layout/Topbar"), {
  loading: () => <Loading />,
});
// const Footer = dynamic(() => import("@/components/Footer"), {
//   loading: () => <Footer />,
// })

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();
  if(true) {

    return (
      <section className="">
        <CartProvider>
          <Topbar />
          <div className="flex flex-col items-center justify-center gap-4 max-w-screen-xl mx-auto mt-5 px-5">
            {children}
          </div>
          <CartUi />
          <Footer />
        </CartProvider>
      </section>
    );
}
else {
  redirect("/login");
  return null;
}
}

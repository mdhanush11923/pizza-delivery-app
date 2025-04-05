import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import { CartProvider } from "@/components/CartData";
import CartUi from "@/components/CartUi";
// import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Topbar = dynamic(() => import("@/components/Topbar"), {
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
          <div className="flex flex-col items-center justify-center gap-4 max-w-screen-xl mx-auto mt-10 p-5">
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

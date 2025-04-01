import AdminNavbar from "@/components/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="lg:px-16">
      <AdminNavbar/>
      <div className="flex justify-center items-center w-full">
        {children}
      </div>
    </section>
  );
}

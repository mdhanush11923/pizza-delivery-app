import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <AdminNavbar />
      <div className="flex flex-col items-center justify-center gap-4 max-w-screen-xl mx-auto mt-5 p-5">
        {children}
      </div>
    </section>
  );
}

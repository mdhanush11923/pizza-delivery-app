export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col min-h-screen">
      <div>{children}</div>
    </section>
  );
}

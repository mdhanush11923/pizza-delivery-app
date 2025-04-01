// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="">
        {children}
      </div>
  );
}

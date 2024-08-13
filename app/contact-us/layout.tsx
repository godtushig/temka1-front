export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center pb-24 md:py-60
        bg-cover bg-no-repeat px-7 md:px-28 h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(main-section-images/what-we-do.png)`,
      }}
    >
      {children}
    </div>
  );
}

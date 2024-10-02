export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center pb-24
        bg-cover bg-no-repeat  h-full md:pb-72"
      // px-7 md:px-28
      style={{
        backgroundImage: `url(main-section-images/what-we-do.png)`,
      }}
    >
      {children}
    </div>
  );
}

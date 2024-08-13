export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center pb-24 md:py-60
      bg-cover bg-no-repeat px-7 md:px-28"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(main-section-images/what-we-do.png)`,
      }}
    >
      <div className="inline-block text-center w-full">{children}</div>
    </div>
  );
}

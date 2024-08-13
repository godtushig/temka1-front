export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center pb-24 md:pb-72
      bg-[100vw,50vh] md:bg-contain bg-no-repeat"
      // py-8 md:py-10
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(main-section-images/what-we-do.png)`,
      }}
    >
      <div className="inline-block text-center w-full">{children}</div>
    </div>
  );
}

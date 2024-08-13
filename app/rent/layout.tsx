export default function RentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 md:py-60"
      // py-8 md:py-10
    >
      <div className="inline-block text-center w-full">{children}</div>
    </div>
  );
}

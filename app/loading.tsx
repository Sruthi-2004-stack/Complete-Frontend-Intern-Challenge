export default function Loading() {
  return (
    <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="
            h-48
            animate-pulse
            rounded-3xl
            bg-zinc-800
          "
        />
      ))}
    </div>
  );
}
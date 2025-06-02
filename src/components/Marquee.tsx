export default function Marquee() {
  return (
    <div className="w-full mx-auto px-27 overflow-hidden flex justify-center items-center h-[7.6rem]">
      <div className="flex animate-marquee gap-4">
        {Array.from({ length: 8 }, (_, i) => i + 1).map((i) => (
          <img
            key={i}
            src={`img${i}.svg`}
            alt={`Marquee Image ${i}`}
            className="h-[2rem] w-auto object-contain p-0 "
          />
        ))}
      </div>
    </div>
  );
}

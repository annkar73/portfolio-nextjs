import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[60vh] w-full">
      <Image
        src="/images/hero_image.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center space-y-4 py-8">
        <h1 className="text-(--color-accent) text-4xl md:text-5xl font-bold text-center">
          Anna Karlsen
        </h1>
        <h3 className="text-(--color-accent) text-2xl">Front End Developer</h3>
        <div className=" my-10 mx-10">
          <p className="text-(--color-accent)">
            Välkommen till min portfolio! Här kan du utforska mina projekt, läsa
            om min utbildning och se hur jag kan hjälpa dig med dina
            frontend-behov.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[60vh] w-full">
      <Image
        src="/images/hero_image2.png"
        alt="Hero background"
        fill
        priority
        className="object-cover border-none"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center space-y-4 py-8">
        <h1 className="text-(--color-accent) text-4xl md:text-5xl font-bold text-center">
          Anna Karlsen
        </h1>
        <h3 className="text-(--color-background) text-xl md:text-3xl italic font-mono">&lt; Front End Developer /&gt;</h3>
        <div className=" my-10 mx-10 text-(--color-accent) text-xl md:text-2xl space-y-4">
          <p>
            <q className="italic">När du väl slutar lära dig börjar du dö</q>, sa Albert Einstein.
            </p>
            <p>
                Riktigt så illa är det väl inte? Jag tror däremot att det är viktigt att ständigt
            utvecklas och lära sig nya saker.
            </p>
          
        </div>
      </div>
    </section>
  );
}

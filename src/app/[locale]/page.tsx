'use client';
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    
      <Hero />

      <main className="p-6 text-[var(--color-foreground)] bg-white max-w-3xl mx-auto">
        <div className="w-full max-w-3xl text-left border-0 border-l-5 border-[var(--color-accent)] rounded-none p-6 mb-8">
          kortfattad info om utbildningen
          </div>
                  <div className="w-full max-w-3xl text-right border-0 border-r-5 border-[var(--color-accent)] rounded-none p-6 mb-8">
          kortfattad info om CV, eller kanske snarare en presentation av mig själv och sen länka vidare till CV för mer info om vem jag är. Bör ha länk till LinkedIn eftersom jag inte har lagt det i det utskrivbara CVt. Men jag måste också hela tiden hålla koll på hur långt ett block blir om det är så att jag vill ha det lite kortare för att hålla sidlayouten lite intressantare
          </div>
                  <div className="w-full max-w-3xl text-left border-0 border-l-5 border-[var(--color-accent)] rounded-none p-6 mb-8">
          karusell med projektkort
          </div>
                  <div className="w-full max-w-3xl text-right border-0 border-r-5 border-[var(--color-accent)] rounded-none p-6 mb-8">
          kortfattad kontaktinfo som kanske kommer bli ett formulär eller liknande, så jag vet ju inte hur mycket jag behöver bry mig om alignment och sånt just här
          </div>



      </main>
    </>
  
  );
}

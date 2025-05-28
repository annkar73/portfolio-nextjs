import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    
      <Hero />

      <main className="p-6 text-[var(--color-foreground)] bg-white max-w-3xl mx-auto">
        <div className="w-full max-w-3xl border-0 border-l-5 border-[var(--color-accent)] rounded-none p-6 mb-8">
          kortfattad info om utbildningen
          </div>
                  <div className="w-full max-w-3xl border-0 border-l-5 border-[var(--color-accent)] rounded-none p-6 mb-8">
          kortfattad info om CV
          </div>
                  <div className="w-full max-w-3xl border-0 border-l-5 border-[var(--color-accent)] rounded-none p-6 mb-8">
          karusell med projektkort
          </div>
                  <div className="w-full max-w-3xl border-0 border-l-5 border-[var(--color-accent)] rounded-none p-6 mb-8">
          kortfattad kontaktinfo
          </div>



      </main>
    </>
  
  );
}

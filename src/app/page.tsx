import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    
      <Hero />

      <main className="flex flex-col gap-[32px] row-start-2 items-center max-w-5xl mx-auto px-10 py-4 sm:items-start">
          
          <div className="border-(--color-accent) border-3 bg-gray-200 w-full dark:bg-gray-800 p-4 my-2 rounded-none">
            om utbildningen
          </div>
          <div className="border-(--color-accent) border-3 bg-gray-300 w-full dark:bg-gray-800 p-4 my-2 rounded-none">
            överblick av CV
          </div>
          <div className="border-(--color-accent) border-3 bg-gray-400 w-full dark:bg-gray-800 p-4 my-2 rounded-none">
            projektkarusell och länk till projektsida
          </div>
          <div className="border-(--color-accent) border-3 bg-(--color-foreground) text-(--color-background) w-full dark:bg-gray-800 p-4 my-2 rounded-none">
            kontakt kortfattat med länkar till linkedIn och github 
          </div>
      </main>
    </>
  
  );
}

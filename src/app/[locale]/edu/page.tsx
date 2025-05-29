
// app/edu/page.tsx (server component)
import EduContent from "./eduContent"; // client component

export const dynamic = 'force-static';

export default async function EduPage() {
  return (
    <main className="p-6 text-[var(--color-foreground)] bg-white max-w-3xl mx-auto">
      <EduContent />
    </main>
  );
}

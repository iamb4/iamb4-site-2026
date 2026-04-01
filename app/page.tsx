export default function Home() {
  return (
    <div className="flex min-h-screen gap-16 py-22">
      <aside className="w-30 shrink-0">
        {/* left column */}
        logo
      </aside>
      <section className="flex-1">
        {/* right column */}
        content column
      </section>
    </div>
  );
}

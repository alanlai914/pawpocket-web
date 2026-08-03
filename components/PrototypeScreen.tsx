import Link from "next/link";

type LinkItem = { href: string; label: string };

export function PrototypeScreen({
  title,
  note,
  links = [],
}: {
  title: string;
  note: string;
  links?: LinkItem[];
}) {
  return (
    <main className="prototype-shell">
      <section className="prototype-card">
        <h1>{title}</h1>
        <p className="prototype-note">{note}</p>
        {links.length > 0 && (
          <nav className="prototype-nav">
            {links.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        )}
      </section>
    </main>
  );
}

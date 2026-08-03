import Link from "next/link";
import styles from "./PrototypeScreen.module.css";

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
    <main className={styles.shell}>
      <section className={styles.card}>
        <h1>{title}</h1>
        <p className={styles.note}>{note}</p>
        {links.length > 0 && (
          <nav className={styles.nav}>
            {links.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        )}
      </section>
    </main>
  );
}

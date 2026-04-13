import Link from 'next/link';
import { navItems, school } from '@/lib/content';

export function Header() {
  return (
    <header className="header">
      <div className="container row-between">
        <Link href="/" className="brand" aria-label={`${school.name} home`}>
          <span className="brand-mark">GF</span>
          <span>{school.name}</span>
        </Link>
        <nav aria-label="Main menu">
          <ul className="menu">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

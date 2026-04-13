import Link from 'next/link';
import { school } from '@/lib/content';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container grid-3">
        <div>
          <h3>{school.name}</h3>
          <p>{school.address}</p>
          <p>
            <a href={`tel:${school.phone}`}>{school.phone}</a>
          </p>
          <p>
            <a href={`mailto:${school.email}`}>{school.email}</a>
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/admissions">Admissions Open</Link></li>
            <li><Link href="/academics">Academics</Link></li>
            <li><Link href="/news">News & Events</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p><a href={school.socialLinks.facebook}>Facebook</a></p>
          <p><a href={school.socialLinks.instagram}>Instagram</a></p>
          <p><a href={school.socialLinks.youtube}>YouTube</a></p>
          <p className="small">{school.officeHours}</p>
        </div>
      </div>
    </footer>
  );
}

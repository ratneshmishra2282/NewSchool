import type { Metadata } from 'next';
import { school } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact details, office hours, Google Maps, and secure contact form.'
};

export default function ContactPage() {
  return (
    <section className="container section">
      <h1>Contact Us</h1>
      <p>{school.address}</p>
      <p><a href={`tel:${school.phone}`}>{school.phone}</a> | <a href={`mailto:${school.email}`}>{school.email}</a></p>
      <p>{school.officeHours}</p>
      <iframe
        title="School location map"
        src="https://www.google.com/maps?q=Springfield&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <form className="form" method="post" action="/api/contact">
        <label>Name<input name="name" required /></label>
        <label>Email<input type="email" name="email" required /></label>
        <label>Message<textarea name="message" required /></label>
        <button className="btn" type="submit">Send Message</button>
      </form>
      <form className="newsletter" method="post" action="/api/newsletter">
        <label>Newsletter Signup<input name="email" type="email" required placeholder="you@example.com" /></label>
        <button className="btn" type="submit">Subscribe</button>
      </form>
    </section>
  );
}

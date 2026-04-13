import Image from 'next/image';
import Link from 'next/link';
import { school } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div>
          <h1>{school.name}</h1>
          <p>{school.tagline}</p>
          <Link className="btn" href="/admissions">Admissions Open</Link>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
          alt="Students learning in a modern classroom"
          width={1000}
          height={650}
          priority
        />
      </section>
      <section className="container section">
        <h2>Why Choose Us</h2>
        <div className="grid-3">
          <article className="card"><h3>Academic Excellence</h3><p>Board-aligned curriculum with project-based learning.</p></article>
          <article className="card"><h3>Safe Campus</h3><p>Monitored transport, CCTV, and trained safety staff.</p></article>
          <article className="card"><h3>Future Ready</h3><p>STEM labs, coding, sports, arts, and leadership programs.</p></article>
        </div>
      </section>
      <section className="container section">
        <h2>Quick Links</h2>
        <div className="quick-links">
          <Link href="/admissions">Admissions</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>
      <section className="container section">
        <h2>Latest News & Events</h2>
        <ul>
          <li>April 20: Inter-school science fair registration open.</li>
          <li>May 5: Parent orientation for new admissions.</li>
          <li>May 18: Summer sports camp begins.</li>
        </ul>
      </section>
      <section className="container section">
        <h2>Testimonials</h2>
        <blockquote>“The teachers are caring and highly skilled.” — Parent of Grade 6 student</blockquote>
        <blockquote>“I love the robotics and football programs.” — Grade 9 student</blockquote>
      </section>
      <section className="container section">
        <h2>Campus Facilities Overview</h2>
        <p>Smart classrooms, rich library resources, advanced labs, indoor and outdoor sports zones, and digital learning systems.</p>
      </section>
    </>
  );
}

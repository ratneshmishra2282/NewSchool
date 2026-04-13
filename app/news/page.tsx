import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Announcements, upcoming events, and school blog articles.'
};

export default function NewsPage() {
  return (
    <section className="container section">
      <h1>News & Events</h1>
      <article className="card"><h2>Annual Day 2026</h2><p>Students present performances celebrating diversity and innovation.</p></article>
      <article className="card"><h2>STEM Bootcamp</h2><p>Hands-on coding and robotics workshops for grades 7-10.</p></article>
      <article className="card"><h2>SEO Blog</h2><p>Read learning tips, exam prep guides, and parent resources to improve discovery.</p></article>
    </section>
  );
}

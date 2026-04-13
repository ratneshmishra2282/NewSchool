import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our vision, mission, leadership message, history, and achievements.'
};

export default function AboutPage() {
  return (
    <section className="container section">
      <h1>About Us</h1>
      <h2>School Overview</h2><p>Greenfield International School provides value-based, learner-centered K-12 education.</p>
      <h2>Vision & Mission</h2><p>To build compassionate global citizens through academic rigor and character development.</p>
      <h2>Message from Principal</h2><p>We focus on every child’s growth through partnership with families and community.</p>
      <h2>History</h2><p>Founded in 1998, the institution has grown into a leading school in the region.</p>
      <h2>Achievements</h2><p>National Olympiad ranks, sports championships, and innovation awards.</p>
    </section>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academics',
  description: 'Curriculum, subjects, class structure, teaching methodology, and academic calendar.'
};

export default function AcademicsPage() {
  return (
    <section className="container section">
      <h1>Academics</h1>
      <h2>Curriculum</h2><p>CBSE-integrated curriculum with foundational literacy, STEM, and life skills.</p>
      <h2>Class-wise Structure</h2><p>Primary (I-V), Middle (VI-VIII), Secondary (IX-X), Senior Secondary (XI-XII).</p>
      <h2>Subjects Offered</h2><p>Mathematics, Sciences, Languages, Social Studies, Computer Science, Arts, and Physical Education.</p>
      <h2>Teaching Methodology</h2><p>Blended learning, experiential projects, and regular formative assessments.</p>
      <h2>Academic Calendar</h2><p><a href="/docs/academic-calendar.pdf" download>Download Academic Calendar (PDF)</a></p>
    </section>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Corner',
  description: 'Homework, assignments, results portal, notices, and downloadable resources.'
};

export default function StudentCornerPage() {
  return (
    <section className="container section">
      <h1>Student Corner</h1>
      <h2>Homework & Assignments</h2><p>Weekly assignments published by class teachers.</p>
      <h2>Results Portal</h2><p>Secure login-based grade and report access.</p>
      <h2>Notices</h2><p>Important circulars and exam updates.</p>
      <h2>Downloads</h2><p><a href="/docs/sample-worksheet.pdf" download>Download Sample Worksheet</a></p>
    </section>
  );
}

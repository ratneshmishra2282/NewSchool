import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faculty & Staff',
  description: 'Meet our teachers, staff profiles, and administrative team.'
};

export default function FacultyPage() {
  return (
    <section className="container section">
      <h1>Faculty & Staff</h1>
      <h2>Teachers</h2>
      <ul>
        <li>Ms. A. Johnson — M.Ed, English Department</li>
        <li>Mr. R. Patel — M.Sc, Mathematics Department</li>
        <li>Ms. M. Rivera — M.Tech, Computer Science</li>
      </ul>
      <h2>Administrative Team</h2>
      <p>Experienced operations, counseling, transport, and student support teams.</p>
    </section>
  );
}

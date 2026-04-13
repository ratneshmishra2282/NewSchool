import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Admission process, eligibility, fee structure, important dates, and online application form.'
};

export default function AdmissionsPage() {
  return (
    <section className="container section">
      <h1>Admissions</h1>
      <h2>Process</h2>
      <ol>
        <li>Submit inquiry or apply online.</li>
        <li>Document verification and counseling.</li>
        <li>Assessment (age-appropriate).</li>
        <li>Fee payment and enrollment confirmation.</li>
      </ol>
      <h2>Eligibility</h2><p>Age criteria and prior academic records as per grade level.</p>
      <h2>Fee Structure</h2><p>Transparent annual tuition and activity fees. Contact admissions for details.</p>
      <h2>Important Dates</h2><p>Applications open: April 1. Session starts: June 10.</p>
      <h2>Online Admission Form</h2>
      <form className="form" action="/api/contact" method="post">
        <label>Student Name<input required name="name" /></label>
        <label>Email<input required type="email" name="email" /></label>
        <label>Message<textarea required name="message" /></label>
        <button type="submit" className="btn">Submit Application Inquiry</button>
      </form>
      <p><a href="/docs/prospectus.pdf" download>Download Prospectus</a></p>
    </section>
  );
}

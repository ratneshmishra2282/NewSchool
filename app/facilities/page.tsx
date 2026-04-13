import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facilities',
  description: 'Explore classrooms, library, labs, sports, transportation, and hostel facilities.'
};

export default function FacilitiesPage() {
  return (
    <section className="container section">
      <h1>Facilities</h1>
      <h2>Smart Classrooms</h2><p>Digitally enabled learning spaces with interactive content.</p>
      <h2>Library</h2><p>Large collection of print and digital resources with reading zones.</p>
      <h2>Laboratories</h2><p>Physics, Chemistry, Biology, and Computer science labs.</p>
      <h2>Sports</h2><p>Football ground, basketball court, indoor games, and fitness center.</p>
      <h2>Transportation</h2><p>GPS-enabled buses covering key routes.</p>
      <h2>Hostel</h2><p>Safe residential options with supervised study support.</p>
    </section>
  );
}

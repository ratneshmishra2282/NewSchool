import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photo and video gallery showcasing events, activities, and campus life.'
};

const photos = [
  'photo-1497633762265-9d179a990aa6',
  'photo-1523050854058-8df90110c9f1',
  'photo-1588072432836-e10032774350'
];

export default function GalleryPage() {
  return (
    <section className="container section">
      <h1>Gallery</h1>
      <div className="gallery">
        {photos.map((id) => (
          <Image
            key={id}
            src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`}
            alt="School event and campus activity"
            width={800}
            height={500}
            loading="lazy"
          />
        ))}
      </div>
      <h2>Video Gallery</h2><p>Campus tour and student performance videos are available on our YouTube channel.</p>
    </section>
  );
}

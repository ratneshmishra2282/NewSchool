import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel',
  description: 'CMS-ready admin area for secure content updates and portal management.'
};

export default function AdminPage() {
  return (
    <section className="container section">
      <h1>Admin Panel</h1>
      <p>This CMS-ready area is prepared for integrating headless CMS or database-backed editors.</p>
      <form className="form" method="post" action="/api/login">
        <label>Admin Email<input type="email" name="email" required /></label>
        <label>Password<input type="password" name="password" required minLength={8} /></label>
        <button className="btn" type="submit">Login</button>
      </form>
    </section>
  );
}

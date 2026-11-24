import AdminClient from '@/components/AdminClient';
import AdminLogin from '@/components/AdminLogin';
import { adminEnabled, isAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// Server-side gate: the price editor is only rendered for a logged-in admin
// (see lib/auth.ts). The password comes from the ADMIN_PASSWORD env var.
export default async function AdminPage() {
  if (!adminEnabled()) {
    return (
      <main>
        <section>
          <div className="wrap" style={{ maxWidth: 520 }}>
            <h2 className="sec">BYZIST — Admin</h2>
            <p className="sec-sub">
              The admin is disabled because the <code>ADMIN_PASSWORD</code> environment variable
              is not set on this server. Set it and restart the site to enable price management.
            </p>
          </div>
        </section>
      </main>
    );
  }
  if (!(await isAdminSession())) {
    return <AdminLogin />;
  }
  return <AdminClient />;
}

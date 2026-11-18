'use client';
import { useState } from 'react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Checking…');
    const r = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (r.ok) {
      window.location.reload();
    } else {
      const data = await r.json().catch(() => ({}));
      setStatus(data.error || 'Login failed (' + r.status + ')');
    }
  }

  return (
    <main>
      <section>
        <div className="wrap" style={{ maxWidth: 420 }}>
          <h2 className="sec">Oligarch Travel — Admin</h2>
          <p className="sec-sub">Enter the admin password to manage prices.</p>
          <form onSubmit={submit}>
            <div className="field">
              <label htmlFor="admin-pw">Password</label>
              <input
                id="admin-pw"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn accent" type="submit">
              Log in
            </button>
            <p className="small" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

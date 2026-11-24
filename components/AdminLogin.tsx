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
    <main className="adm">
      <div className="adm-login-card">
        <h2 className="sec">BYZIST — Admin</h2>
        <p className="sec-sub">Enter the admin password to manage prices.</p>
        <form onSubmit={submit}>
          <div className="adm-field">
            <label htmlFor="admin-pw">Password</label>
            <input
              id="admin-pw"
              className="adm-input"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn accent adm-login-btn" type="submit">
            Log in
          </button>
          <p className="adm-login-status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </main>
  );
}

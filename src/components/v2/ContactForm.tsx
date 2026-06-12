'use client';

import { useState, type FormEvent } from 'react';

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = 'idle' | 'sending' | 'sent' | 'error';

/* Short-form close: name, email, which practice, one message box.
 * Posts to Web3Forms when configured; otherwise opens a prefilled
 * email draft so no lead is ever dropped. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [need, setNeed] = useState('A website');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');
    const botcheck = data.get('botcheck'); // honeypot — bots tick this, humans can't see it

    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Project inquiry — ${need}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nNeed: ${need}\n\n${message}`);
      window.location.href = `mailto:mberanek@emberonix.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Emberonix lead — ${need}`,
          from_name: 'Emberonix Site',
          name,
          email,
          need,
          message,
          botcheck,
        }),
      });
      const json = await res.json().catch(() => null);
      setStatus(res.ok && json?.success ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="glass-panel border border-accent/30 p-8 md:p-10 text-center">
        <span className="mono-label text-accent block mb-3">// MESSAGE RECEIVED</span>
        <p className="font-display uppercase text-3xl text-text-primary mb-2">Got it.</p>
        <p className="font-sans text-body text-text-secondary">
          I read every message myself — you&rsquo;ll hear back within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-panel border border-hairline p-7 md:p-9 flex flex-col gap-5">
      {/* Honeypot — hidden from humans, catches bots (the public access key invites spam) */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2">
          <span className="mono-label text-text-muted">NAME</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="contact-input"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="mono-label text-text-muted">EMAIL</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="contact-input"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <fieldset>
        <legend className="mono-label text-text-muted mb-2">I NEED…</legend>
        <div className="flex flex-wrap gap-2">
          {['A website', 'AI engineering', 'Both / not sure'].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setNeed(opt)}
              aria-pressed={need === opt}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border transition-colors duration-200 ${
                need === opt
                  ? 'border-accent text-accent bg-accent/10'
                  : 'border-hairline text-text-muted hover:border-text-muted'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2">
        <span className="mono-label text-text-muted">WHAT ARE YOU BUILDING?</span>
        <textarea
          name="message"
          required
          rows={4}
          className="contact-input resize-none"
          placeholder="A couple of sentences is plenty — we'll cover the rest on the call."
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 mt-1">
        <button type="submit" className="btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Request a Free Call'}
        </button>
        <span className="mono-label text-text-dim">FREE 20-MIN CALL ● FIXED QUOTE ● NO OBLIGATION</span>
      </div>
      {status === 'error' && (
        <p className="font-sans text-small text-error">
          That didn&rsquo;t go through — email me directly at{' '}
          <a href="mailto:mberanek@emberonix.com" className="text-accent underline">mberanek@emberonix.com</a>.
        </p>
      )}
    </form>
  );
}

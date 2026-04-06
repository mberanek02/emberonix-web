import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support — Memotive',
  description:
    'Get help with Memotive. FAQs about subscriptions, account management, privacy, and more.',
};

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="py-6 hairline-b last:border-0">
      <h3 className="font-serif text-h3 font-light text-text-primary mb-3">
        {question}
      </h3>
      <p className="font-sans text-body text-text-secondary leading-relaxed">
        {answer}
      </p>
    </div>
  );
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/projects/memotive"
          className="font-sans text-small text-text-muted hover:text-accent transition-colors"
        >
          &larr; Back to Memotive
        </Link>

        <h1 className="font-serif text-h1 font-light mt-8 mb-4">
          Support
        </h1>
        <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-12">
          We&rsquo;re here to help. Reach out anytime at{' '}
          <a
            href="mailto:mberanek@emberonix.com"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            mberanek@emberonix.com
          </a>
          .
        </p>

        {/* ─── Contact ─── */}
        <section className="mb-16">
          <div className="bg-bg-card border border-hairline p-8">
            <h2 className="font-serif text-h3 font-light text-text-primary mb-4">
              Contact Us
            </h2>
            <p className="font-sans text-body text-text-secondary leading-relaxed mb-4">
              For any questions, issues, or feedback, email us directly. We typically respond within 24 hours.
            </p>
            <a
              href="mailto:mberanek@emberonix.com"
              className="inline-flex items-center px-6 py-3 bg-accent text-bg text-small font-sans font-medium tracking-wide hover:bg-accent-hover transition-colors duration-200"
            >
              mberanek@emberonix.com
            </a>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section>
          <h2 className="font-serif text-h2 font-light text-text-primary mb-2">
            Frequently Asked Questions
          </h2>
          <div className="accent-line mt-4 mb-8" />

          <FAQItem
            question="How do I cancel my subscription?"
            answer="Open Settings on your iPhone, tap your name, then Subscriptions, find Memotive, and tap Cancel Subscription. You'll keep full access until the end of your current billing period."
          />

          <FAQItem
            question="How does the free trial work?"
            answer="You get 7 days of full access at no charge. You can cancel anytime during the trial and won't be charged. If you don't cancel, your subscription begins automatically at the end of the trial."
          />

          <FAQItem
            question="How do I delete my account and data?"
            answer="In the app, go to Profile > Settings > Delete Account. This permanently removes your account, conversation history, health data, and all associated information. This action cannot be undone."
          />

          <FAQItem
            question="How do I restore my purchase on a new device?"
            answer="Open the app on your new device, sign in with the same Apple ID, then go to the subscription screen and tap &ldquo;Restore Purchases.&rdquo;"
          />

          <FAQItem
            question="Does Memotive share my health data?"
            answer="No. Your conversations are encrypted in transit and at rest. Your health data is never sold or shared with third parties. AI conversations are not used to train models. You can export or delete your data at any time."
          />

          <FAQItem
            question="What data does Memotive collect?"
            answer="Conversations with your coach, meal photos and nutrition data, health metrics you choose to share via Apple Health, and your goals and preferences. All data is used solely to personalize your coaching experience."
          />

          <FAQItem
            question="How do I contact support?"
            answer="Email us at mberanek@emberonix.com. We typically respond within 24 hours."
          />
        </section>

        {/* ─── Footer Links ─── */}
        <div className="mt-16 pt-8 hairline-t flex flex-wrap gap-6">
          <Link
            href="/projects/memotive/privacy"
            className="font-sans text-small text-text-muted hover:text-accent transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/projects/memotive/terms"
            className="font-sans text-small text-text-muted hover:text-accent transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/projects/memotive"
            className="font-sans text-small text-text-muted hover:text-accent transition-colors"
          >
            Back to Memotive
          </Link>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Memotive',
  description: 'Privacy Policy for the Memotive iOS application.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/projects/memotive"
          className="font-sans text-small text-text-muted hover:text-accent transition-colors"
        >
          &larr; Back to Memotive
        </Link>

        <h1 className="font-serif text-h1 font-light mt-8 mb-2">
          Privacy Policy
        </h1>
        <p className="font-sans text-small text-text-muted mb-12">
          Effective Date: March 24, 2026
        </p>

        <div className="space-y-10 font-sans text-body text-text-secondary leading-relaxed">
          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              1. Introduction
            </h2>
            <p>
              Emberonix LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates the Memotive iOS application
              (&ldquo;App&rdquo;). This Privacy Policy explains how we collect,
              use, store, and protect your personal information when you use the
              App.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              2. Information We Collect
            </h2>

            <h3 className="font-sans text-body font-medium text-text-primary mt-4 mb-2">
              Account Information
            </h3>
            <p className="mb-4">
              When you create an account, we collect your email address and
              authentication credentials. If you sign in with Apple, we receive
              the information you authorize Apple to share.
            </p>

            <h3 className="font-sans text-body font-medium text-text-primary mt-4 mb-2">
              Conversation Data
            </h3>
            <p className="mb-4">
              Messages you send to the AI coach, including text and photos, are
              processed to provide personalized coaching. The coach maintains a
              memory of your preferences, goals, dietary restrictions, and health
              context to improve its guidance over time.
            </p>

            <h3 className="font-sans text-body font-medium text-text-primary mt-4 mb-2">
              Health Data (Optional)
            </h3>
            <p className="mb-4">
              With your explicit permission, the App may read health data from
              Apple Health, including but not limited to: steps, heart rate,
              sleep analysis, workouts, active calories, weight, body fat
              percentage, heart rate variability, VO2 max, walking distance,
              flights climbed, blood oxygen, respiratory rate, menstrual cycle
              data, and mindful minutes. This data is used solely to provide
              personalized health coaching.
            </p>

            <h3 className="font-sans text-body font-medium text-text-primary mt-4 mb-2">
              Meal Photos
            </h3>
            <p className="mb-4">
              Photos you submit for meal analysis are processed to estimate
              nutritional content. Photos are transmitted to our servers for
              analysis and are not retained after processing is complete.
            </p>

            <h3 className="font-sans text-body font-medium text-text-primary mt-4 mb-2">
              Usage Data
            </h3>
            <p>
              We collect crash reports and performance data through Sentry to
              maintain App stability. This data is anonymized and does not
              include your conversation content or health data.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>Provide personalized AI health and wellness coaching.</li>
              <li>
                Maintain coaching memory so the AI remembers your preferences,
                goals, and history.
              </li>
              <li>Analyze meal photos for nutritional tracking.</li>
              <li>
                Incorporate Apple Health data into coaching recommendations.
              </li>
              <li>Process subscription payments through Apple.</li>
              <li>Monitor App performance and fix crashes.</li>
              <li>Improve the quality of our coaching service.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              4. Third-Party Services
            </h2>
            <p className="mb-3">
              We use the following third-party services to operate the App:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <strong className="text-text-secondary">Anthropic (Claude)</strong> &mdash;
                AI language model that powers the coaching conversations. Your
                messages are sent to Anthropic&rsquo;s API for processing.
                Anthropic does not use your data to train its models.
              </li>
              <li>
                <strong className="text-text-secondary">Supabase</strong> &mdash;
                Secure database hosting and user authentication.
              </li>
              <li>
                <strong className="text-text-secondary">VoyageAI</strong> &mdash;
                Text embeddings for the coaching memory system. Only semantic
                representations of your data are processed, not raw content.
              </li>
              <li>
                <strong className="text-text-secondary">Sentry</strong> &mdash;
                Crash reporting and performance monitoring. No personal or health
                data is included in crash reports.
              </li>
              <li>
                <strong className="text-text-secondary">Apple</strong> &mdash;
                Subscription billing and App Store distribution.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              5. Data Storage and Security
            </h2>
            <p className="mb-3">
              Your data is stored on secure servers hosted by Supabase (AWS
              us-east-1) with the following protections:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>All data is encrypted in transit (TLS) and at rest.</li>
              <li>
                Row-level security (RLS) policies ensure users can only access
                their own data.
              </li>
              <li>
                Authentication is handled via JSON Web Tokens (JWT) with secure
                session management.
              </li>
              <li>
                Health data from Apple Health is synced to our servers only when
                you grant permission and is stored with the same security as all
                other user data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain your data for as long as your account is active. You may
              delete your account and all associated data at any time through the
              App&rsquo;s Settings &gt; Data &amp; Privacy section. Upon account
              deletion, all personal data, conversation history, health data, and
              coaching memories are permanently removed from our servers within
              30 days.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              7. Data Sharing
            </h2>
            <p className="mb-3">
              We do not sell, rent, or share your personal information with third
              parties for marketing purposes. We only share data as described in
              Section 4 (third-party services necessary to operate the App) or
              when required by law.
            </p>
            <p>
              We will never share your Apple Health data with advertisers,
              data brokers, or any third party beyond what is necessary to
              provide the coaching service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              8. Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                <strong className="text-text-secondary">Access</strong> your
                personal data stored in the App.
              </li>
              <li>
                <strong className="text-text-secondary">Delete</strong> your
                account and all associated data.
              </li>
              <li>
                <strong className="text-text-secondary">Revoke</strong> Apple
                Health permissions at any time through iOS Settings.
              </li>
              <li>
                <strong className="text-text-secondary">Withdraw</strong>{' '}
                consent for data processing by deleting your account.
              </li>
              <li>
                <strong className="text-text-secondary">Request</strong> a copy
                of your data by contacting us.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              9. Children&rsquo;s Privacy
            </h2>
            <p>
              The App is not intended for use by anyone under the age of 18. We
              do not knowingly collect personal information from children. If we
              become aware that a child under 18 has provided us with personal
              information, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. If we make
              material changes, we will notify you through the App or by other
              means. Your continued use of the App after changes are posted
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              11. Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy or your data,
              contact us at{' '}
              <a
                href="mailto:mberanek@emberonix.com"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                mberanek@emberonix.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="hairline-t mt-16 pt-8">
          <p className="font-sans text-small text-text-muted">
            &copy; {new Date().getFullYear()} Emberonix LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Memotive',
  description: 'Terms of Service for the Memotive iOS application.',
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="font-sans text-small text-text-muted mb-12">
          Effective Date: March 24, 2026
        </p>

        <div className="space-y-10 font-sans text-body text-text-secondary leading-relaxed">
          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              By downloading, installing, or using the Memotive iOS application
              (&ldquo;App&rdquo;), you agree to be bound by these Terms of
              Service (&ldquo;Terms&rdquo;). The App is operated by Emberonix
              LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              2. Description of Service
            </h2>
            <p>
              Memotive is an AI-powered health and wellness coaching application.
              The App provides personalized nutrition, fitness, and wellness
              guidance through conversational AI. Memotive is not a medical
              device, does not provide medical advice, and is not a substitute
              for professional medical care.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              3. Eligibility
            </h2>
            <p>
              You must be at least 18 years of age to use the App. By using the
              App, you represent and warrant that you meet this requirement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              4. Account Registration
            </h2>
            <p>
              You must create an account to use the App. You are responsible for
              maintaining the confidentiality of your account credentials and for
              all activities that occur under your account. You agree to notify
              us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              5. Subscriptions and Billing
            </h2>
            <p className="mb-3">
              Memotive offers paid subscription plans billed on a monthly or
              annual basis through Apple&rsquo;s App Store. By subscribing, you
              agree to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>
                Subscriptions automatically renew unless cancelled at least 24
                hours before the end of the current billing period.
              </li>
              <li>
                Payment is charged to your Apple ID account at confirmation of
                purchase.
              </li>
              <li>
                You may manage or cancel your subscription in your Apple ID
                account settings.
              </li>
              <li>
                A 7-day free trial may be offered to eligible new subscribers.
                If you do not cancel before the trial ends, you will be charged
                for the selected plan.
              </li>
              <li>
                Refunds are handled by Apple in accordance with their refund
                policies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              6. Health Disclaimer
            </h2>
            <p className="mb-3">
              The information provided by the App is for general informational
              and wellness purposes only. It is not intended as medical advice,
              diagnosis, or treatment. Always consult a qualified healthcare
              provider before making changes to your diet, exercise, or health
              regimen.
            </p>
            <p>
              We make no guarantees regarding the accuracy, completeness, or
              suitability of any health or nutrition information provided through
              the App. You use the App&rsquo;s guidance at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              7. Apple Health Integration
            </h2>
            <p>
              The App may request access to Apple Health data (such as steps,
              heart rate, sleep, and other metrics) to provide personalized
              coaching. This access is entirely optional and controlled by you
              through iOS settings. We only read the health data types you
              explicitly authorize.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              8. User Content
            </h2>
            <p>
              You retain ownership of any content you submit through the App
              (messages, photos, journal entries). By using the App, you grant us
              a limited license to process this content solely for the purpose of
              providing the coaching service to you. We do not sell your content
              to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              9. Acceptable Use
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-muted">
              <li>Use the App for any unlawful purpose.</li>
              <li>
                Attempt to reverse engineer, decompile, or disassemble the App.
              </li>
              <li>
                Interfere with or disrupt the App&rsquo;s servers or networks.
              </li>
              <li>
                Use the App to transmit harmful, abusive, or objectionable
                content.
              </li>
              <li>
                Share your account credentials with others or create multiple
                accounts.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              10. Intellectual Property
            </h2>
            <p>
              The App, including its design, features, and content (excluding
              user content), is owned by Emberonix LLC and protected by
              applicable intellectual property laws. You may not copy, modify,
              distribute, or create derivative works based on the App without our
              prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              11. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Emberonix LLC shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the App. Our total
              liability shall not exceed the amount you paid for the App in the
              12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              12. Termination
            </h2>
            <p>
              We may suspend or terminate your access to the App at any time, for
              any reason, with or without notice. Upon termination, your right to
              use the App ceases immediately. You may delete your account and
              data at any time through the App&rsquo;s settings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              13. Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. If we make material
              changes, we will notify you through the App or by other means. Your
              continued use of the App after changes are posted constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              14. Governing Law
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the State of Texas, without regard to conflict of law
              principles.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h3 font-light text-text-primary mb-3">
              15. Contact
            </h2>
            <p>
              If you have questions about these Terms, contact us at{' '}
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

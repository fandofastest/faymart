import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | FOOD ABOUT YOU LIMITED",
  description:
    "Privacy Policy of FOOD ABOUT YOU LIMITED describing what data we collect, how we use it, and your choices.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container-section py-16 sm:py-20 prose prose-invert max-w-3xl">
      <h1 className="mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400">Last updated: {new Date().getFullYear()}</p>

      <p>
        This Privacy Policy explains how FOOD ABOUT YOU LIMITED ("we", "us", "our")
        collects, uses, and protects personal information when you interact with our
        website and services.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Contact information you provide, such as name and email.</li>
        <li>Message content submitted via our contact form.</li>
        <li>Technical data such as IP address, browser type, and usage analytics.</li>
      </ul>

      <h2>How We Use Information</h2>
      <ul>
        <li>To respond to enquiries and provide our services.</li>
        <li>To improve site performance, usability, and security.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>Legal Basis</h2>
      <p>
        We process personal data based on legitimate interests in operating our business,
        your consent (where applicable), and compliance with legal requirements.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not sell personal data. We may share data with trusted service providers
        that help us operate our website and services, under appropriate safeguards.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain personal data only as long as necessary for the purposes outlined in
        this Policy or as required by law.
      </p>

      <h2>Your Rights</h2>
      <ul>
        <li>Access, rectify, or erase your personal data.</li>
        <li>Object to or restrict certain processing.</li>
        <li>Withdraw consent where processing is based on consent.</li>
      </ul>

      <h2>Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect
        personal data from unauthorized access, disclosure, alteration, or destruction.
      </p>

      <h2>International Transfers</h2>
      <p>
        Where data is transferred internationally, we use appropriate safeguards in
        accordance with applicable laws.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions or requests, please contact us via the form on the
        <Link href="#contact" className="mx-1 underline">Contact</Link> section of our homepage.
      </p>

      <p className="mt-10 text-sm">
        Return to <Link className="underline" href="/">Home</Link>
      </p>
    </main>
  );
}

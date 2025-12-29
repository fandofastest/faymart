import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Navbar />
      <Hero />

      <Section id="about" title="About Us" subtitle="Nourishing lives with better food choices">
        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-lg leading-8 text-gray-300">
            FOOD ABOUT YOU LIMITED is dedicated to crafting, sourcing, and delivering
            delightful food experiences. We blend culinary art, nutrition science, and
            sustainable sourcing to bring better choices to your table.
          </p>
          <div className="space-y-4">
            <div className="p-5 card">
              <h4 className="font-semibold">What we do</h4>
              <p className="text-gray-300">Product development, private label, and agile food innovation.</p>
            </div>
            <div className="p-5 card">
              <h4 className="font-semibold">Who we serve</h4>
              <p className="text-gray-300">Retailers, foodservice, founders, and health-focused brands.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="services" title="Products & Services" subtitle="From idea to shelf">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "R&D & Formulation", d: "Recipe development with sensory and nutritional targets." },
            { t: "Sourcing & Supply", d: "Trusted supply networks with traceability and quality." },
            { t: "Manufacturing", d: "Pilot to scale-up production with QA and compliance." },
            { t: "Brand & Packaging", d: "Consumer insights, design, and packaging sustainability." },
            { t: "Market Entry", d: "Channel strategy, listings, and growth enablement." },
            { t: "Advisory", d: "Regulatory, claims, and go-to-market strategy." },
          ].map((i) => (
            <div key={i.t} className="p-5 card hover:shadow-[0_20px_60px_-20px_rgba(30,64,175,.5)] transition-shadow">
              <h4 className="font-semibold mb-2">{i.t}</h4>
              <p className="text-sm text-gray-300">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="values" title="Our Values" subtitle="Taste. Health. Responsibility.">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "Taste First", d: "Deliciousness drives adoption and habit change." },
            { t: "Nutrition", d: "Balanced macros, mindful ingredients, clear labels." },
            { t: "Sustainability", d: "Better sourcing, less waste, lower impact." },
            { t: "Partnership", d: "Collaborative, transparent, outcome-driven." },
          ].map((i) => (
            <li key={i.t} className="p-5 card">
              <h4 className="font-semibold mb-2">{i.t}</h4>
              <p className="text-sm text-gray-300">{i.d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="company" title="Company Information" subtitle="Official details and registration">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-5 card">
            <h4 className="font-semibold mb-3">Registration</h4>
            <dl className="grid grid-cols-1 gap-2 text-sm">
              <div>
                <dt className="text-gray-500">Company name</dt>
                <dd className="font-medium">FOOD ABOUT YOU LIMITED</dd>
              </div>
              <div>
                <dt className="text-gray-500">Company number</dt>
                <dd className="font-medium">11795012</dd>
              </div>
              <div>
                <dt className="text-gray-500">Jurisdiction</dt>
                <dd className="font-medium">England and Wales</dd>
              </div>
              <div>
                <dt className="text-gray-500">Date of incorporation</dt>
                <dd className="font-medium">29 January 2019</dd>
              </div>
              <div>
                <dt className="text-gray-500">SIC</dt>
                <dd className="font-medium">56210</dd>
              </div>
            </dl>
          </div>
          <div className="p-5 card">
            <h4 className="font-semibold mb-3">Registered Office</h4>
            <address className="not-italic text-sm leading-6 text-gray-300">
              49 Brionne Way
              <br />
              Longlevens
              <br />
              Gloucester
              <br />
              United Kingdom GL2 0TW
            </address>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Officers and Share Capital</h5>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-300">
                <li>Director: Claire Wyldbore (British; country of residence: France)</li>
                <li>Share capital: 100 Ordinary shares (GBP 1.00 nominal each)</li>
                <li>Initial shareholder: Claire Wyldbore (100 Ordinary shares)</li>
              </ul>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Persons with Significant Control</h5>
              <p className="text-sm text-gray-300">
                On incorporation, Claire Wyldbore is a Person with Significant Control, holding
                75% or more of the shares and voting rights and having the right to appoint or
                remove a majority of the board of directors.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Let’s build something delicious together">
        <ContactForm />
      </Section>

      <Footer />
    </main>
  );
}

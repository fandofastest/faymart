"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="p-6 rounded-xl border bg-green-50 text-green-800">
        Thank you! We will get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
      <input
        className="w-full rounded-md glass px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-400 text-white"
        type="text" name="name" placeholder="Your name" value={form.name} onChange={onChange}
        required
      />
      <input
        className="w-full rounded-md glass px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-400 text-white"
        type="email" name="email" placeholder="Email address" value={form.email} onChange={onChange}
        required
      />
      <textarea
        className="w-full rounded-md glass px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-400 text-white"
        name="message" rows="5" placeholder="Tell us about your project" value={form.message} onChange={onChange}
        required
      />
      <button className="btn-primary w-fit" type="submit">Send message</button>
    </form>
  );
}

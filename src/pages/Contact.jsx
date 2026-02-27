import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateTeam = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_TEAM;
    const templateAuto = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY;

    try {
      if (!publicKey || !serviceId || !templateTeam || !templateAuto) {
        throw new Error("Missing EmailJS environment variables.");
      }

      if (serviceId.includes("@")) {
        throw new Error(
          "EmailJS service ID looks invalid. Use your service ID (e.g. service_xxxxx), not an email address."
        );
      }

      const formData = new FormData(formRef.current);
      const params = Object.fromEntries(formData.entries());
      const phoneValue = String(params.user_phone || "").trim();
      const messageValue = String(params.message || "").trim();
      const templateParams = {
        ...params,
        email: params.user_email,
        to_email: params.user_email,
        from_email: params.user_email,
        reply_to: params.user_email,
        name: params.user_name,
        company_name: params.company_name,
        company: params.company_name,
        address: params.address,
        phone: phoneValue,
        user_phone: phoneValue,
        phone_number: phoneValue,
        phone_no: phoneValue,
        mobile: phoneValue,
        message: messageValue,
        user_message: messageValue,
        enquiry_message: messageValue,
        details: messageValue,
      };

      // 1) Send to your team
      await emailjs.send(serviceId, templateTeam, templateParams, {
        publicKey,
      });

      // 2) Auto-reply to customer
      await emailjs.send(serviceId, templateAuto, templateParams, {
        publicKey,
      });

      setStatus({
        type: "success",
        msg: "Thanks! We’ve received your message. Please check your email for confirmation.",
      });
      formRef.current.reset();
    } catch (err) {
      setStatus({
        type: "error",
        msg:
          err?.text ||
          err?.message ||
          "Something went wrong while sending. Please try again.",
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
          <p className="mt-3 text-slate-600 max-w-xl">
            Share your requirement (foil type, substrate, application). We’ll
            respond with the best matching options.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 p-6 bg-white">
            <div className="font-semibold">Business Details</div>
            <div className="mt-3 text-sm text-slate-600 space-y-2">
              <div>📞 +91-9873416620</div>
              <div>✉️ miraixventures@gmail.com</div>
              <div>🕒 Mon–Sun, 9:00–22:00</div>
              <div>📍 A-28,Sector-63,Noida</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 bg-white">
          <h2 className="text-xl font-semibold">Send a message</h2>

          {status.msg && (
            <div
              className={`mt-4 rounded-xl p-3 text-sm ${
                status.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {status.msg}
            </div>
          )}

          <form ref={formRef} onSubmit={sendEmail} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="user_name"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="user_email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                name="company_name"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Your company"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                name="user_phone"
                type="tel"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="+91..."
              />
            </div>

            <div>
              <label className="text-sm font-medium">Address</label>
              <input
                name="address"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Street, city, state, country"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Requirement</label>
              <select
                name="requirement"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
                defaultValue="Metallic Foils"
              >
                <option>Metallic Foils</option>
                <option>Holographic Foils</option>
                <option>Matte / Satin</option>
                <option>Pigment Foils</option>
                <option>Specialty Effects</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Tell us substrate type, usage, quantity, etc."
              />
            </div>

            <button
              disabled={loading}
              className="w-full rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <p className="text-xs text-slate-500">
              By submitting, you agree to receive an automated confirmation
              email.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

'use client'

import React, { useState } from "react";

export default function BookingForm() {
    const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [datetime, setDatetime] = useState("");
  const [massageType, setMassageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedDate = new Date(datetime).toLocaleString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });

    const message = `Hello Uju, I'd like to book a ${massageType} session on ${formattedDate}. My name is ${name}, phone: ${phone}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348012345678?text=${encodedMessage}`;

    setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        setIsSubmitting(false);
      }, 1000);
  };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
  <div className="space-y-2">
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
      Full Name
    </label>
    <input
      type="text"
      id="name"
      placeholder="Enter your full name"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
  </div>

  <div className="space-y-2">
    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
      Phone Number
    </label>
    <input
      type="tel"
      id="phone"
      placeholder="Enter your WhatsApp number"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
    />
  </div>

  <div className="space-y-2">
    <label htmlFor="service" className="block text-sm font-medium text-gray-700">
      Service Type
    </label>
    <select
      id="service"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
      value={massageType}
      onChange={(e) => setMassageType(e.target.value)}
      required
    >
      <option value="" disabled>Select massage type</option>
      <option value="Swedish Massage">Swedish Massage - 60 min (₦10,000)</option>
      <option value="Deep Tissue Massage">Deep Tissue Massage - 90 min (₦15,000)</option>
      <option value="Home Service">Home Service (+₦2,500 transport fee)</option>
    </select>
  </div>

  <div className="space-y-2">
    <label htmlFor="datetime" className="block text-sm font-medium text-gray-700">
      Appointment Date & Time
    </label>
    <input
      type="datetime-local"
      id="datetime"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
      value={datetime}
      onChange={(e) => setDatetime(e.target.value)}
      required
    />
  </div>

  <div className="pt-2">
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full px-6 py-3.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48 3.255 2.777 3.695 7.266 1.029 10.501C16.608 19.942 11.659 20.922 7.7 19L3 20z"/>
      </svg>
      {isSubmitting ? "Redirecting to WhatsApp..." : "Send to WhatsApp"}
    </button>
  </div>
</form>
    )
}
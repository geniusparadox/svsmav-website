'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - can be connected to email service
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1D2931] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-[#B8BFC4]">
              Get in touch with our team. We&apos;re here to help with your welding and manufacturing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Get in Touch</h2>
              <p className="text-[#6F7B83] mb-8">
                Have questions about our products or services? We&apos;d love to hear from you.
                Send us a message and we&apos;ll respond as soon as possible.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F4F3EE] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1D2931] mb-1">Address</h3>
                    <p className="text-[#6F7B83]">
                      SVS Maverick Private Limited<br />
                      No 40/A, Site No 193/3,<br />
                      Narayanapura Main Road,<br />
                      Peenya Industrial Area,<br />
                      Bangalore - 560058, Karnataka, INDIA
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F4F3EE] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1D2931] mb-1">Email</h3>
                    <a href="mailto:sales@svsmav.com" className="text-[#EF290E] hover:underline">
                      sales@svsmav.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F4F3EE] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1D2931] mb-1">Phone</h3>
                    <p className="text-[#6F7B83]">
                      <a href="tel:+917204057172" className="hover:text-[#EF290E] transition-colors">+91 72040 57172</a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F4F3EE] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1D2931] mb-1">Business Hours</h3>
                    <p className="text-[#6F7B83]">
                      Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Saturday: 9:00 AM - 1:00 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Parent Company */}
                <div className="mt-8 p-4 bg-[#F4F3EE] rounded-lg">
                  <p className="text-sm text-[#6F7B83]">
                    <span className="font-semibold text-[#1D2931]">Part of SVS Schweisstechnik GmbH</span><br />
                    Germany - Global welding technology leader with over 100 years of expertise
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#F4F3EE] p-8 md:p-12 rounded-2xl">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1D2931] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E4DF] focus:border-[#EF290E] focus:ring-1 focus:ring-[#EF290E] outline-none transition-colors"
                        placeholder="Your Name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1D2931] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E4DF] focus:border-[#EF290E] focus:ring-1 focus:ring-[#EF290E] outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#1D2931] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E4DF] focus:border-[#EF290E] focus:ring-1 focus:ring-[#EF290E] outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1D2931] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E5E4DF] focus:border-[#EF290E] focus:ring-1 focus:ring-[#EF290E] outline-none transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#1D2931] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E4DF] focus:border-[#EF290E] focus:ring-1 focus:ring-[#EF290E] outline-none transition-colors bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="copper-alloys">Copper Alloys / WIRBALIT</option>
                      <option value="spot-welding">Spot Welding Components</option>
                      <option value="flexible-busbars">Flexible Busbars</option>
                      <option value="tip-dressing">Tip Dressing Units</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership / Distribution</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1D2931] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E4DF] focus:border-[#EF290E] focus:ring-1 focus:ring-[#EF290E] outline-none transition-colors resize-none"
                      placeholder="How can we help you? Please include details about your requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#F4F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-[#1D2931] mb-6 text-center">Our Location</h2>
        </div>
        <div className="h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0066744842454!2d77.51!3d13.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzAwLjAiTiA3N8KwMzAnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SVS Maverick Location - Peenya Industrial Area, Bangalore"
          ></iframe>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1D2931] mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Automotive', 'Electrical Industry', 'Mechanical Engineering', 'Shipbuilding', 'Home Appliance', 'Structural Steel'].map((industry) => (
              <div key={industry} className="bg-[#F4F3EE] p-4 rounded-xl text-center">
                <p className="font-medium text-[#1D2931] text-sm">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

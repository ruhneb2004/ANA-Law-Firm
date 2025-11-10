import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8D1A1B] text-white py-12 px-6 sticky lg:px-12 z-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-2 ">
          <h3 className="text-xl font-semibold mb-4">ANA Law Group</h3>
          <p className="text-sm leading-relaxed">
            7th Floor, Keshava, Bandra Kurla
            <br />
            Complex, Bandra East,
            <br />
            Mumbai – 400 051, India
          </p>
          <p className="text-sm pt-2">
            Phone:{" "}
            <a href="tel:+912261128484" className="hover:underline">
              +91 22 6112 8484
            </a>
          </p>
          <p className="text-sm">Fax: +91 22 6112 8485</p>
          <p className="text-sm">Email:</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col items-start lg:items-end space-y-2 text-sm mb-4">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:underline">
              Accessibility Statement
            </Link>
            <p className="pt-2">ANA Law Group@2025 All rights reserved</p>
          </div>

          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.251387406092!2d76.39102634658232!3d9.89775061119641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087500790f7b49%3A0x4e676f03a3b526f9!2sMulanthuruthy%20Railway%20Station!5e0!3m2!1sen!2sin!4v1762807342486!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ANA Law Group Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

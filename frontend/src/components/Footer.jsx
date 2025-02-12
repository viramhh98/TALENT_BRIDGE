import React from "react";

const Footer = () => (
  <footer className="bg-[#555555] text-white py-8">
    <a
      href="#top"
      className="inline-block text-center mb-4 hover:text-[#008bf8] transition"
    >
      <span className="icon-keyboard_arrow_up text-2xl"></span>
    </a>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Category</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                Graphic Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                Web Developers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                Python
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                HTML5
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                CSS3
              </a>
            </li>
          </ul>
        </div>
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                Resources
              </a>
            </li>
          </ul>
        </div>
        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#008bf8] transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-[#008bf8] transition-colors text-xl"
            >
              <span className="icon-facebook"></span>
            </a>
            <a
              href="#"
              className="hover:text-[#008bf8] transition-colors text-xl"
            >
              <span className="icon-twitter"></span>
            </a>
            <a
              href="#"
              className="hover:text-[#008bf8] transition-colors text-xl"
            >
              <span className="icon-instagram"></span>
            </a>
            <a
              href="#"
              className="hover:text-[#008bf8] transition-colors text-xl"
            >
              <span className="icon-linkedin"></span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-700 pt-6 mt-4">
        <p>
          <small>
            Copyright &copy;{" "}
            <a href="#" className="hover:text-[#008bf8] transition-colors">
              DJobPortal
            </a>
            . All rights reserved.
          </small>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

import { Link } from "react-router";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import logoImage from "@/assets/fba13bf8381c894eddfbe9344a15a6fa297ed4ce.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src={logoImage} 
                alt="OpenLabs" 
                className="w-8 h-8"
              />
              <div>
                <div className="font-bold text-white">OpenLabs</div>
                <div className="text-xs text-gray-400">Cloud First Innovation</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Leading AI Research and Development Laboratory in South Africa, pioneering innovative solutions for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm hover:text-white transition-colors">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Domains</h3>
            <ul className="space-y-2 text-sm">
              <li>Education Technology</li>
              <li>Financial Services</li>
              <li>Social Platforms</li>
              <li>E-commerce Solutions</li>
              <li>Tech Innovation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>South Africa</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>info@openlabs.co.za</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} OpenLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
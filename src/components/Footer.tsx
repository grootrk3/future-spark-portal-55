
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Future Spark University</h3>
            <p className="text-gray-400 mb-4">
              Transforming lives through accessible, innovative education 
              and research excellence since 1975.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-university-teal">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-university-teal">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-university-teal">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-university-teal">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-university-teal">Home</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-university-teal">Programs</Link>
              </li>
              <li>
                <Link to="/enrollment" className="text-gray-400 hover:text-university-teal">Enrollment</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-university-teal">Student Portal</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-university-teal">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-university-teal">Campus Life</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-university-teal">Academic Calendar</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-university-teal">Library</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-university-teal">Career Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-university-teal">Financial Aid</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-university-teal">Student Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-university-teal">Research</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-university-teal mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 University Avenue, Education City, ST 54321, USA</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-university-teal mr-3 flex-shrink-0" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-university-teal mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@futurespark.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Future Spark University. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-university-teal">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-university-teal">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-university-teal">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

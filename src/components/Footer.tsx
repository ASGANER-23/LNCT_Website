
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About LNCT', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Placements', href: '/placements' },
    { name: 'Research', href: '/research' },
    { name: 'Campus Life', href: '/campus' },
    { name: 'News & Events', href: '/news' },
  ];

  const institutes = [
    { name: 'LNCT University', href: '/institutes/university' },
    { name: 'College of Engineering', href: '/institutes/engineering' },
    { name: 'Business School', href: '/institutes/business' },
    { name: 'Institute of Pharmacy', href: '/institutes/pharmacy' },
    { name: 'Medical College', href: '/institutes/medical' },
    { name: 'Institute of Technology', href: '/institutes/technology' },
  ];

  const companies = [
    { name: 'LNCT Tech Solutions', href: '/companies/tech' },
    { name: 'LNCT Healthcare', href: '/companies/healthcare' },
    { name: 'LNCT Consulting', href: '/companies/consulting' },
    { name: 'LNCT R&D', href: '/companies/research' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">LNCT</div>
                <div className="text-sm text-gray-400">Group</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading the way in education and innovation for over 25 years. 
              Empowering students and professionals to achieve excellence in their careers.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Bhopal, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 755 2740395</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@lnctgroup.co.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutes */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Institutes</h3>
            <ul className="space-y-3">
              {institutes.map((institute, index) => (
                <li key={index}>
                  <Link 
                    to={institute.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {institute.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Companies</h3>
            <ul className="space-y-3">
              {companies.map((company, index) => (
                <li key={index}>
                  <Link 
                    to={company.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 text-gray-400">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 group">
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 group">
                  <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300 group">
                  <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 group">
                  <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 LNCT Group. All rights reserved. | Designed for Excellence
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

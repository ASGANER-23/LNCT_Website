import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink, GraduationCap, Users, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
              About LNCT Group
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-up">
              Shaping futures through quality education and innovation for over 25 years
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* About Description */}
            <Card className="mb-12 animate-fade-up">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">Our Legacy</CardTitle>
                <CardDescription className="text-lg">
                  Building tomorrow's leaders through excellence in education
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  LNCT Group is one of the most prestigious educational conglomerates in Central India, 
                  established with a vision to provide world-class education and foster innovation. 
                  Founded in 1994, LNCT has grown from a single engineering college to a comprehensive 
                  group of institutions offering diverse programs across multiple disciplines.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our commitment to academic excellence, industry-relevant curriculum, and holistic 
                  development has made us a preferred choice for students across India and abroad. 
                  With state-of-the-art infrastructure, experienced faculty, and strong industry 
                  partnerships, we continue to set new benchmarks in education.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, LNCT Group comprises multiple institutes offering undergraduate, postgraduate, 
                  and doctoral programs in Engineering, Management, Pharmacy, Medical Sciences, and 
                  various other fields. Our alumni network spans across the globe, contributing to 
                  various industries and making us proud with their achievements.
                </p>
              </CardContent>
            </Card>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center animate-scale-in">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
                  <div className="text-gray-600">Students Graduated</div>
                </CardContent>
              </Card>
              <Card className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </CardContent>
              </Card>
              <Card className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                  <div className="text-gray-600">Institutes</div>
                </CardContent>
              </Card>
            </div>

            {/* Official Website Link */}
            <Card className="text-center animate-fade-up">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Learn More About Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Visit our official website for detailed information about our programs, 
                  admissions, faculty, and more.
                </p>
                <a 
                  href="https://www.lnctgroup.co.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-3 text-lg group">
                    Visit Official Website
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
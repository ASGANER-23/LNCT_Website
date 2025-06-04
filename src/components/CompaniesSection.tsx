import { Building2, TrendingUp, Globe, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

const CompaniesSection = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const companies = [
    {
      name: 'LNCT Tech Solutions',
      category: 'Technology',
      description: 'Leading software development and IT consulting company providing innovative solutions to global clients.',
      employees: '500+',
      founded: '2010',
      services: ['Software Development', 'Cloud Solutions', 'AI/ML', 'Consulting'],
      revenue: '₹50+ Cr',
      icon: '💻'
    },
    {
      name: 'LNCT Research & Development',
      category: 'Research',
      description: 'Cutting-edge research and development in emerging technologies and scientific innovations.',
      employees: '200+',
      founded: '2015',
      services: ['R&D', 'Patent Filing', 'Technology Transfer', 'Innovation'],
      revenue: '₹25+ Cr',
      icon: '🔬'
    },
    {
      name: 'LNCT Healthcare',
      category: 'Healthcare',
      description: 'Comprehensive healthcare services with modern medical facilities and expert professionals.',
      employees: '800+',
      founded: '2018',
      services: ['Medical Care', 'Diagnostics', 'Telemedicine', 'Research'],
      revenue: '₹100+ Cr',
      icon: '🏥'
    },
    {
      name: 'LNCT Consulting',
      category: 'Business Consulting',
      description: 'Strategic business consulting and management advisory services for enterprises.',
      employees: '150+',
      founded: '2012',
      services: ['Strategy', 'Operations', 'Digital Transformation', 'Analytics'],
      revenue: '₹30+ Cr',
      icon: '📊'
    },
    {
      name: 'LNCT Education Services',
      category: 'Education Technology',
      description: 'Innovative educational technology solutions and online learning platforms.',
      employees: '300+',
      founded: '2016',
      services: ['EdTech', 'Online Learning', 'Content Development', 'LMS'],
      revenue: '₹40+ Cr',
      icon: '🎓'
    },
    {
      name: 'LNCT Infrastructure',
      category: 'Infrastructure',
      description: 'Sustainable infrastructure development and construction management services.',
      employees: '400+',
      founded: '2014',
      services: ['Construction', 'Project Management', 'Green Building', 'Planning'],
      revenue: '₹75+ Cr',
      icon: '🏗️'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerInView ? 'animate-fade-down' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Companies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of companies spanning technology, healthcare, 
            research, and consulting sectors.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => {
            const [cardRef, cardInView] = useInView({ threshold: 0.2, triggerOnce: true });
            
            return (
              <div
                key={index}
                ref={cardRef}
                className={`transition-all duration-800 ${
                  cardInView 
                    ? 'animate-zoom-in' 
                    : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200 hover:border-blue-300">
                  <CardContent className="p-6">
                    {/* Company Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{company.icon}</div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                        {company.category}
                      </span>
                    </div>

                    {/* Company Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {company.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {company.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="w-4 h-4 text-blue-600 mr-1" />
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{company.employees}</div>
                        <div className="text-xs text-gray-500">Employees</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{company.revenue}</div>
                        <div className="text-xs text-gray-500">Revenue</div>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {company.services.slice(0, 3).map((service, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded"
                          >
                            {service}
                          </span>
                        ))}
                        {company.services.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                            +{company.services.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Founded Year */}
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Building2 className="w-4 h-4 mr-1" />
                      Founded {company.founded}
                    </div>

                    {/* Learn More Button */}
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                    >
                      Explore Company
                      <Globe className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4" onClick={() => window.location.href = '/companies'}>
            View All Companies
            <Globe className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;

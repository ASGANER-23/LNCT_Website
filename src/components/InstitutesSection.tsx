import { MapPin, Users, Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const InstitutesSection = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [gridRef, gridInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const institutes = [
    {
    name: 'LNCT',
    location: 'Bhopal',
    description: 'Premier engineering and technology institute known for academic excellence and innovation.',
    students: '10,000+',
    established: '1994',
    specialties: ['Engineering', 'Technology', 'Innovation'],
    image: '/images/lnct-main-bhopal.jpg',
  },
  {
    name: 'LNCT & Science',
    location: 'Bhopal',
    description: 'Integrated institute offering science and technology programs with a strong research focus.',
    students: '5,000+',
    established: '2001',
    specialties: ['Science', 'Technology', 'Research'],
    image: '/images/lncts-bhopal.webp',
  },
  {
    name: 'LNCT Excellence',
    location: 'Bhopal',
    description: 'Dedicated to excellence in engineering and management education with modern infrastructure.',
    students: '7,000+',
    established: '2007',
    specialties: ['Engineering', 'Management'],
    image: '/images/lnct-e-bhopal.png',
  },
  {
    name: 'LNCT MCA',
    location: 'Bhopal',
    description: 'Providing quality education in computer applications and software development.',
    students: '1,200+',
    established: '2009',
    specialties: ['Computer Applications', 'Software Development'],
    image: '/images/lnct-mca-bhopal.jpg',
  },
  {
    name: 'LNCT University',
    location: 'Bhopal',
    description: 'Premier university offering undergraduate and postgraduate programs in Engineering, Management, and Applied Sciences.',
    students: '15,000+',
    established: '2003',
    specialties: ['Engineering', 'Management', 'Computer Science', 'Research'],
    image: '/images/lnct-university-bhopal.jpg',
  },
  {
    name: 'LNCT Pharmacy',
    location: 'Bhopal',
    description: 'Excellence in pharmaceutical education with modern laboratories and research facilities.',
    students: '2,000+',
    established: '2001',
    specialties: ['Pharmaceutical Sciences', 'Drug Research', 'Clinical Pharmacy'],
    image: '/images/lnct-pharmacy-bhopal.webp',
  },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerInView ? "animate-fade-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Institutes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class educational institutions under the LNCT Group,
            each dedicated to excellence in their respective fields.
          </p>
        </div>

        {/* Institutes Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {institutes.map((institute, index) => {
            const [cardRef, cardInView] = useInView({
              threshold: 0.2,
              triggerOnce: true,
            });

            return (
              <div
                key={index}
                ref={cardRef}
                className={`transition-all duration-700 ${
                  cardInView
                    ? index % 2 === 0
                      ? "animate-slide-in"
                      : "animate-slide-in-right"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden">
                  {/* Institute Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={institute.image}
                      alt={institute.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {institute.location}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Institute Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {institute.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {institute.description}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {institute.students}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Award className="w-4 h-4 mr-1" />
                        Est. {institute.established}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {institute.specialties
                          .slice(0, 3)
                          .map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        {institute.specialties.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            +{institute.specialties.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4"
            onClick={() => window.location.href = '/institutes'}
          >
            View All Institutes
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstitutesSection;

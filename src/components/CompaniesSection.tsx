
import { Users, TrendingUp, Globe, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

const companies = [
  {
    name: "Amazon",
    category: "Technology",
    description:
      "Multinational technology company focusing on e-commerce, cloud computing, and AI.",
    employees: "6000+",
    package: "₹12-30 LPA",
    roles: [
      "Software Development Engineer",
      "Product Manager",
      "Data Analyst",
    ],
    image: "./images/amazon.webp",
    tier: "Tier 1",
  },
  {
    name: "Microsoft",
    category: "Technology",
    description:
      "Global technology company known for software, services, devices, and solutions.",
    employees: "5000+",
    package: "₹10-25 LPA",
    roles: ["Software Engineer", "Program Manager", "Data Scientist"],
    image: "./images/microsoft.jpg",
    tier: "Tier 1",
  },
  {
    name: "Accenture",
    category: "IT Services",
    description:
      "Multinational professional services company providing strategy, consulting, digital, technology and operations services.",
    employees: "3000+",
    package: "₹4-16 LPA",
    roles: ["Consultant", "Developer", "Analyst"],
    image: "./images/accenture.jpg",
    tier: "Tier 1",
  },
  {
    name: "TCS",
    category: "IT Services",
    description:
      "Leading IT services and consulting company providing technology solutions globally.",
    employees: "2000+",
    package: "₹3.5-15 LPA",
    roles: [
      "Software Developer",
      "Systems Engineer",
      "Business Analyst",
      "Consultant",
    ],
    image: "./images/tcs.webp",
    tier: "Tier 2",
  },
  {
    name: "Infosys",
    category: "IT Services",
    description:
      "Global leader in next-generation digital services and consulting.",
    employees: "2500+",
    package: "₹3-12 LPA",
    roles: ["Software Engineer", "Project Manager", "Business Analyst"],
    image: "./images/infosys.webp",
    tier: "Tier 2",
  },
  {
    name: "Wipro",
    category: "IT Services",
    description:
      "Multinational corporation providing information technology, consulting and business process services.",
    employees: "1500+",
    package: "₹3-13 LPA",
    roles: ["Software Developer", "QA Engineer", "Systems Analyst"],
    image: "./images/wipro.webp",
    tier: "Tier 2",
  },
];

const CompaniesSection = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });

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
            Explore our top placement partners and tech recruiters.
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
                className={`transition-all duration-800 h-full flex ${
                  cardInView
                    ? 'animate-zoom-in'
                    : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="bg-gray-100 group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200 hover:border-blue-300 flex flex-col h-full w-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Image Banner */}
                    <div className="relative w-full h-40 overflow-hidden flex-shrink-0">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Tier Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          company.tier === 'Tier 1'
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                            : 'bg-gradient-to-r from-blue-500 to-green-500 text-white'
                        }`}>
                          {company.tier}
                        </span>
                      </div>
                    </div>
                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Company Name & Category */}
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {company.name}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                          {company.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-3 line-clamp-2">
                        {company.description}
                      </p>

                      {/* Stats: Employees & Package */}
                      <div className="grid grid-cols-2 gap-4 mb-3">
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
                          <div className="text-sm font-semibold text-gray-900">{company.package}</div>
                          <div className="text-xs text-gray-500">Package</div>
                        </div>
                      </div>

                      {/* Roles */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {company.roles.slice(0, 3).map((role, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded"
                            >
                              {role}
                            </span>
                          ))}
                          {company.roles.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                              +{company.roles.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Always at bottom: Explore Button */}
                      <div className="mt-auto">
                        {/* <Button
                          variant="outline"
                          className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                        >
                          Explore Company
                          <Globe className="ml-2 w-4 h-4" />
                        </Button> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4">
            View All Companies
            <Globe className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;

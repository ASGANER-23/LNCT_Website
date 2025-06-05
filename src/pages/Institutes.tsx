import {
  MapPin,
  Users,
  Award,
  ExternalLink,
  Calendar,
  BookOpen,
  Trophy,
  Globe,
  Search,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInView } from "@/hooks/useInView";
import Header from "@/components/Header";
import { useState, useMemo } from "react";

const Institutes = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const institutes = [
    {
      name: "LNCT",
      location: "Bhopal",
      description:
        "Premier engineering and technology institute known for academic excellence and innovation.",
      students: "10,000+",
      established: "1994",
      specialties: ["Engineering", "Technology", "Innovation"],
      image: "/images/lnct-main-bhopal.jpg",
    },
    {
      name: "LNCT & Science",
      location: "Bhopal",
      description:
        "Integrated institute offering science and technology programs with a strong research focus.",
      students: "5,000+",
      established: "2001",
      specialties: ["Science", "Technology", "Research"],
      image: "/images/lncts-bhopal.webp",
    },
    {
      name: "LNCT Excellence",
      location: "Bhopal",
      description:
        "Dedicated to excellence in engineering and management education with modern infrastructure.",
      students: "7,000+",
      established: "2007",
      specialties: ["Engineering", "Management"],
      image: "/images/lnct-e-bhopal.png",
    },
    {
      name: "LNCT MCA",
      location: "Bhopal",
      description:
        "Providing quality education in computer applications and software development.",
      students: "1,200+",
      established: "2009",
      specialties: ["Computer Applications", "Software Development"],
      image: "/images/lnct-mca-bhopal.jpg",
    },
    {
      name: "LNCT University",
      location: "Bhopal",
      description:
        "Premier university offering undergraduate and postgraduate programs in Engineering, Management, and Applied Sciences.",
      students: "15,000+",
      established: "2003",
      specialties: [
        "Engineering",
        "Management",
        "Computer Science",
        "Research",
      ],
      image: "/images/lnct-university-bhopal.jpg",
    },
    {
      name: "LNCT Pharmacy",
      location: "Bhopal",
      description:
        "Excellence in pharmaceutical education with modern laboratories and research facilities.",
      students: "2,000+",
      established: "2001",
      specialties: [
        "Pharmaceutical Sciences",
        "Drug Research",
        "Clinical Pharmacy",
      ],
      image: "/images/lnct-pharmacy-bhopal.webp",
    },
    {
      name: "JNCT Bhopal",
      location: "Bhopal",
      description:
        "Sister concern of LNCT, known for engineering and polytechnic education.",
      students: "6,000+",
      established: "2010",
      specialties: ["Polytechnic", "Engineering"],
      image: "/images/jnct-bhopal.JPG",
    },
    {
      name: "LNCT Vidhyapeeth University",
      location: "Indore",
      description:
        "A multidisciplinary university offering UG, PG, and PhD programs.",
      students: "10,000+",
      established: "2021",
      specialties: ["Engineering", "Pharmacy", "Sciences", "Humanities"],
      image: "/images/lnct-vidyapeeth-indore.png",
    },
    {
      name: "Rishiraj College",
      location: "Bhopal",
      description:
        "One of the premier institute of Central India for Dental Education",
      students: "2,500+",
      established: "2005",
      specialties: ["Pharmacy", "Life Sciences"],
      image: "/images/rishiraj-college-bhopal.jpg",
    },
    {
      name: "LNCT Jabalpur",
      location: "Jabalpur",
      description:
        "LNCT’s extension into Jabalpur for quality engineering and management education.",
      students: "4,000+",
      established: "2018",
      specialties: ["Engineering", "Management"],
      image: "/images/lnct-jabalpur.jpg",
    },
    {
      name: "CEC Bilaspur",
      location: "Bilaspur",
      description:
        "Central India-based institute under LNCT Group offering engineering and technology courses.",
      students: "3,000+",
      established: "2002",
      specialties: ["Engineering", "Technology"],
      image: "/images/cec-bilaspur.jpeg",
    },
    {
      name: "LNCT Bhopal Indore Campus",
      location: "Indore",
      description:
        "Extending LNCT’s legacy to Indore with modern education and industry exposure.",
      students: "3,500+",
      established: "2015",
      specialties: ["Engineering", "Management"],
      image: "/images/lnct-bhopal-indore.png",
    },
    {
      name: "LNCT Indore",
      location: "Indore",
      description:
        "Emerging engineering institution bringing LNCT excellence to Indore.",
      students: "4,000+",
      established: "2017",
      specialties: ["Engineering", "Technology"],
      image: "/images/lnct-indore.webp",
    },
    {
      name: "LNCTS (RIT) Indore",
      location: "Indore",
      description:
        "Technological institute focusing on research, innovation, and academic rigor.",
      students: "3,000+",
      established: "2016",
      specialties: ["Technology", "Innovation"],
      image: "/images/lncts-indore.avif",
    },
    {
      name: "LNCP Indore",
      location: "Indore",
      description:
        "Pharmacy-focused institute with industry-linked research labs and practical learning.",
      students: "2,000+",
      established: "2018",
      specialties: ["Pharmacy", "Healthcare"],
      image: "/images/lncp-indore.png",
    },
    {
      name: "LNCPS Indore",
      location: "Indore",
      description:
        "Specializes in paramedical and clinical sciences with state-of-the-art labs.",
      students: "1,800+",
      established: "2019",
      specialties: ["Clinical Sciences", "Paramedical"],
      image: "/images/lncps-indore.jpg",
    },
    {
      name: "JDCP Indore",
      location: "Indore",
      description:
        "Dental college with advanced clinical training and patient care facilities.",
      students: "1,200+",
      established: "2020",
      specialties: ["Dentistry", "Oral Health"],
      image: "/images/jdcp-indore.webp",
    },
    {
      name: "JDCN Indore",
      location: "Indore",
      description:
        "Nursing college training future health professionals with practical hospital exposure.",
      students: "900+",
      established: "2021",
      specialties: ["Nursing", "Healthcare"],
      image: "/images/jdcn-indore.jpg",
    },
    {
      name: "NSHMC Bhopal",
      location: "Bhopal",
      description:
        "Homeopathy medical college offering clinical and research-oriented programs.",
      students: "700+",
      established: "2022",
      specialties: ["Homeopathy", "Medical Sciences"],
      image: "/images/nshmc-bhopal.webp",
    },
    {
      name: "LNCT Gwalior",
      location: "Gwalior",
      description:
        "To be known as the destination of choice for aspiring engineers.",
      students: "4,000+",
      established: "2009",
      specialties: ["Engineering", "Technology", "Pharmacy"],
      image: "/images/lnct-gwalior.jpg",
    },
    {
      name: "LNCTS Gwalior (Diploma)",
      location: "Gwalior",
      description:
        "Diploma institute focusing on skill-based technical education.",
      students: "1,200+",
      established: "2018",
      specialties: ["Diploma", "Polytechnic"],
      image: "/images/lncts-gwalior.webp",
    },
    {
      name: "LNCM Gwalior",
      location: "Gwalior",
      description: "College of management developing future business leaders.",
      students: "1,000+",
      established: "2019",
      specialties: ["Management", "Finance"],
      image: "/images/lncm-gwalior.jpg",
    },
    {
      name: "SITE Nathdwara",
      location: "Nathdwara",
      description:
        "Technology institute offering engineering and IT courses with industrial interface.",
      students: "2,500+",
      established: "2016",
      specialties: ["IT", "Engineering"],
      image: "/images/site-nathdwara.avif",
    },
    {
      name: "SIBM Nathdwara",
      location: "Nathdwara",
      description:
        "Business management institute providing corporate-ready programs.",
      students: "1,200+",
      established: "2017",
      specialties: ["Management", "Business Studies"],
      image: "/images/sibm-nathdwara.webp",
    },
    {
      name: "SIP Nathdwara",
      location: "Nathdwara",
      description:
        "Pharmacy college offering B.Pharm and D.Pharm with research exposure.",
      students: "1,000+",
      established: "2018",
      specialties: ["Pharmacy"],
      image: "/images/sip-nathdwara.webp",
    },
    {
      name: "LNCT World School",
      location: "Bhopal",
      description:
        "CBSE-affiliated K-12 school nurturing young minds with a modern curriculum and global outlook.",
      students: "2,000+",
      established: "2014",
      specialties: ["Primary Education", "STEM", "Holistic Learning"],
      image: "/images/lnctworldschool-bhopal.webp",
    },
  ];

  const filteredInstitutes = useMemo(() => {
    if (!searchQuery.trim()) return institutes;

    const query = searchQuery.toLowerCase();
    return institutes.filter(
      (institute) =>
        institute.name.toLowerCase().includes(query) ||
        institute.location.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              headerInView ? "animate-fade-up" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Institutes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Discover world-class educational institutions under the LNCT
              Group. Each institute is dedicated to excellence in their
              respective fields, providing cutting-edge education and fostering
              innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                35,000+ Students
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                100+ Programs
              </div>
              <div className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-blue-600" />
                25+ Years of Excellence
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-600" />
                Multiple Campuses
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search Institutes by name or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* Results Count */}
          {searchQuery && (
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Found {filteredInstitutes.length} institute
                {filteredInstitutes.length !== 1 ? "s" : ""}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>
          )}

          {/* Vertical Flexbox Layout */}
          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {filteredInstitutes.length > 0 ? (
              filteredInstitutes.map((institute, index) => (
                <div
                  key={index}
                  className="transition-all duration-700 animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      {/* Institute Image */}
                      <div className="relative overflow-hidden lg:w-full h-64 lg:h-auto">
                        <img
                          src={institute.image}
                          alt={institute.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {/* Featured Badge */}
                        {institute.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                              Featured
                            </span>
                          </div>
                        )}

                        {/* Location */}
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="flex items-center text-sm font-medium">
                            <MapPin className="w-4 h-4 mr-1" />
                            {institute.location}
                          </div>
                        </div>

                        {/* Accreditation */}
                        {institute.accreditation && (
                          <div className="absolute bottom-4 right-4 text-white">
                            <div className="flex items-center text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                              <Award className="w-3 h-3 mr-1" />
                              {institute.accreditation}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <CardContent className="p-6 flex flex-col lg:w-2/3">
                        {/* Institute Name */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {institute.name}
                        </h3>
                        {/* Description */}
                        <p className="text-gray-600 mb-4 flex-grow">
                          {institute.description}
                        </p>
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-center mb-1">
                              <Users className="w-4 h-4 text-blue-600 mr-1" />
                            </div>
                            <div className="text-lg font-bold text-gray-900">
                              {institute.students}
                            </div>
                            <div className="text-xs text-gray-500">
                              Students
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-center mb-1">
                              <BookOpen className="w-4 h-4 text-blue-600 mr-1" />
                            </div>
                            <div className="text-lg font-bold text-gray-900">
                              {institute.programs}
                            </div>
                            <div className="text-xs text-gray-500">
                              Programs
                            </div>
                          </div>
                        </div>
                        {/* Established */}
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          Established {institute.established}
                        </div>
                        {/* Specialties with Infinite Scroll */}
                        Add comment More actions
                        <div className="mb-4 overflow-hidden">
                          <div className="relative">
                            <div className="flex animate-scroll-infinite whitespace-nowrap">
                              {/* First set of specialties */}

                              {institute.specialties.map((specialty, idx) => (
                                <span
                                  key={`first-${idx}`}
                                  className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mr-2 flex-shrink-0"
                                >
                                  {specialty}
                                </span>
                              ))}
                              {institute.specialties.map((specialty, idx) => (
                                <span
                                  key={`first-${idx}`}
                                  className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mr-2 flex-shrink-0"
                                >
                                  {specialty}
                                </span>
                              ))}

                              {/* Duplicate set for seamless loop */}

                              {institute.specialties.map((specialty, idx) => (
                                <span
                                  key={`second-${idx}`}
                                  className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mr-2 flex-shrink-0"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* Learn More Button */}
                        <Button
                          variant="outline"
                          className="w-full lg:w-auto group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 mt-auto"
                        >
                          Learn More
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No institutes found
                </h3>
                <p className="text-gray-500">
                  Try searching with a different term or check the spelling.
                </p>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Join the LNCT Family?
              </h3>
              <p className="text-gray-600 mb-6">
                Explore our admission process and find the perfect program for
                your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
                >
                  Apply Now
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8"
                >
                  Download Brochure
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutes;

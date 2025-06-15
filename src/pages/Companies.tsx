import {
  Building2,
  Users,
  Award,
  ExternalLink,
  MapPin,
  Calendar,
  TrendingUp,
  Briefcase,
  Target,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import Header from "@/components/Header";

const Companies = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [incubationRef, incubationInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [placementRef, placementInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const incubationCenters = [
    {
      name: "KLIC (Kalchuri LNCT Incubation Center)",
      category: "Startup Incubator",
      description:
        "In-house incubation center that supports LNCT students and faculty in launching and growing their startups.",
      founded: "2019",
      services: [
        "Startup Mentorship",
        "Seed Funding",
        "Workspaces",
        "Hackathons",
      ],
      revenue: "N/A",
      icon: "🚀",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://lnct.ac.in/kalchuri-lnct-group-incubation-centre/",
    },
    {
      name: "AIIC (Anupam Innovation & Incubation Center)",
      category: "Incubation & Innovation",
      description:
        "GENESIS-supported innovation hub helping students develop prototypes, products, and early-stage ventures.",
      founded: "2020",
      services: ["Product Innovation", "MeitY Support", "Prototype Labs"],
      revenue: "N/A",
      icon: "🧪",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://aiic.lnctu.ac.in",
    },
    {
      name: "EDIIC (Entrepreneurship Development & Industry Interaction Cell)",
      category: "Entrepreneurship Development",
      description:
        "Fostering industry interaction, entrepreneurship awareness, and skill-building for LNCT students.",
      founded: "2021",
      services: [
        "Industry Collaboration",
        "Entrepreneurship Bootcamps",
        "Startup Networking",
      ],
      revenue: "N/A",
      icon: "💼",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://ediic.lnctu.ac.in",
    },
    {
      name: "RISEJHANSI Incubation Centre",
      category: "Startup Incubator",
      description:
        "Extension of LNCT Group for nurturing innovation and startups in Jhansi, Uttar Pradesh.",
      founded: "2022",
      services: ["Mentoring", "Startup Workshops", "Funding Access"],
      revenue: "N/A",
      icon: "🏙️",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://lnct.ac.in/risejhansi-incubation-centre/",
    },
    {
      name: "Jabalpur Incubation Center",
      category: "Startup Incubator",
      description:
        "Collaborates with LNCT Group's KLIC network, this center supports entrepreneurship at the Jabalpur campus.",
      founded: "2019",
      services: ["Mentorship", "Startup Launch Support"],
      revenue: "N/A",
      icon: "🏢",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://www.jicjabalpur.org/",
    },
  ];

  const placementCompanies = [
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
    {
      name: "Cognizant",
      category: "IT Services",
      description:
        "Professional services company specializing in IT services and consulting.",
      employees: "1800+",
      package: "₹3-14 LPA",
      roles: ["Developer", "Consultant", "Business Analyst"],
      image: "./images/cognizant.jpg",
      tier: "Tier 2",
    },
    {
      name: "Capgemini",
      category: "IT Services",
      description:
        "Global leader in consulting, digital transformation, technology, and engineering services.",
      employees: "2500+",
      package: "₹3.5-15 LPA",
      roles: ["Consultant", "Developer", "Project Manager"],
      image: "./images/capgemini.jpg",
      tier: "Tier 2",
    },
    {
      name: "L&T Infotech",
      category: "IT Services",
      description:
        "Global IT solutions and services provider known for engineering and technology services.",
      employees: "2000+",
      package: "₹3.5-14 LPA",
      roles: ["Software Developer", "System Architect", "QA Engineer"],
      image: "./images/l&t-infotech.jpg",
      tier: "Tier 2",
    },
    {
      name: "Mindtree",
      category: "IT Services",
      description: "Global technology consulting and services company.",
      employees: "2000+",
      package: "₹4-14 LPA",
      roles: ["Software Developer", "Consultant", "Tester"],
      image: "./images/mindtree.avif",
      tier: "Tier 2",
    },
    {
      name: "Mphasis",
      category: "IT Services",
      description:
        "Information technology services company focused on cloud and cognitive services.",
      employees: "1000+",
      package: "₹3-12 LPA",
      roles: ["Software Developer", "Business Analyst", "Tester"],
      image: "./images/mphasis.webp",
      tier: "Tier 2",
    },
    {
      name: "Amdocs",
      category: "IT Services",
      description:
        "Provider of software and services for communications, media, and financial services providers and digital enterprises.",
      employees: "1500+",
      package: "₹3.5-14 LPA",
      roles: ["Software Developer", "Tester", "Technical Lead"],
      image: "./images/amdocs.avif",
      tier: "Tier 2",
    },
    {
      name: "Global Logic",
      category: "IT Services",
      description: "Digital product engineering services company.",
      employees: "1200+",
      package: "₹3.5-13 LPA",
      roles: ["Software Engineer", "UX Designer", "Tester"],
      image: "./images/global-logic.jpg",
      tier: "Tier 2",
    },
    {
      name: "Mu Sigma",
      category: "Analytics",
      description: "Data analytics and decision sciences company.",
      employees: "1000+",
      package: "₹4-15 LPA",
      roles: ["Data Scientist", "Analyst", "Consultant"],
      image: "./images/mu-sigma.png",
      tier: "Tier 2",
    },
    {
      name: "Aricent",
      category: "IT Services",
      description: "Global design and engineering company.",
      employees: "900+",
      package: "₹3.5-12 LPA",
      roles: ["Software Engineer", "System Analyst", "Tester"],
      image: "./images/aricent.jpg",
      tier: "Tier 2",
    },
    {
      name: "Persistent",
      category: "IT Services",
      description:
        "Global company delivering digital business acceleration and enterprise modernization.",
      employees: "1100+",
      package: "₹3.5-14 LPA",
      roles: ["Software Developer", "System Architect", "Tester"],
      image: "./images/persistent.jpg",
      tier: "Tier 2",
    },
    {
      name: "Orange Business Services",
      category: "IT Services",
      description: "Global IT and communications services provider.",
      employees: "1500+",
      package: "₹3.5-14 LPA",
      roles: ["Network Engineer", "Consultant", "Support Engineer"],
      image: "./images/orange-buisness-services.jpg",
      tier: "Tier 2",
    },
    {
      name: "Tech Mahindra",
      category: "IT Services",
      description:
        "IT services and solutions provider specializing in digital transformation.",
      employees: "2200+",
      package: "₹3-13 LPA",
      roles: ["Software Developer", "Business Analyst", "Project Manager"],
      image: "./images/tech-mahindra.png",
      tier: "Tier 2",
    },
    {
      name: "Sapient",
      category: "Consulting",
      description: "Business, marketing, and technology services company.",
      employees: "900+",
      package: "₹3.5-12 LPA",
      roles: ["Consultant", "Developer", "Project Manager"],
      image: "./images/sapient.png",
      tier: "Tier 2",
    },
    {
      name: "Oracle",
      category: "IT Services",
      description:
        "Multinational computer technology corporation specializing in database software and technology.",
      employees: "4000+",
      package: "₹10-22 LPA",
      roles: ["Software Engineer", "DBA", "Cloud Architect"],
      image: "./images/oracle.webp",
      tier: "Tier 1",
    },
    {
      name: "PDG",
      category: "IT Services",
      description: "IT consulting and software services company.",
      employees: "500+",
      package: "₹3-10 LPA",
      roles: ["Developer", "Tester", "Business Analyst"],
      image: "./images/pdg.jpg",
      tier: "Tier 3",
    },
    {
      name: "Josh Software",
      category: "IT Services",
      description:
        "Software development company specializing in custom software solutions.",
      employees: "400+",
      package: "₹3.5-11 LPA",
      roles: ["Developer", "Product Manager", "QA Engineer"],
      image: "./images/josh-software.jpg",
      tier: "Tier 3",
    },
    {
      name: "US Technology",
      category: "IT Services",
      description: "IT solutions provider with global operations.",
      employees: "600+",
      package: "₹3-9 LPA",
      roles: ["Software Engineer", "Tester", "Support Engineer"],
      image: "./images/us-technology.jpg",
      tier: "Tier 3",
    },
    {
      name: "Sears Holdings",
      category: "Retail",
      description: "Retail and services company.",
      employees: "700+",
      package: "₹3-8 LPA",
      roles: [
        "Operations Manager",
        "Business Analyst",
        "Logistics Coordinator",
      ],
      image: "./images/sears-holdings.webp",
      tier: "Tier 3",
    },
    {
      name: "Impetus",
      category: "IT Services",
      description: "Provider of big data and cloud computing solutions.",
      employees: "1000+",
      package: "₹3-13 LPA",
      roles: ["Developer", "Cloud Engineer", "Analyst"],
      image: "./images/impetus.avif",
      tier: "Tier 2",
    },
    {
      name: "upGrad",
      category: "EdTech",
      description:
        "Online higher education platform providing certification and degree programs.",
      employees: "500+",
      package: "₹3-9 LPA",
      roles: ["Content Developer", "Marketing Executive", "Product Manager"],
      image: "./images/upgrad.jpg",
      tier: "Tier 3",
    },

    // ==== Mechanical / Automotive ====
    {
      name: "Mahindra & Mahindra",
      category: "Automotive",
      description:
        "Leading manufacturer in automotive and farm equipment sectors.",
      employees: "5000+",
      package: "₹5-16 LPA",
      roles: ["Mechanical Engineer", "Design Engineer", "Quality Analyst"],
      image: "./images/mahindra.jpg",
      tier: "Tier 1",
    },
    {
      name: "Tata",
      category: "Conglomerate",
      description:
        "Multinational conglomerate with businesses in multiple sectors.",
      employees: "7000+",
      package: "₹5-18 LPA",
      roles: ["Engineer", "Manager", "Analyst"],
      image: "./images/tata.webp",
      tier: "Tier 1",
    },
    {
      name: "Reliance",
      category: "Conglomerate",
      description:
        "Indian multinational conglomerate with diversified businesses.",
      employees: "6000+",
      package: "₹5-20 LPA",
      roles: ["Business Analyst", "Operations Manager", "Software Engineer"],
      image: "./images/reliance.webp",
      tier: "Tier 1",
    },
    {
      name: "Ashok Leyland",
      category: "Automotive",
      description: "Leading manufacturer of commercial vehicles.",
      employees: "3000+",
      package: "₹4-12 LPA",
      roles: ["Mechanical Engineer", "Production Manager", "Quality Analyst"],
      image: "./images/ashok-leyland.avif",
      tier: "Tier 3",
    },
    {
      name: "TVS",
      category: "Automotive",
      description:
        "Leading Indian automotive manufacturer with a strong presence in two-wheelers and three-wheelers.",
      employees: "5000+",
      package: "₹4-10 LPA",
      roles: ["Mechanical Engineer", "Production Manager", "Quality Analyst"],
      image: "./images/tvs.png",
      tier: "Tier 3",
    },
    {
      name: "Force Motors",
      category: "Automotive",
      description:
        "Manufacturer of automobiles, commercial vehicles and automotive components.",
      employees: "1500+",
      package: "₹4-11 LPA",
      roles: ["Mechanical Engineer", "Quality Analyst", "Production Engineer"],
      image: "./images/force-motors.jpg",
      tier: "Tier 3",
    },
    {
      name: "Eicher Motors",
      category: "Automotive",
      description: "Manufacturer of motorcycles and commercial vehicles.",
      employees: "2000+",
      package: "₹4-13 LPA",
      roles: ["Mechanical Engineer", "Design Engineer", "Quality Analyst"],
      image: "./images/eicher.avif",
      tier: "Tier 3",
    },
    {
      name: "AMW",
      category: "Automotive",
      description: "Commercial vehicle manufacturer.",
      employees: "700+",
      package: "₹3.5-9 LPA",
      roles: ["Mechanical Engineer", "Production Manager", "Quality Analyst"],
      image: "./images/amw.jpg",
      tier: "Tier 3",
    },
    {
      name: "Escorts",
      category: "Engineering",
      description:
        "Manufacturer of agricultural machinery, construction equipment, and railway equipment.",
      employees: "1500+",
      package: "₹4-11 LPA",
      roles: ["Mechanical Engineer", "Project Manager", "Quality Control"],
      image: "./images/escorts.avif",
      tier: "Tier 3",
    },

    // ==== Civil / Construction / Engineering ====
    {
      name: "L&T",
      category: "Engineering & Construction",
      description:
        "Major technology, engineering, construction, manufacturing and financial services company.",
      employees: "3500+",
      package: "₹5-15 LPA",
      roles: ["Civil Engineer", "Project Manager", "Design Engineer"],
      image: "./images/l&t.avif",
      tier: "Tier 1",
    },
    {
      name: "Gammon",
      category: "Construction",
      description: "One of the largest civil engineering companies.",
      employees: "1300+",
      package: "₹4-11 LPA",
      roles: ["Civil Engineer", "Site Manager", "Project Engineer"],
      image: "./images/gammon.png",
      tier: "Tier 3",
    },
    {
      name: "ERA Group",
      category: "Engineering",
      description: "Company specializing in infrastructure and power projects.",
      employees: "1000+",
      package: "₹4-12 LPA",
      roles: ["Project Engineer", "Civil Engineer", "Quality Analyst"],
      image: "./images/era-group.webp",
      tier: "Tier 3",
    },
    {
      name: "ETA Engineering",
      category: "Engineering",
      description: "Engineering and construction company.",
      employees: "900+",
      package: "₹3.5-9 LPA",
      roles: ["Civil Engineer", "Project Manager", "Site Engineer"],
      image: "./images/eta-engineering.jpg",
      tier: "Tier 3",
    },

    // ==== Manufacturing / Textile / Other ====
    {
      name: "Trident",
      category: "Manufacturing",
      description: "Leading manufacturer of textiles, paper, and chemicals.",
      employees: "1800+",
      package: "₹4-10 LPA",
      roles: ["Production Engineer", "Quality Analyst", "Maintenance Engineer"],
      image: "./images/trident-group.png",
      tier: "Tier 3",
    },
    {
      name: "BEML",
      category: "Manufacturing",
      description:
        "Public sector company manufacturing heavy equipment and machinery.",
      employees: "1200+",
      package: "₹4-11 LPA",
      roles: ["Mechanical Engineer", "Project Manager", "Quality Control"],
      image: "./images/beml.webp",
      tier: "Tier 3",
    },
    {
      name: "TMTL",
      category: "Manufacturing",
      description: "Textile and manufacturing company.",
      employees: "600+",
      package: "₹3-8 LPA",
      roles: ["Production Engineer", "Quality Analyst", "Technician"],
      image: "./images/.tmtl.png",
      tier: "Tier 3",
    },
  ];

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
              Our <span className="text-gradient">Companies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Explore our ecosystem of innovation through incubation centers and
              discover the leading companies that hire our talented graduates.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-blue-600" />5 Incubation
                Centers
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Student-Focused Innovation
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                50+ Placement Partners
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                95% Placement Rate
              </div>
            </div>
          </div>

          {/* Incubation Centers Section */}
          <section className="mb-20">
            <div
              ref={incubationRef}
              className={`text-center mb-12 transition-all duration-1000 ${
                incubationInView
                  ? "animate-fade-down"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="text-gradient">Incubation Centers</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                LNCT Group's innovation ecosystem supporting student
                entrepreneurs and startups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {incubationCenters.map((center, index) => (
                <div
                  key={index}
                  className="transition-all duration-700 animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="bg-white group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-0 overflow-hidden h-full">
                    <div className="flex flex-col">
                      {/* Image */}
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={center.image}
                          alt={center.name}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        <div className="absolute top-4 right-4">
                          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {center.category}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="flex items-center text-lg font-bold">
                            <span className="mr-2">{center.icon}</span>
                            LNCT Group
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {center.name}
                        </h3>

                        <p className="text-gray-600 mb-4 flex-grow text-sm">
                          {center.description}
                        </p>

                        {/* Founded */}
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          Founded {center.founded}
                        </div>

                        {/* Services */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {center.services.slice(0, 3).map((service, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full"
                              >
                                {service}
                              </span>
                            ))}
                            {center.services.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                +{center.services.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          className="bg-white w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300 mt-auto"
                          onClick={() => window.open(center.link, "_blank")}
                        >
                          Learn More
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Placement Companies Section */}
          <section>
            <div
              ref={placementRef}
              className={`text-center mb-12 transition-all duration-1000 ${
                placementInView
                  ? "animate-fade-down"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="text-gradient">Placement Partners</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Leading companies that recognize and hire our exceptional
                graduates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {placementCompanies.map((company, index) => (
                <div
                  key={index}
                  className="transition-all duration-700 animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="bg-white group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-0 overflow-hidden h-full">
                    <div className="flex flex-col">
                      {/* Image */}
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={company.image}
                          alt={company.name}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        <div className="absolute top-4 right-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              company.tier === "Tier 1"
                                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                                : "bg-gradient-to-r from-blue-500 to-green-500 text-white"
                            }`}
                          >
                            {company.tier}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-sm font-medium">
                            {company.category}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {company.name}
                        </h3>

                        <p className="text-gray-600 mb-4 flex-grow">
                          {company.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="text-center p-2 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-center mb-1">
                              <Users className="w-4 h-4 text-blue-600 mr-1" />
                            </div>
                            <div className="text-sm font-bold text-gray-900">
                              {company.employees}
                            </div>
                            <div className="text-xs text-gray-500">Hired</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-center mb-1">
                              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                            </div>
                            <div className="text-sm font-bold text-gray-900">
                              {company.package}
                            </div>
                            <div className="text-xs text-gray-500">Package</div>
                          </div>
                        </div>

                        {/* Locations */}
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          {Array.isArray(company.locations)
                            ? company.locations.join(", ")
                            : company.locations}
                        </div>

                        {/* Roles */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {company.roles.slice(0, 3).map((role, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded"
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

                        {/* <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 mt-auto"
                        >
                          View Opportunities
                          <Globe className="ml-2 w-4 h-4" />
                        </Button> */}
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Whether you're an aspiring entrepreneur or seeking placement
                opportunities, we're here to support your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8"
                >
                  Join Incubation
                  <Building2 className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8"
                  onClick={() => {window.location.href='https://lnct.ac.in/placement-records/'}}
                >
                  Placement Support
                  <Briefcase className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;

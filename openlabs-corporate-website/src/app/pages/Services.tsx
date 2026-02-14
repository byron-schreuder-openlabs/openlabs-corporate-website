import { GraduationCap, DollarSign, Users as UsersIcon, ShoppingCart, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: "Education Technology",
      description: "Transform learning experiences with intelligent educational platforms",
      image: "https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcxMDMxNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Personalized learning AI assistants",
        "Automated grading and assessment systems",
        "Student performance analytics",
        "Virtual classroom management",
        "Adaptive learning pathways",
        "Content recommendation engines",
      ],
      color: "from-teal-600 to-cyan-600",
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Secure and intelligent financial solutions powered by advanced AI",
      image: "https://images.unsplash.com/photo-1709573360368-f53739b241f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwYmFua2luZ3xlbnwxfHx8fDE3NzEwMzE1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Fraud detection and prevention",
        "Risk assessment algorithms",
        "Automated trading systems",
        "Customer credit scoring",
        "Payment gateway optimization",
        "Regulatory compliance automation",
      ],
      color: "from-emerald-600 to-green-600",
    },
    {
      icon: UsersIcon,
      title: "Social Platforms",
      description: "Build engaging and safe social experiences with AI moderation",
      image: "https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG5ldHdvcmt8ZW58MXx8fHwxNzcwOTc2MDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Content moderation AI",
        "User behavior analytics",
        "Recommendation algorithms",
        "Sentiment analysis",
        "Community management tools",
        "Real-time engagement tracking",
      ],
      color: "from-teal-600 to-emerald-600",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Boost sales with personalized shopping experiences and smart inventory",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzA5NzI4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Product recommendation engines",
        "Dynamic pricing optimization",
        "Inventory forecasting",
        "Customer segmentation",
        "Chatbot customer service",
        "Visual search capabilities",
      ],
      color: "from-emerald-600 to-teal-600",
    },
    {
      icon: Code,
      title: "Tech Innovation",
      description: "Custom AI solutions and integrations for technology companies",
      image: "https://images.unsplash.com/photo-1755705152396-4b719047af56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3NzEwMzE1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Custom ML model development",
        "API and integration services",
        "DevOps automation",
        "Cloud architecture design",
        "Performance optimization",
        "Technical consulting",
      ],
      color: "from-cyan-600 to-teal-600",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services & Domains
            </h1>
            <p className="text-xl text-gray-600">
              Specialized AI solutions tailored for five key industries. We combine deep domain expertise with cutting-edge technology to deliver transformative results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div className={isEven ? "" : "md:col-start-2"}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                    </div>
                  </div>
                  
                  <div className={isEven ? "" : "md:col-start-1 md:row-start-1"}>
                    <Card className="border-2 hover:border-teal-200 transition-all">
                      <CardHeader>
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that ensures success
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs, challenges, and goals",
              },
              {
                step: "02",
                title: "Design",
                description: "Architecting the solution with best practices",
              },
              {
                step: "03",
                title: "Development",
                description: "Building with agile methodologies and iteration",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launching and continuous optimization",
              },
            ].map((phase, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-teal-100 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss how our solutions can transform your business
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            <Link to="/contact">
              Contact Our Team <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
import { Link } from "react-router";
import { ArrowRight, Brain, Cloud, Sparkles, Shield, Zap, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence solutions tailored to your industry needs.",
    },
    {
      icon: Cloud,
      title: "Cloud-First Architecture",
      description: "Scalable, secure, and efficient cloud-native applications built for the future.",
    },
    {
      icon: Sparkles,
      title: "Innovation Lab",
      description: "Research and development hub for breakthrough technologies and creative solutions.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols ensuring your data remains protected at all times.",
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description: "Agile methodologies delivering high-quality solutions with faster time-to-market.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "World-class engineering practices meeting international quality benchmarks.",
    },
  ];

  const stats = [
    { value: "50+", label: "AI Projects Delivered" },
    { value: "5", label: "Market Domains" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm">
                🇿🇦 Proudly South African
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                AI Research &{" "}
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Development Laboratory
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Pioneering innovative AI solutions for Education, Finance, Social, E-commerce, and Tech industries. Building the future, one algorithm at a time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700">
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/research">Explore Research</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl blur-3xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755705152396-4b719047af56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3NzEwMzE1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="OpenLabs Team"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-teal-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose OpenLabs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with creative innovation to deliver exceptional results for system engineers and businesses across Africa.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-teal-200 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Market Domains
            </h2>
            <p className="text-xl text-gray-600">
              Specialized AI solutions across five key industries
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: "Education", image: "https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcxMDMxNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
              { name: "Financial", image: "https://images.unsplash.com/photo-1709573360368-f53739b241f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwYmFua2luZ3xlbnwxfHx8fDE3NzEwMzE1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
              { name: "Social", image: "https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG5ldHdvcmt8ZW58MXx8fHwxNzcwOTc2MDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
              { name: "E-commerce", image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzA5NzI4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
              { name: "Tech", image: "https://images.unsplash.com/photo-1755705152396-4b719047af56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYnVzaW5lc3MlMjB0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3NzEwMzE1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
            ].map((domain, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <ImageWithFallback
                  src={domain.image}
                  alt={domain.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4">
                  <h3 className="text-white font-semibold text-lg">{domain.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's collaborate to build innovative solutions that drive growth and efficiency.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            <Link to="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
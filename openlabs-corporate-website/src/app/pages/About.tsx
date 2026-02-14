import {
  Target,
  Eye,
  Award,
  Users,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We push boundaries and explore new frontiers in AI and machine learning.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description:
        "We believe in the power of teamwork and diverse perspectives.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we deliver.",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description:
        "Continuous learning and improvement drive our success.",
    },
  ];

  const team = [
    {
      role: "AI Research",
      description:
        "Leading experts in machine learning and neural networks",
    },
    {
      role: "Cloud Architecture",
      description:
        "Specialists in scalable cloud-first infrastructure",
    },
    {
      role: "Software Engineering",
      description:
        "Full-stack developers building robust applications",
    },
    {
      role: "Data Science",
      description:
        "Analytics experts extracting insights from complex data",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About OpenLabs
            </h1>
            <p className="text-xl text-gray-600">
              We are a pioneering AI Research and Development
              Laboratory based in South Africa, dedicated to
              creating innovative and creative solutions for
              system engineers across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-teal-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses and organizations across
                  Africa with cutting-edge AI solutions that
                  drive innovation, efficiency, and growth. We
                  strive to make advanced artificial
                  intelligence accessible and practical for
                  Education, Finance, Social platforms,
                  E-commerce, and Tech sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To be Africa's leading AI research laboratory,
                  recognized globally for pioneering innovative
                  solutions that transform industries and
                  improve lives. We envision a future where
                  South African technology leads the world in
                  creativity, impact, and ethical AI
                  development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work and culture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in South Africa, OpenLabs emerged from a
              simple yet powerful vision: to democratize
              artificial intelligence and make it accessible to
              businesses across Africa. Our founders, a team of
              passionate system engineers and AI researchers,
              recognized the transformative potential of AI
              technology in solving real-world challenges.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Starting as a small research laboratory, we've
              grown into a comprehensive AI solutions provider,
              serving clients across five major market domains.
              Our cloud-first approach ensures that our
              solutions are scalable, secure, and future-ready.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, OpenLabs stands at the forefront of African
              innovation, combining local insights with global
              best practices. We're proud to contribute to South
              Africa's growing tech ecosystem while serving
              clients who share our vision of an AI-powered
              future.
            </p>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600">
              A diverse team of specialists working together
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {member.role}
                </h3>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Whether you're looking to collaborate, join our
            team, or explore our solutions, we'd love to hear
            from you.
          </p>
        </div>
      </section>
    </div>
  );
}
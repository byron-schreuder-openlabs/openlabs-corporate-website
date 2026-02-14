import { Microscope, Rocket, Network, Shield, Cpu, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function Research() {
  const researchAreas = [
    {
      icon: Microscope,
      title: "Machine Learning",
      description: "Advanced neural networks and deep learning architectures",
      projects: [
        "Transformer-based natural language processing",
        "Computer vision for African contexts",
        "Reinforcement learning for optimization",
        "Federated learning for privacy",
      ],
    },
    {
      icon: Network,
      title: "Natural Language Processing",
      description: "Understanding and generating human language at scale",
      projects: [
        "Multilingual models for African languages",
        "Sentiment analysis for local contexts",
        "Text generation and summarization",
        "Conversational AI systems",
      ],
    },
    {
      icon: Cpu,
      title: "Computer Vision",
      description: "Teaching machines to see and understand visual data",
      projects: [
        "Object detection and recognition",
        "Facial recognition systems",
        "Image segmentation",
        "Video analysis and tracking",
      ],
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Extracting insights from massive datasets",
      projects: [
        "Real-time data processing pipelines",
        "Predictive analytics models",
        "Data visualization platforms",
        "Business intelligence solutions",
      ],
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Ensuring safe and ethical AI deployment",
      projects: [
        "Adversarial robustness research",
        "Privacy-preserving AI",
        "Bias detection and mitigation",
        "Explainable AI systems",
      ],
    },
    {
      icon: Rocket,
      title: "Cloud AI Infrastructure",
      description: "Scalable and efficient AI deployment strategies",
      projects: [
        "Edge computing for AI",
        "Serverless ML architectures",
        "Model optimization and compression",
        "Auto-scaling AI systems",
      ],
    },
  ];

  const publications = [
    {
      year: "2026",
      title: "Adaptive Learning Systems for African Education",
      authors: "OpenLabs Research Team",
      venue: "International Conference on AI in Education",
    },
    {
      year: "2025",
      title: "Fraud Detection in Emerging Markets: A Machine Learning Approach",
      authors: "OpenLabs Research Team",
      venue: "Journal of Financial Technology",
    },
    {
      year: "2025",
      title: "Multilingual NLP Models for South African Languages",
      authors: "OpenLabs Research Team",
      venue: "African NLP Workshop",
    },
  ];

  const innovations = [
    {
      title: "EduAI Platform",
      description: "An intelligent educational assistant that adapts to individual learning styles and provides personalized recommendations.",
      impact: "Used by 50+ schools across South Africa",
    },
    {
      title: "FinSecure",
      description: "Real-time fraud detection system using advanced anomaly detection algorithms.",
      impact: "Prevented over R10M in fraudulent transactions",
    },
    {
      title: "SocialGuard",
      description: "AI-powered content moderation system with cultural context awareness.",
      impact: "Processing 1M+ posts daily with 99.5% accuracy",
    },
    {
      title: "CommercePredict",
      description: "Inventory optimization and demand forecasting for e-commerce businesses.",
      impact: "Reduced inventory costs by 35% for clients",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research & Innovation
            </h1>
            <p className="text-xl text-gray-600">
              Pioneering AI research that pushes boundaries and creates real-world impact. Our laboratory is at the forefront of artificial intelligence innovation in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Research Focus Areas
            </h2>
            <p className="text-xl text-gray-600">
              Exploring the frontiers of artificial intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="border-2 hover:border-teal-200 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">{area.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-sm mb-2">Current Projects:</h4>
                    <ul className="space-y-1">
                      {area.projects.map((project, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovations & Publications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="innovations" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="innovations">Innovations</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="innovations" className="mt-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Innovations
                </h2>
                <p className="text-xl text-gray-600">
                  Breakthrough products and solutions from our research
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {innovations.map((innovation, index) => (
                  <Card key={index} className="border-2">
                    <CardHeader>
                      <CardTitle className="text-xl">{innovation.title}</CardTitle>
                      <p className="text-gray-600">{innovation.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm font-semibold text-blue-900">
                          Impact: {innovation.impact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="publications" className="mt-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Research Publications
                </h2>
                <p className="text-xl text-gray-600">
                  Contributing to the global AI research community
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {publications.map((pub, index) => (
                  <Card key={index} className="border-l-4 border-l-teal-600">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{pub.title}</h3>
                          <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                          <p className="text-sm text-gray-500">{pub.venue}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                            {pub.year}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Research Philosophy
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Impact-Driven</h3>
              <p className="text-gray-600 text-sm">
                Every research project must address real-world challenges and create measurable value.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Ethical AI</h3>
              <p className="text-gray-600 text-sm">
                We prioritize fairness, transparency, and responsible development in all our work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Open Collaboration</h3>
              <p className="text-gray-600 text-sm">
                We believe in sharing knowledge and collaborating with the global research community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Collaborate with Our Research Team
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Interested in partnerships, internships, or joint research projects? We'd love to hear from you.
          </p>
        </div>
      </section>
    </div>
  );
}
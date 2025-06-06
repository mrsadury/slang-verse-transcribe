
import { Card } from '@/components/ui/card';
import { Star, Users, Zap, Heart, Award, Rocket } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Dual AI Power",
      description: "Harness both GPT-4o-mini and DeepSeek v3 for the most accurate translations"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Gen Z Native",
      description: "Built by understanding real Gen Z language patterns and cultural context"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Context Aware",
      description: "Smart AI that understands nuance, emotion, and cultural references"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Always Updated",
      description: "Constantly learning new slang and expressions as they emerge"
    }
  ];

  const stats = [
    { number: "2", label: "AI Models", color: "text-neon-purple" },
    { number: "4", label: "Languages", color: "text-neon-cyan" },
    { number: "100%", label: "Accurate", color: "text-neon-pink" },
    { number: "∞", label: "Possibilities", color: "text-neon-green" }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            About ZLang
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The most advanced Gen Z translator powered by cutting-edge AI technology
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full">
                <Rocket className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              ZLang bridges the communication gap between generations by providing accurate, 
              contextual translations between traditional English and modern Gen Z slang. 
              We believe language evolves, and technology should help us understand each other better.
            </p>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="glassmorphism p-6 text-center border-white/10">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-white">Why Choose ZLang?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glassmorphism p-6 border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-white">Powered By Advanced AI</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-purple rounded-full"></div>
                  <h3 className="text-lg font-semibold text-white">GPT-4o-mini</h3>
                </div>
                <p className="text-gray-300 text-sm ml-6">
                  OpenAI's efficient and accurate language model, optimized for 
                  natural language understanding and generation with exceptional 
                  context awareness.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                  <h3 className="text-lg font-semibold text-white">DeepSeek v3</h3>
                </div>
                <p className="text-gray-300 text-sm ml-6">
                  Advanced reasoning model with superior contextual understanding, 
                  perfect for nuanced language translation and cultural adaptation.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* How It Works */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-white">How ZLang Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Input Analysis</h3>
                <p className="text-gray-300 text-sm">
                  AI analyzes your text for context, tone, and cultural references
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Smart Translation</h3>
                <p className="text-gray-300 text-sm">
                  Advanced AI models process and translate with cultural awareness
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-green rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Perfect Output</h3>
                <p className="text-gray-300 text-sm">
                  Get accurate translations that maintain meaning and vibe
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Team */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Award className="h-8 w-8 text-neon-yellow" />
            </div>
            <h2 className="text-2xl font-bold text-white">Built with ❤️</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              ZLang is created by passionate developers who understand the importance 
              of bridging communication gaps. We're committed to making language 
              barriers a thing of the past, one translation at a time.
            </p>
            <div className="flex justify-center space-x-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-purple">2024</div>
                <div className="text-gray-400 text-sm">Launched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-cyan">AI</div>
                <div className="text-gray-400 text-sm">Powered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-pink">24/7</div>
                <div className="text-gray-400 text-sm">Available</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

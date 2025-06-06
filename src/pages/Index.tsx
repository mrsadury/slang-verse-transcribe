
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Star, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Index() {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  
  const typingTexts = [
    "Turn 'That's fire!' into professional language",
    "Convert 'periodt' to 'That's final'",
    "Translate 'no cap' to 'no lie'",
    "Transform Gen Z slang instantly"
  ];

  useEffect(() => {
    const text = typingTexts[textIndex];
    let i = 0;
    
    const typeTimer = setInterval(() => {
      setCurrentText(text.slice(0, i));
      i++;
      
      if (i > text.length) {
        clearInterval(typeTimer);
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, [textIndex]);

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Dual AI Models",
      description: "Choose between GPT-4o-mini and DeepSeek for optimal translations"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-Language",
      description: "Support for English, বাংলা, हिंदी, and Español"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Smart Context",
      description: "AI understands context and provides accurate translations"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Gen Z Ready",
      description: "Stay updated with the latest slang and expressions"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent animate-glow">
              ZLang
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              The Gen Z Translator
            </p>
            <div className="h-8 text-lg text-neon-cyan font-medium">
              {currentText}
              <span className="animate-blink">|</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-16 space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link to="/translate">
              <Button
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-cyan hover:to-neon-purple text-white font-semibold px-8 py-3 rounded-full shadow-2xl hover:shadow-neon-purple/50 transition-all duration-300 transform hover:scale-105"
              >
                Start Translating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-auto border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Demo Preview */}
          <div className="glassmorphism rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Input</p>
                <p className="text-lg text-white">"That's absolutely fire, no cap! 💯"</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Output</p>
                <p className="text-lg text-neon-cyan">"That's absolutely amazing, no lie! 🔥"</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glassmorphism p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border-white/10"
              >
                <div className="text-neon-purple mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-neon-purple">2</h3>
              <p className="text-gray-300">AI Models</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-neon-cyan">4</h3>
              <p className="text-gray-300">Languages</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-neon-pink">∞</h3>
              <p className="text-gray-300">Possibilities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

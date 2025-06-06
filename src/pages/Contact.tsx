
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Globe, Youtube, ExternalLink } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: <Youtube className="h-6 w-6" />,
      title: "YouTube Channel",
      description: "Watch tutorials, updates, and tips",
      link: "https://www.youtube.com/@twayat",
      linkText: "@twayat",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Telegram",
      description: "Join our community for support",
      link: "https://t.me/twa_x_main",
      linkText: "t.me/twa_x_main",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website",
      description: "Visit our main website",
      link: "https://www.twayat.my.id",
      linkText: "twayat.my.id",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Send us your questions or feedback",
      link: "mailto:ayatofficial88@gmail.com",
      linkText: "ayatofficial88@gmail.com",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const faqs = [
    {
      question: "How accurate are the translations?",
      answer: "Our AI models achieve high accuracy by understanding context and cultural nuances. We continuously improve our models based on user feedback."
    },
    {
      question: "Which AI model should I choose?",
      answer: "GPT-4o-mini is great for general translations, while DeepSeek v3 excels at understanding complex context and cultural references."
    },
    {
      question: "Do you store my translations?",
      answer: "We only store translations locally in your browser for history. No data is sent to our servers except for the translation process."
    },
    {
      question: "Can I use ZLang offline?",
      answer: "Currently, ZLang requires an internet connection to access AI models. We're working on offline capabilities for future releases."
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions, feedback, or just want to say hi? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <Card key={index} className="glassmorphism p-6 border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 bg-gradient-to-r ${method.color} rounded-lg`}>
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                    <p className="text-gray-300 text-sm">{method.description}</p>
                  </div>
                </div>
                
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  <a 
                    href={method.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>{method.linkText}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Contact Form */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Quick Message</h2>
              <p className="text-gray-300">
                For fastest response, use our Telegram or email. We typically respond within 24 hours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Best Ways to Reach Us:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                    <span>Email for detailed inquiries</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                    <span>Telegram for quick support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                    <span>YouTube for tutorials</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Response Times:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Email:</span>
                    <span className="text-neon-cyan">1-24 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Telegram:</span>
                    <span className="text-neon-green">1-6 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>YouTube:</span>
                    <span className="text-neon-yellow">1-3 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-white">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-white/10 rounded-lg p-4 bg-white/5">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Social Media */}
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Follow us for the latest updates and Gen Z language trends!
          </p>
          <div className="flex justify-center space-x-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gradient-to-r ${method.color} rounded-full hover:scale-110 transition-transform duration-200`}
              >
                {method.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

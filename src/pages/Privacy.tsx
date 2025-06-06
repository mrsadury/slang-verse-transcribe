
import { Card } from '@/components/ui/card';
import { Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react';

export default function Privacy() {
  const privacyPrinciples = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Protection",
      description: "Your translations are processed securely and not stored on our servers"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Transparency",
      description: "We're clear about what data we collect and how we use it"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Security First",
      description: "All communications are encrypted and protected"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Minimal Collection",
      description: "We only collect what's necessary for the service to function"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Shield className="h-8 w-8 text-neon-green" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy is our priority. Here's how we protect your data.
          </p>
          <p className="text-sm text-gray-400">
            Last updated: December 2024
          </p>
        </div>

        {/* Privacy Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {privacyPrinciples.map((principle, index) => (
            <Card key={index} className="glassmorphism p-6 border-white/10">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gradient-to-r from-neon-green to-neon-cyan rounded-lg">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* What We Collect */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Database className="h-6 w-6 mr-2 text-neon-cyan" />
              What Information We Collect
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-neon-green pl-4">
                <h3 className="text-lg font-semibold text-white">Text for Translation</h3>
                <p className="text-gray-300">
                  We process your input text to provide translation services. This text is sent to AI providers (OpenAI/DeepSeek) 
                  for processing and is not stored permanently on our servers.
                </p>
              </div>
              
              <div className="border-l-4 border-neon-cyan pl-4">
                <h3 className="text-lg font-semibold text-white">Local Storage</h3>
                <p className="text-gray-300">
                  Your translation history and preferences are stored locally in your browser. 
                  This data never leaves your device unless you explicitly share it.
                </p>
              </div>
              
              <div className="border-l-4 border-neon-purple pl-4">
                <h3 className="text-lg font-semibold text-white">Usage Analytics</h3>
                <p className="text-gray-300">
                  We may collect anonymous usage statistics to improve our service. 
                  This includes general usage patterns but no personal information or translation content.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* How We Use Data */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Users className="h-6 w-6 mr-2 text-neon-pink" />
              How We Use Your Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Service Provision</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                    <span>Process translations through AI models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                    <span>Maintain translation history locally</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                    <span>Remember your preferences</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Service Improvement</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                    <span>Analyze usage patterns anonymously</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-yellow rounded-full"></div>
                    <span>Improve translation accuracy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                    <span>Enhance user experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Third Party Services */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Globe className="h-6 w-6 mr-2 text-neon-yellow" />
              Third-Party Services
            </h2>
            
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">OpenAI (GPT-4o-mini)</h3>
                <p className="text-gray-300 text-sm">
                  We use OpenAI's API for translation services. Your text is processed according to 
                  <a href="https://openai.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline ml-1">
                    OpenAI's Privacy Policy
                  </a>.
                </p>
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">DeepSeek</h3>
                <p className="text-gray-300 text-sm">
                  We use DeepSeek's API for advanced translation services. Your text is processed according to 
                  DeepSeek's privacy policies.
                </p>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">OpenRouter</h3>
                <p className="text-gray-300 text-sm">
                  We use OpenRouter as our API gateway. All requests are routed through their secure infrastructure 
                  according to their privacy standards.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Your Rights */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Lock className="h-6 w-6 mr-2 text-neon-green" />
              Your Rights and Choices
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Data Control</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Clear your local translation history anytime</li>
                  <li>• Adjust privacy settings in the app</li>
                  <li>• Choose which AI model to use</li>
                  <li>• Disable voice features</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Request data deletion</li>
                  <li>• Ask questions about privacy</li>
                  <li>• Report privacy concerns</li>
                  <li>• Request clarification</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Shield className="h-6 w-6 mr-2 text-neon-purple" />
              Security Measures
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                We implement industry-standard security measures to protect your data:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">🔒</div>
                  <h3 className="text-white font-semibold">HTTPS Encryption</h3>
                  <p className="text-gray-400 text-sm">All data in transit is encrypted</p>
                </div>
                
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">🛡️</div>
                  <h3 className="text-white font-semibold">Secure APIs</h3>
                  <p className="text-gray-400 text-sm">Enterprise-grade API security</p>
                </div>
                
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">💾</div>
                  <h3 className="text-white font-semibold">Local Storage</h3>
                  <p className="text-gray-400 text-sm">Your data stays on your device</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact */}
        <Card className="glassmorphism p-8 border-white/10">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">Questions About Privacy?</h2>
            <p className="text-gray-300">
              If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:ayatofficial88@gmail.com"
                className="text-neon-cyan hover:text-neon-purple transition-colors"
              >
                ayatofficial88@gmail.com
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="https://t.me/twa_x_main"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-neon-purple transition-colors"
              >
                Telegram Support
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

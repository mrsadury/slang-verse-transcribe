
import { useState } from 'react';
import { ArrowUpDown, Copy, Volume2, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation, TranslationDirection } from '@/contexts/TranslationContext';
import { useToast } from '@/hooks/use-toast';
import TranslationAPI from '@/utils/TranslationAPI';

export default function Translator() {
  const { settings, addToHistory } = useTranslation();
  const { toast } = useToast();
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [direction, setDirection] = useState<TranslationDirection>('normal-to-genz');

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Please enter some text",
        description: "Add some text to translate",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await TranslationAPI.translate(
        inputText,
        direction,
        settings.language
      );
      
      setOutputText(result);
      addToHistory({
        input: inputText,
        output: result,
        direction,
      });

      toast({
        title: "Translation complete! ✨",
        description: "Your text has been translated successfully",
      });
    } catch (error) {
      console.error('Translation error:', error);
      toast({
        title: "Translation failed",
        description: "Please try again in a moment",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwapDirection = () => {
    setDirection(prev => 
      prev === 'normal-to-genz' ? 'genz-to-normal' : 'normal-to-genz'
    );
    setInputText(outputText);
    setOutputText(inputText);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard! 📋",
        description: "Text copied successfully",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy text",
        variant: "destructive",
      });
    }
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window && settings.enableVoice) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    } else {
      toast({
        title: "Voice not available",
        description: "Speech synthesis is not supported or disabled",
        variant: "destructive",
      });
    }
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            AI Translator
          </h1>
          <p className="text-gray-300 text-lg">
            Transform your language with AI-powered translations
          </p>
          <p className="text-sm text-neon-cyan">
            Powered by DeepSeek v3 AI
          </p>
        </div>

        {/* Direction Toggle */}
        <Card className="glassmorphism p-6 border-white/10">
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg font-medium ${direction === 'normal-to-genz' ? 'text-neon-cyan' : 'text-gray-400'}`}>
              Normal English
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSwapDirection}
              className="rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-cyan hover:to-neon-purple"
            >
              <ArrowUpDown className="h-5 w-5" />
            </Button>
            <span className={`text-lg font-medium ${direction === 'genz-to-normal' ? 'text-neon-cyan' : 'text-gray-400'}`}>
              Gen Z Slang
            </span>
          </div>
        </Card>

        {/* Translation Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card className="glassmorphism p-6 border-white/10">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {direction === 'normal-to-genz' ? 'Normal English' : 'Gen Z Slang'}
                </h3>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClear}
                    className="text-gray-400 hover:text-white"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Textarea
                placeholder={
                  direction === 'normal-to-genz'
                    ? "Enter normal English text here..."
                    : "Enter Gen Z slang here..."
                }
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-[200px] bg-white/5 border-white/20 text-white placeholder:text-gray-400 resize-none"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  {inputText.length} characters
                </span>
                <Button
                  onClick={handleTranslate}
                  disabled={isLoading || !inputText.trim()}
                  className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-cyan hover:to-neon-purple disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Translating...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4" />
                      <span>Translate</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </Card>

          {/* Output Section */}
          <Card className="glassmorphism p-6 border-white/10">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {direction === 'normal-to-genz' ? 'Gen Z Slang' : 'Normal English'}
                </h3>
                <div className="flex space-x-2">
                  {outputText && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopy(outputText)}
                        className="text-gray-400 hover:text-white"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      {settings.enableVoice && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleSpeak(outputText)}
                          className="text-gray-400 hover:text-white"
                        >
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="min-h-[200px] bg-white/5 border border-white/20 rounded-md p-3">
                {outputText ? (
                  <p className="text-white leading-relaxed">{outputText}</p>
                ) : (
                  <p className="text-gray-400 italic">
                    Translation will appear here...
                  </p>
                )}
              </div>
              {outputText && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    {outputText.length} characters
                  </span>
                  <span className="text-sm text-neon-cyan">
                    Powered by DeepSeek v3
                  </span>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Quick Examples */}
        <Card className="glassmorphism p-6 border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Normal → Gen Z</p>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputText("That's really impressive!")}
                  className="text-xs"
                >
                  "That's really impressive!"
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputText("I completely agree with you")}
                  className="text-xs"
                >
                  "I completely agree"
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Gen Z → Normal</p>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputText("That's absolutely fire, no cap!")}
                  className="text-xs"
                >
                  "That's fire, no cap!"
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setInputText("This hits different, periodt")}
                  className="text-xs"
                >
                  "This hits different"
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

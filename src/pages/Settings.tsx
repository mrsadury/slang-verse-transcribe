
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from '@/contexts/TranslationContext';
import { useToast } from '@/hooks/use-toast';
import { Settings as SettingsIcon, Brain, Globe, Volume2, Smile, HelpCircle, Trash2 } from 'lucide-react';

export default function Settings() {
  const { settings, updateSettings, history, clearHistory } = useTranslation();
  const { toast } = useToast();

  const handleClearHistory = () => {
    clearHistory();
    toast({
      title: "History cleared! 🗑️",
      description: "All translation history has been removed",
    });
  };

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'bn', label: 'বাংলা (Bengali)' },
    { value: 'hi', label: 'हिंदी (Hindi)' },
    { value: 'es', label: 'Español (Spanish)' },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <SettingsIcon className="h-8 w-8 text-neon-purple" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Settings
            </h1>
          </div>
          <p className="text-gray-300 text-lg">
            Customize your ZLang experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Model Settings */}
          <Card className="glassmorphism p-6 border-white/10">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-neon-purple" />
                <h3 className="text-lg font-semibold text-white">AI Model</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Choose AI Model
                  </label>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${settings.aiModel === 'gpt-4o-mini' ? 'text-neon-cyan' : 'text-gray-400'}`}>
                        GPT-4o-mini
                      </span>
                    </div>
                    <Switch
                      checked={settings.aiModel === 'deepseek-v3'}
                      onCheckedChange={(checked) => 
                        updateSettings({ aiModel: checked ? 'deepseek-v3' : 'gpt-4o-mini' })
                      }
                    />
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${settings.aiModel === 'deepseek-v3' ? 'text-neon-cyan' : 'text-gray-400'}`}>
                        DeepSeek v3
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-400 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <p><strong>GPT-4o-mini:</strong> OpenAI's efficient model, great for accurate translations</p>
                  <p className="mt-1"><strong>DeepSeek v3:</strong> Advanced reasoning model, excellent for context understanding</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Language Settings */}
          <Card className="glassmorphism p-6 border-white/10">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-neon-cyan" />
                <h3 className="text-lg font-semibold text-white">Language</h3>
              </div>
              
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Primary Language
                </label>
                <Select
                  value={settings.language}
                  onValueChange={(value: any) => updateSettings({ language: value })}
                >
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/20">
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value} className="text-white hover:bg-white/10">
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="text-xs text-gray-400 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <p>Choose your preferred language for translations. All Gen Z translations will be in this language.</p>
              </div>
            </div>
          </Card>

          {/* Display Settings */}
          <Card className="glassmorphism p-6 border-white/10">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Smile className="h-5 w-5 text-neon-pink" />
                <h3 className="text-lg font-semibold text-white">Display</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm">Show Emojis</p>
                    <p className="text-gray-400 text-xs">Add emojis to translations for extra flair</p>
                  </div>
                  <Switch
                    checked={settings.showEmojis}
                    onCheckedChange={(checked) => updateSettings({ showEmojis: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm">Show Tooltips</p>
                    <p className="text-gray-400 text-xs">Display explanations for slang terms</p>
                  </div>
                  <Switch
                    checked={settings.showTooltips}
                    onCheckedChange={(checked) => updateSettings({ showTooltips: checked })}
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Audio Settings */}
          <Card className="glassmorphism p-6 border-white/10">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Volume2 className="h-5 w-5 text-neon-yellow" />
                <h3 className="text-lg font-semibold text-white">Audio</h3>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm">Enable Voice Reading</p>
                  <p className="text-gray-400 text-xs">Allow text-to-speech for translations</p>
                </div>
                <Switch
                  checked={settings.enableVoice}
                  onCheckedChange={(checked) => updateSettings({ enableVoice: checked })}
                />
              </div>

              <div className="text-xs text-gray-400 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p>Voice reading uses your browser's built-in speech synthesis. Quality may vary between devices.</p>
              </div>
            </div>
          </Card>
        </div>

        {/* History Section */}
        <Card className="glassmorphism p-6 border-white/10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <HelpCircle className="h-5 w-5 text-neon-green" />
                <h3 className="text-lg font-semibold text-white">Translation History</h3>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleClearHistory}
                className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear History
              </Button>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">Total translations: {history.length}</span>
              <span className="text-gray-400">Last 50 translations are saved</span>
            </div>

            {history.length > 0 ? (
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {history.slice(0, 5).map((item) => (
                  <div key={item.id} className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-neon-cyan">
                        {item.direction === 'normal-to-genz' ? 'Normal → Gen Z' : 'Gen Z → Normal'}
                      </span>
                      <span className="text-gray-400">
                        {item.model === 'gpt-4o-mini' ? 'GPT-4o-mini' : 'DeepSeek v3'}
                      </span>
                    </div>
                    <p className="text-white text-sm truncate">{item.input}</p>
                    <p className="text-gray-300 text-sm truncate">→ {item.output}</p>
                  </div>
                ))}
                {history.length > 5 && (
                  <p className="text-center text-gray-400 text-sm">
                    And {history.length - 5} more translations...
                  </p>
                )}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-4">No translations yet. Start translating to see your history!</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

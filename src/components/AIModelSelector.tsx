
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useTranslation } from '@/contexts/TranslationContext';
import { Brain, Zap } from 'lucide-react';

export default function AIModelSelector() {
  const { settings, updateSettings } = useTranslation();

  const handleModelChange = (checked: boolean) => {
    updateSettings({
      aiModel: checked ? 'deepseek-v3' : 'gpt-4o-mini'
    });
  };

  return (
    <Card className="glassmorphism p-4 border-white/10 w-fit">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-neon-purple" />
          <span className={`text-sm font-medium ${settings.aiModel === 'gpt-4o-mini' ? 'text-neon-cyan' : 'text-gray-400'}`}>
            GPT-4o-mini
          </span>
        </div>
        
        <Switch
          checked={settings.aiModel === 'deepseek-v3'}
          onCheckedChange={handleModelChange}
          className="data-[state=checked]:bg-neon-purple"
        />
        
        <div className="flex items-center space-x-2">
          <span className={`text-sm font-medium ${settings.aiModel === 'deepseek-v3' ? 'text-neon-cyan' : 'text-gray-400'}`}>
            DeepSeek v3
          </span>
          <Zap className="h-5 w-5 text-neon-cyan" />
        </div>
      </div>
      
      <div className="mt-2 text-xs text-gray-400 text-center">
        {settings.aiModel === 'gpt-4o-mini' ? 'OpenAI Model' : 'DeepSeek Model'}
      </div>
    </Card>
  );
}

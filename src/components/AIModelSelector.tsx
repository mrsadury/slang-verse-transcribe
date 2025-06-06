
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from '@/contexts/TranslationContext';
import { Brain, Zap, Crown, Gift } from 'lucide-react';

export default function AIModelSelector() {
  const { settings, updateSettings } = useTranslation();

  const handleModelChange = (value: string) => {
    updateSettings({
      aiModel: value as 'gpt-4o-mini' | 'deepseek-v3'
    });
  };

  const modelOptions = [
    {
      value: 'gpt-4o-mini',
      label: 'GPT-4o-mini',
      description: 'Premium Model',
      icon: Brain,
      badge: Crown,
      badgeColor: 'text-yellow-400',
      tier: 'PREMIUM'
    },
    {
      value: 'deepseek-v3',
      label: 'DeepSeek v3',
      description: 'Free Model',
      icon: Zap,
      badge: Gift,
      badgeColor: 'text-green-400',
      tier: 'FREE'
    }
  ];

  const selectedModel = modelOptions.find(model => model.value === settings.aiModel);

  return (
    <Card className="glassmorphism p-4 border-white/10 w-fit">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-neon-purple" />
          <span className="text-sm font-medium text-white">AI Model:</span>
        </div>
        
        <Select value={settings.aiModel} onValueChange={handleModelChange}>
          <SelectTrigger className="w-56 bg-white/5 border-white/20 text-white">
            <SelectValue>
              <div className="flex items-center space-x-2">
                {selectedModel && (
                  <>
                    <selectedModel.icon className="h-4 w-4 text-neon-cyan" />
                    <span>{selectedModel.label}</span>
                    <selectedModel.badge className={`h-3 w-3 ${selectedModel.badgeColor}`} />
                    <span className={`text-xs font-bold ${selectedModel.badgeColor}`}>
                      {selectedModel.tier}
                    </span>
                  </>
                )}
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-white/20">
            {modelOptions.map((model) => (
              <SelectItem 
                key={model.value} 
                value={model.value}
                className="text-white hover:bg-white/10 focus:bg-white/10"
              >
                <div className="flex items-center space-x-3">
                  <model.icon className="h-4 w-4 text-neon-cyan" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{model.label}</span>
                      <model.badge className={`h-3 w-3 ${model.badgeColor}`} />
                      <span className={`text-xs font-bold ${model.badgeColor}`}>
                        {model.tier}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">{model.description}</div>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
}

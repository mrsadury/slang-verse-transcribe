
import { TranslationDirection, Language } from '@/contexts/TranslationContext';

const API_KEY = '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';
const MODEL_NAME = 'deepseek/deepseek-chat-v3-0324:free';

class TranslationAPI {
  private static getPrompt(
    text: string,
    direction: TranslationDirection,
    language: Language
  ): string {
    const languageMap = {
      en: 'English',
      bn: 'Bengali (বাংলা)',
      hi: 'Hindi (हिंदी)',
      es: 'Spanish (Español)'
    };

    const targetLanguage = languageMap[language];
    
    if (direction === 'normal-to-genz') {
      return `You are a Gen Z translator. Convert the following normal ${targetLanguage} text into Gen Z slang while maintaining the core meaning. Make it sound natural, trendy, and authentic. Add appropriate emojis where suitable. Keep the response in ${targetLanguage}.

Text to convert: "${text}"

Provide only the Gen Z translation, nothing else.`;
    } else {
      return `You are a professional language translator. Convert the following Gen Z slang text into clear, professional ${targetLanguage} while maintaining the original meaning and intent. Make it suitable for formal or academic contexts.

Gen Z text: "${text}"

Provide only the professional translation, nothing else.`;
    }
  }

  static async translate(
    text: string,
    direction: TranslationDirection,
    language: Language = 'en'
  ): Promise<string> {
    try {
      const prompt = this.getPrompt(text, direction, language);

      console.log('Making translation request with DeepSeek v3:', { direction, language });

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'ZLang - Gen Z Translator'
        },
        body: JSON.stringify({
          model: MODEL_NAME,
          messages: [
            {
              role: 'system',
              content: 'You are ZLang, a specialized AI translator for Gen Z language. Be creative, accurate, and maintain the vibe while translating.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.8,
          max_tokens: 500,
          top_p: 0.9,
          frequency_penalty: 0.1,
          presence_penalty: 0.1
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('API Response Error:', response.status, errorData);
        throw new Error(`Translation failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Translation response:', data);

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response format from API');
      }

      const translatedText = data.choices[0].message.content.trim();
      
      if (!translatedText) {
        throw new Error('Empty translation received');
      }

      return translatedText;
    } catch (error) {
      console.error('Translation API Error:', error);
      throw new Error(error instanceof Error ? error.message : 'Translation failed');
    }
  }
}

export default TranslationAPI;

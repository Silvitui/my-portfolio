// src/app/services/translation.service.ts
import { Injectable, Signal, computed, signal } from '@angular/core';
import es from '../../assets/translations/es.json';
import en from '../../assets/translations/en.json';
import ca from '../../assets/translations/ca.json';

export type LangCode = 'es' | 'en' | 'ca';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly translationsMap = {
    es,
    en,
    ca,
  };

  private lang = signal<LangCode>('es'); // puedes detectar navegador aquí si quieres

  currentLang = computed(() => this.lang());
  translations = computed(() => this.translationsMap[this.lang()]);
  supportedLangs: LangCode[] = ['es', 'en', 'ca'];

  langLabels: Record<LangCode, string> = {
    es: 'Es',
    en: 'En',
    ca: 'Ca',
  };

  // ✅ Método que necesitas para poder usar t('...') en el pipe
  t(key: string, params?: Record<string, any>): string {
    const lang = this.lang();
    const keys = key.split('.');
    let result = keys.reduce((obj: any, k: string) => (obj ? obj[k] : null), this.translationsMap[lang]);

    if (!result) return key;

    if (params) {
      for (const [paramKey, paramValue] of Object.entries(params)) {
        result = result.replace(`{{${paramKey}}}`, paramValue);
      }
    }

    return result;
  }

  setLanguage(lang: LangCode) {
    this.lang.set(lang);
  }
}

// src/app/shared/pipes/translate.pipe.ts
import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from './translation.service';


@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  i18n = inject(TranslationService);

  transform(key: string, params?: Record<string, any>): string {
    if (!key) return '';
    return this.i18n.t(key, params);
  }
}

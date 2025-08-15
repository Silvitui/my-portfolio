import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from "../../services/translate.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 translate = inject(TranslationService);
  
  linkedinUrl = 'https://www.linkedin.com/in/silviatuiran/';
  githubUrl   = 'https://github.com/Silvitui';
  email       = 'mailto:silviatuiranb@gmail.com';

  cvLinks: Record<string, string> = {
    es: 'assets/cv/CV_SILVIA_TUIRAN_ES.pdf',
    en: 'assets/cv/CV_SILVIA_TUIRAN_EN.pdf',

  };
   get currentCv(): string {
    const lang = (this.translate.currentLang() || 'es').split('-')[0];
    return this.cvLinks[lang] || this.cvLinks['es'];
  }
}

import { Component, Signal, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, LangCode } from '../../services/translation.service';
import { TranslatePipe } from '../../services/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  i18n = inject(TranslationService);
  currentLang: Signal<LangCode> = this.i18n.currentLang;
  supportedLangs: LangCode[] = this.i18n.supportedLangs;
  langLabels = this.i18n.langLabels;

  isOpen = false;
  showNavbar = signal(true);
  private lastScrollTop = 0;

  navLinks = [
    { path: '#home', labelKey: 'NAV.HOME' },
    { path: '#about', labelKey: 'NAV.ABOUT' },
    { path: '#experience', labelKey: 'NAV.EXPERIENCE' },
    { path: '#projects', labelKey: 'NAV.PROJECTS' },
    { path: '#contact', labelKey: 'NAV.CONTACT' }
  ];

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  onScroll = (): void => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const goingDown = scrollTop > this.lastScrollTop;

    this.showNavbar.set(!goingDown || scrollTop < 100);
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  changeLang(lang: string): void {
    if (this.supportedLangs.includes(lang as LangCode)) {
      this.i18n.setLanguage(lang as LangCode);
    }
  }

  getLangLabel(lang: LangCode): string {
    return this.langLabels[lang];
  }

  getTranslation(key: string): string {
    return this.i18n.t(key);
  }

  isActive(path: string): boolean {
    return window.location.hash === path;
  }
}

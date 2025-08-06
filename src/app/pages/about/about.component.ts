import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../services/translate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  i18n = inject(TranslationService); 
  skillIcons = [
  { name: 'HTML', icon: 'assets/icons/html.svg' },
  { name: 'CSS', icon: 'assets/icons/css.svg' },
  { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
  { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
  { name: 'Angular', icon: 'assets/icons/angular.svg' },
  { name: 'Tailwind', icon: 'assets/icons/tailwind.svg' },
  { name: 'DaisyUI', icon: 'assets/icons/daisyui.svg' },
  { name: 'Git', icon: 'assets/icons/git.svg' },
  { name: 'GitHub', icon: 'assets/icons/github.svg' },
  { name: 'Figma', icon: 'assets/icons/figma.svg' },
  { name: 'MongoDB', icon: 'assets/icons/mongodb.svg' },
  { name: 'Express', icon: 'assets/icons/express.svg' },

  ];

}

import { CommonModule } from '@angular/common';
import { Component, effect, signal, untracked } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../services/translate.pipe';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isMobile = signal(window.innerWidth <= 600);
  constructor() {
    effect(() => {
      const listener = () => {
        if (untracked(this.isMobile) !== (window.innerWidth <= 600)) {
          this.isMobile.set(window.innerWidth <= 600);
        }
      };
      window.addEventListener('resize', listener);
      return () => {
        window.removeEventListener('resize', listener);
      };
    });
  }
}



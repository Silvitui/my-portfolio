import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../services/translate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  translate = inject(TranslationService);

  projects = [
    {
      name: 'PROJECTS.CONNECTAPET.NAME',
      description: 'PROJECTS.CONNECTAPET.DESCRIPTION',
      url: 'https://connectapet.silviatuiranb.es',
      github: 'https://github.com/Silvitui/pipipark',
      image: 'assets/images/connectapet.png',
    },
    {
      name: 'PROJECTS.PLANITGO.NAME',
      description: 'PROJECTS.PLANITGO.DESCRIPTION',
      url: 'https://silvitui.github.io/inprocode/welcome',
      github: 'https://github.com/Silvitui/inprocode',
      image: 'assets/images/planitgo.png',
    },
    {
      name: 'PROJECTS.STARWARS.NAME',
      description: 'PROJECTS.STARWARS.DESCRIPTION',
      url: 'https://starwars.silviatuiranb.es',
      github: 'https://github.com/Silvitui/Star-Wars',
      image: 'assets/images/star-wars.png',
    },
  ];
}

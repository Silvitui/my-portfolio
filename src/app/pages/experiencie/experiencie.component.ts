import { Component, computed, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../services/translate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencie',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './experiencie.component.html',
  styleUrl: './experiencie.component.css'
})
export class ExperiencieComponent {
  i18n = inject(TranslationService);

experiences = computed(() => this.i18n.translations()?.EXPERIENCE?.ENTRIES || []);
experienceTech = computed(() => this.i18n.translations()?.EXPERIENCE_TECH?.ENTRIES || []);
techProjects = computed(() => this.i18n.translations()?.EXPERIENCE_TECH?.PROJECTS || []);


}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../services/translate.pipe';


@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule,TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

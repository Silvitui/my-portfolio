import { Component } from '@angular/core';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperiencieComponent } from './pages/experiencie/experiencie.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, AboutComponent,ExperiencieComponent,FooterComponent,ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-silvia';

}

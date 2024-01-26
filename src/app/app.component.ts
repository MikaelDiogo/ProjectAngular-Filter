import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterMapComponent } from './components/filter-map/filter-map.component';
import { HomeComponent } from './components/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularLearn';
}

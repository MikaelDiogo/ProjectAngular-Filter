import { Component } from '@angular/core';
import { SelectMapComponent } from '../select-map/select-map.component';
import { HeaderComponent } from '../header/header.component';
import { FilterImageComponent } from '../filter-image/filter-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SelectMapComponent, HeaderComponent, FilterImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

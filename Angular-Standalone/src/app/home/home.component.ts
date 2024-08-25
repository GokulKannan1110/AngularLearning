import { Component } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';

@Component({
  standalone: true,
  imports:[DetailComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

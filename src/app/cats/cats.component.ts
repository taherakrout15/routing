// cats.component.ts
import { Component } from '@angular/core';
import { CATS } from '../mock-cats';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent {
  cats = CATS;

  constructor(private router: Router) {}

  viewCatDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}

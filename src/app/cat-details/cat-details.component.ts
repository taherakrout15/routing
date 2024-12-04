// cat-details.component.ts
import { Component, Input } from '@angular/core';
import { Cat } from '../cats';

@Component({
  selector: 'app-cat-details',
  template: `
    <div *ngIf="cat">
      <h2>{{ cat.name }}'s Details</h2>
      <p><strong>Breed:</strong> {{ cat.breed }}</p>
      <p><strong>Country of Origin:</strong> {{ cat.country }}</p>
    </div>
  `,
})
export class CatDetailsComponent {
  @Input() cat!: Cat;
}

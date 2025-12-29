import { Component, input } from '@angular/core';
import { Card } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [Card, TagModule, RatingModule, ButtonModule, FormsModule],
  templateUrl: './product-card.html',
})
export class ProductCard {
  products = input<any[]>([]);

  getSeverity(
    status: string
  ): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | null {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Low Stock':
        return 'warn';
      case 'Out of Stock':
        return 'danger';
      default:
        return 'info';
    }
  }
}

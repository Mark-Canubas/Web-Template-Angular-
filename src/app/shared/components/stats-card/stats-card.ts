import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-stats-card',
  imports: [CardModule],
  templateUrl: './stats-card.html',
})
export class StatsCard {
  statsItems = input.required<
    {
      title: string;
      description: string;
      value: string | number;
      icon: string;
    }[]
  >();
}

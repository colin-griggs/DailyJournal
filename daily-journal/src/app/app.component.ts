import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StreakCounterComponent } from './streak-counter/streak-counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StreakCounterComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daily-journal';
}

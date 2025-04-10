import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-streak-counter',
  templateUrl: './streak-counter.component.html',
  styleUrls: ['./streak-counter.component.css'],
  imports: [CommonModule],
})
export class StreakCounterComponent implements OnInit {
  today: Date;
  startDate: Date;
  daysPassed: number;

  constructor() {
    // Set today's date
    this.today = new Date();
    
    // Set the start date (today)
    this.startDate = new Date(2025, 3, 9);
    
    // Calculate days passed since the start date
    const timeDiff = this.today.getTime() - this.startDate.getTime();
    this.daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));
  }

  ngOnInit(): void {
  }
}

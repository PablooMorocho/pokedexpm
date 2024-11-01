import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  currentHealth: number = 5;
  healthArray: number[] = [1, 2, 3, 4, 5];
  maxHealth: number = 5;

  attack() {
    if (this.currentHealth > 0) {
      this.currentHealth--;
    }
  }

  recover() {
    if (this.currentHealth < this.maxHealth) {
      this.currentHealth++;
    }
  }
}


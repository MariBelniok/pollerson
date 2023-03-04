import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, NgFor],
  template: `
    <button mat-raised-button color="warn">
      Botão
    </button>
  `,
})
export default class HomeComponent {}

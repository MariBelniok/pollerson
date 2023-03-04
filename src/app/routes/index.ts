import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, NgFor],
  template: `
    <div class="flex flex-col gap-4 items-center">
      <h1 class="text-2xl font-bold underline">
        Hello world!
      </h1>
      <button mat-raised-button color="warn">
        Botão
      </button>
    </div>
  `,
})
export default class HomeComponent {}

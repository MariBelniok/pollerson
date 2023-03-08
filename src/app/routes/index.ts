import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  template: `
    <div class="flex flex-col gap-4 items-center">
      <h1 class="text-2xl font-bold underline">Hello world!</h1>
      <button mat-raised-button color="warn" [routerLink]="'/list'">Clica ni mim</button>
    </div>
  `,
})
export default class HomeComponent {}

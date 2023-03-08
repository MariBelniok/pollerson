import { Component, inject } from '@angular/core';
import { HttpClientService } from '../shared/services/http-client.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  template: `
    <div class="flex flex-col gap-4 items-center">
      <h1 class="text-2xl font-bold underline">Lista de polls</h1>

      <button
        *ngFor="let item of [1, 2, 3, 4, 5, 6, 7, 8]"
        [routerLink]="'/poll/' + item"
      >
        - Poll existente
      </button>

      <button>+ Adicionar novo poll</button>

      <button (click)="testApi()">TESTAR API</button>
    </div>
  `,
})
export default class HomeComponent {
  private http = inject(HttpClientService);

  public testApi() {
    this.http.hello().subscribe(console.log)
  }
}

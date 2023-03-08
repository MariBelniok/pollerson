import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SharedModule, ComponentsModule],
  template: `
    <button [routerLink]="'/list'">Voltar para a lista</button>

    <h2>Id da poll: {{ productId$ | async }}</h2>

    <app-poll-option [name]="'opcao 1'" [count]="1"></app-poll-option>
  `,
})
export default class ProductDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly productId$ = this.route.paramMap.pipe(
    map((params) => params.get('id'))
  );
}

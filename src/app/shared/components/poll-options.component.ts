import { Component, Input } from '@angular/core';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-poll-option',
  standalone: true,
  imports: [SharedModule],
  template: `
    <div
      class="flex flex-col gap-1 items-center border-2 rounded border-red-500"
    >
      <div>tamanho dos votos</div>
      <p>nome da opção</p>
    </div>
  `,
})
export default class PollOptionComponent {
  @Input() public name: any;
  @Input() public count: any;
}

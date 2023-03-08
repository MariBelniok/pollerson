import { NgModule } from '@angular/core';
import PollOptionComponent from './poll-options.component';

const publicApi = [PollOptionComponent];

@NgModule({
  imports: publicApi,
  exports: publicApi,
})
export class ComponentsModule {}

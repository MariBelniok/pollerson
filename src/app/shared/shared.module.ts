import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

const publicApi = [CommonModule, RouterLink, MatButtonModule];

@NgModule({
  declarations: [],
  imports: publicApi,
  exports: publicApi,
})
export class SharedModule {}

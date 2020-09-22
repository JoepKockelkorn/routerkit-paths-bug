import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AOverviewComponent } from './a-overview/a-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AOverviewComponent },
    ]),
  ],
  declarations: [AOverviewComponent],
})
export class FeatureAModule {}

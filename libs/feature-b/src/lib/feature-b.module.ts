import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BOverviewComponent } from './b-overview/b-overview.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BOverviewComponent },
    ]),
  ],
  declarations: [BOverviewComponent],
})
export class FeatureBModule {}

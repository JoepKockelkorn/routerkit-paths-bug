import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'a',
        loadChildren: () =>
          import('@routerkit-paths-bug/feature-a').then(
            (module) => module.FeatureAModule
          ),
      },
      {
        path: 'b',
        loadChildren: () =>
          import('@routerkit-paths-bug/feature-b').then(
            (module) => module.FeatureBModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

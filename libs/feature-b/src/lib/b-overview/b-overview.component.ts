import { Component, ChangeDetectionStrategy } from '@angular/core';
import { getRoutes } from '@routerkit/core';

import { TypedRoutes } from '../../../../../apps/app/app.routes';

@Component({
  selector: 'routerkit-paths-bug-b-overview',
  templateUrl: './b-overview.component.html',
  styleUrls: ['./b-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BOverviewComponent {
  routes = getRoutes<TypedRoutes>();
}

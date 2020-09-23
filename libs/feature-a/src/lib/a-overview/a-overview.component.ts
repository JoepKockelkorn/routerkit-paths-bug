import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { getRoutes } from '@routerkit/core';

import { TypedRoutes } from '../../../../../apps/app/app.routes';

@Component({
  selector: 'routerkit-paths-bug-a-overview',
  templateUrl: './a-overview.component.html',
  styleUrls: ['./a-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AOverviewComponent {
  routes = getRoutes<TypedRoutes>();
}

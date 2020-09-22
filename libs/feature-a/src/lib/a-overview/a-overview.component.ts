import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'routerkit-paths-bug-a-overview',
  templateUrl: './a-overview.component.html',
  styleUrls: ['./a-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'routerkit-paths-bug-b-overview',
  templateUrl: './b-overview.component.html',
  styleUrls: ['./b-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

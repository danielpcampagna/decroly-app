import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Banner } from 'src/app/bases/banner.base';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnInit {

  @Input() banner?: Banner | null;

  constructor() { }

  ngOnInit(): void {
  }

}

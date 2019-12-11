import { Component, OnInit } from '@angular/core';
import { LazyService } from 'src/app/shared/services/lazy.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  constructor(private lazyService: LazyService) { }

  ngOnInit() {
  }

}

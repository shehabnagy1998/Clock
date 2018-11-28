import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter } from 'rxjs/operators';
import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
  sequence
} from '@angular/animations';

const animi = trigger('routeAnimation', [
  transition('*<=>*', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s linear', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s linear', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animi]
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private ngx: NgxSpinnerService) { }

  ngOnInit(): void {
    
  }

  title = 'Ang-Pro';
}

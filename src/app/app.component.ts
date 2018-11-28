import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private ngx: NgxSpinnerService) { }

  ngOnInit(): void {
    
  }

  title = 'Ang-Pro';
}

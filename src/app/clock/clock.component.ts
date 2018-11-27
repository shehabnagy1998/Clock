import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function () {

      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      let Time = (hour) => {
        if (hour > 12) {
          hour = hour - 12;
          if (hour <= 0)
            hour = 1;
          return `Pm ${check(hour)} : `;
        }
        return `Am ${check(hour)} : `;
      };

      let check = (val) => {
        if (val < 10)
          return `0${val}`;
        else
          return val;
      };

      let timer = window.setInterval(() => {
        let date = new Date();
        $('.hour').text(Time(date.getHours()));
        $('.minute').text(check(date.getMinutes()));
        $('.second').text(check(date.getSeconds()));
        $('.progress-bar').css({ width: `${(date.getSeconds() / 60) * 100}%`});
        $('.month').text(months[date.getMonth()]);
        $('.day').text(` ${check(date.getDate())}, `);
        $('.year').text(date.getFullYear());
      }, 1000);
    }());

  }

}

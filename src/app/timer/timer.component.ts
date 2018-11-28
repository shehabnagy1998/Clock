import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as $ from 'jquery';
import { parse } from 'querystring';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private title: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(t => this.title.setTitle(t['title']));

    (function () {
      var hor = $('.hourSetter'),
        min = $('.minuteSetter'),
        sec = $('.secondSetter'),
        change = $('.changing'),
        over = $('.overlay');

      min.on('change', function () {
        if (parseInt($(this).val()) >= 60) {
          $(this).val('60');
        } else if (parseInt($(this).val()) <= 0) {
          $(this).val('0');
        }
      });

      sec.on('change', function () {
        if (parseInt($(this).val()) >= 60) {
          $(this).val('60');
        } else if (parseInt($(this).val()) <= 0) {
          $(this).val('0');
        }
      });

      $(document).on('click', '.reset', function() {
        hor.val('0');
        min.val('0');
        sec.val('0');
        change.text('Start');
        window.clearInterval(inter);
        over.css({ 'backgroundColor': 'rgb(221, 221, 221)' });
      });

      function changingColor() {
        if (over.css('backgroundColor') === "rgb(221, 221, 221)")
          over.css({ 'backgroundColor': 'rgb(255, 255, 255)' });
        else if (over.css('backgroundColor') === "rgb(255, 255, 255)")
          over.css({ 'backgroundColor': 'rgb(170, 170, 170)' });
        else if (over.css('backgroundColor') === "rgb(170, 170, 170)")
          over.css({ 'backgroundColor': 'rgb(255, 255, 255)' });

      };

      var inter;
      var snd = new Audio('assets/beep.wav');
      $(document).on('click', '.changing', function () {
     
        if (change.text() == 'Start') {
          if (hor.val() && min.val() && sec.val()) {
            change.text('Pause');
            inter = window.setInterval(function () {
              if (sec.val() == 0) {
                if (min.val() == 0) {
                  if (hor.val() == 0) {
                    console.log('complete');
                    changingColor();
                    window.navigator.vibrate(500);
                    snd.play();
                    
                  } else {
                    hor.val(hor.val() - 1);
                    min.val(59);
                  }
                } else {
                  min.val(min.val() - 1);
                  sec.val(59);
                }
              } else {
                sec.val(sec.val() - 1);
              }
            }, 1000);
          } else {
            hor.val(0);
            min.val(0);
            sec.val(0);
          }
        }

        else {
          change.text('Start');
          window.clearInterval(inter);
          over.css({ 'backgroundColor': 'rgb(221, 221, 221)' });
        }
      });
    }());
  }

  sec = 0;
  min = 0;
  hor = 0;

}

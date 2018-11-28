import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { TimerComponent } from './timer/timer.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';

const routes: Routes = [
  { path: '', redirectTo: '/stopwatch', pathMatch: 'full' },
  { path: 'clock', component: ClockComponent, data: { title: "Clock Now" } },
  { path: 'timer', component: TimerComponent, data: { title: "Timer" } },
  { path: 'stopwatch', component: StopWatchComponent, data: { title: "Stop Watch" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  { path: '', redirectTo: 'clock', pathMatch: 'full' },
  { path: 'clock', component: ClockComponent, data: {title: "Clock Now"} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

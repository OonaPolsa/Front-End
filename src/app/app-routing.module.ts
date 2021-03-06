import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {FeedbackComponent} from "./feedback/feedback.component";
import {FormComponent} from "./form/form.component";
import {ReactiveformComponent} from "./reactiveform/reactiveform.component";
import {CinemaComponent} from "./cinema/cinema.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "@angular/fire/auth-guard";
import {MaintenanceComponent} from "./maintenance/maintenance.component";
import {TenttiComponent} from "./tentti/tentti.component";

const routes: Routes = [

  {path: 'calculator', component: CalculatorComponent},
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},

  {path: 'feedback', component: FeedbackComponent},
  {path: '', redirectTo: '/feedback', pathMatch: 'full'},

  {path: 'form', component: FormComponent},
  {path: '', redirectTo: '/form', pathMatch: 'full'},

  {path: 'reactiveform', component: ReactiveformComponent},
  {path: '', redirectTo: '/reactiveform', pathMatch: 'full'},

  {path: 'cinema', component: CinemaComponent},
  {path: '', redirectTo: '/cinema', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},

  {path: 'maintenance', component: MaintenanceComponent, canActivate: [AuthGuard], data: {target: ['main']}},

  //{path: 'tentti', component: TenttiComponent},
  //{path: '', redirectTo: '/tentti', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

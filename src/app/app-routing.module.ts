import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {FeedbackComponent} from "./feedback/feedback.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  {path: 'calculator', component: CalculatorComponent},
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},

  {path: 'feedback', component: FeedbackComponent},
  {path: '', redirectTo: '/feedback', pathMatch: 'full'},

  {path: 'form', component: FormComponent},
  {path: '', redirectTo: '/form', pathMatch: 'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

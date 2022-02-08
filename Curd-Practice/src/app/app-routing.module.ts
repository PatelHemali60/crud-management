import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'parent' , pathMatch:'full'},

  { path: 'parent', loadChildren: () => import('./Modules/employee/employee.module').then(m => m.EmployeeModule) }, 
  
{ path: 'resume', loadChildren: () => import('./Modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule) },

{ path: 'reactiveform', loadChildren: () => import('./Modules/form-validation/form-validation.module').then(m => m.FormValidationModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

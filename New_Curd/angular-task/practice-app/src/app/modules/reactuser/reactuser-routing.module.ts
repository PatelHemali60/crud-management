import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [
  { path: '',
    children:[
      {path:'list', component:UserListComponent},
      {path:'form', component:UserFormComponent},
      {path:'', redirectTo:'list', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactuserRoutingModule { }

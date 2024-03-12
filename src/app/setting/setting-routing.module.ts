import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepassComponent } from './changepass/changepass.component';
import { ChangephotoComponent } from './changephoto/changephoto.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';

const routes: Routes = [
  {

path:'',redirectTo:'changepath',pathMatch:"full"
},
  {path:'changepass',component:ChangepassComponent},
  {path:'changephoto',component:ChangephotoComponent},
  {path:'forgetpass',component:ForgetpassComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }

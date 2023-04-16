import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoombookingComponent } from './roombooking/roombooking.component';
import { IndexComponent } from './roombooking/index/index.component';
import { EditComponent } from './roombooking/edit/edit.component';
import { ViewComponent } from './roombooking/view/view.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'rooms', component:RoomsComponent},
  {path:'facilities', component:FacilitiesComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'roombooking', component:RoombookingComponent},
  {path:'post/index', component: IndexComponent},
  {path:'post/:postId/edit', component: EditComponent},
  {path:'post/:postId/view', component: ViewComponent},
  {path:'showtable', component: IndexComponent},
  {path:'**', component:NavbarComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

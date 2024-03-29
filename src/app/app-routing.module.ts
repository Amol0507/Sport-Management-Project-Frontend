import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayerComponent } from './components/createplayer-component/createplayer-component.component';
import { PlayerlistComponent } from './components/playerlist/playerlist.component';
import { PlayerdetailsComponent } from './components/playerdetails/playerdetails.component';
import { UpdateplayerComponent } from './components/updateplayer/updateplayer.component';

const routes: Routes = [
  {
    path:'add',
    component:CreatePlayerComponent
  },
  {
    path:'list',
    component:PlayerlistComponent
  },
  {
    path:'details/:playerId',
    component:PlayerdetailsComponent
  },
  {
    path:'update/:playerId',
    component:UpdateplayerComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Player } from '../../model/player';


@Component({
  selector: 'app-createplayer-component',
  templateUrl: './createplayer-component.component.html',
  styleUrl: './createplayer-component.component.css'
})

export class CreatePlayerComponent {
  
  constructor(private service:ServiceService,private router: Router) 
    {

    }
  
  submitted = false;

  player=new Player();

  onSubmit()
  {
    this.submitted=true;
    this.save();
  }

  save()
  {
    this.service.createPlayer(this.player).subscribe();
  }
}
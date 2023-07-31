import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';
import { generateId } from 'src/app/shared/generatedId';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  players: any;
  teams: any;

  constructor(private router:Router,private playerService:PlayerService) { }

  ngOnInit() {
   
  }

  // match ID
  playerForm: FormGroup;
  // match Obj
  player: any = {};

  // methode new player
  addPlayer() {
    
      this.playerService.addPlayer(this.player).subscribe(
        (data)=>{console.log("here data from BE",data.message)
        this.router.navigate(["admin"]);
      }
      );
    

  }
}

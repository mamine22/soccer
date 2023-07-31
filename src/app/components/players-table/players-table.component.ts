import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  players:any=[];
    
  constructor(private playerService:PlayerService,private router:Router) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      (data)=>{this.players=data.playersTab}
    )

  }

  deletePlayer(id:any) {
   this.playerService.deletePlayer(id).subscribe(
    (data)=>{console.log("here is BE : ",data.isDeleted)}
   )
  }

  goEditPlayer(id){
    this.router.navigate([`editPlayer/${id}`]);
  }
}

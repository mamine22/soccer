import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-searsh-team',
  templateUrl: './searsh-team.component.html',
  styleUrls: ['./searsh-team.component.css']
})
export class SearshTeamComponent implements OnInit {

  constructor(private teamService:TeamService) { }
  teams: any = []
  team: any = {};
  players: any = []
  stadiums: any = []
  findedTeam: any = {}
  findedStadiums: any = {}
  findedPlayers: any = {}

  searshForm: FormGroup;


  ngOnInit() {
   
  }

  searsh() {
    this.findedTeam = {}
    this.teamService.searshTeam(this.team).subscribe((data)=>{
      this.findedTeam=data.searshTab
    })
  }
  searshStadium(id) {

    return this.stadiums.find(elt => { return elt.id == id });
  }
  searshPlayers(id) {
    // for (let i = 0; i < this.players.length; i++) {
    //   if (this.players[i].teamId == id) {
    //     this.findedPlayers.push(this.players[i])
    //   }
    // }
    // return this.findedPlayers
    this.findedPlayers= this.players.filter((obj) => {return obj.teamId == id });
    return this.findedPlayers;
  }

}

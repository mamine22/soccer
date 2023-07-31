import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/service/team.service';
import { generateId } from 'src/app/shared/generatedId';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  stadiums:any;
  constructor(private teamService:TeamService,private router:Router) { }
  teams:any=[];
  ngOnInit() {
    this.teams=this.teamService.getAllTeams().subscribe();
  }

  // match ID
  teamForm: FormGroup;

  // match Obj
  team: any = {};

  // methode new team
  addTeam() {
    this.teamService.addTeam(this.team).subscribe(
      (data)=>{console.log("here data from BE",data.message)
      this.router.navigate(["admin"]);
    }
    );
  }
}


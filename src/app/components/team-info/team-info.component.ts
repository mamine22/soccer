import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  teams: any = [];
  stadiums: any = [];
  id: any;
  team: any={} ;
  teamForm: FormGroup;
  constructor(private activateRoute: ActivatedRoute, private router: Router,private teamService:TeamService) { }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get("id");
    this.teamService.getTeamById(this.id).subscribe(
      (data) => { this.team=data.team }
    );
  }



}

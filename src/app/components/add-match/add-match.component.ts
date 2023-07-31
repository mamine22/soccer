import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';
import { generateId } from 'src/app/shared/generatedId';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  constructor(private matchService:MatchService,private router:Router) { }
matches:any=[];
  ngOnInit() {
    this.matches=this.matchService.getAllMatches().subscribe();
  }
 
  // match ID
  matchForm: FormGroup;
  // match Obj
  match: any = {};

  // methode add new match
  addMatch() {
    this.matchService.addMatch(this.match).subscribe(
      (data)=>{console.log("here data from BE",data.message)
      this.router.navigate(["admin"]);
    }
    );
  }

}

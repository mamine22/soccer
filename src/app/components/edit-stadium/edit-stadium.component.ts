import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StadiumService } from 'src/app/service/stadium.service';

@Component({
  selector: 'app-edit-stadium',
  templateUrl: './edit-stadium.component.html',
  styleUrls: ['./edit-stadium.component.css']
})
export class EditStadiumComponent implements OnInit {

  stadiums: any = [];
  id: any;
  stadium: any;
  stadiumForm: FormGroup;
  constructor(private activateRoute: ActivatedRoute, private router: Router,private stadiumService:StadiumService) { }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get("id");
    this.stadiumService.getStadiumById(this.id).subscribe(
      (data)=>{this.stadium=data.stadium}
    );
   
  }
  editstadium() {
    this.stadiumService.editStadium(this.stadium).subscribe(
      (data)=>{console.log("Here IS BE :",data.isUpdated)}
    );
    this.router.navigate(["admin"]);
  }

}

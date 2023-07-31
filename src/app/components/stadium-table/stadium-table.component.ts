import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/service/stadium.service';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {

  stadiums: any = [];
  foundedStadium: any={};
  constructor(private router: Router,private stadiumService:StadiumService) { }

  ngOnInit() {
    this.stadiumService.getAllStadiums().subscribe((data)=>{
      this.stadiums=data.stadiumsTab
    });
  }

  searshStadium(id) {
    for (let i = 0; i < this.stadiums.length; i++) {
      if (this.stadiums[i].id == id) {
        this.foundedStadium = this.stadiums[i]
      }
    }
    return this.foundedStadium.name


    // return this.stadiums.find(elt) => {return element.id == x });
  }


  goEditStadium(id) {
    this.router.navigate([`editStadium/${id}`]);
  }
  goDisplayTeam(name) {
    this.router.navigate([`teamInfo/${name}`]);
  }

  deleteTeam(id: any) {
   this.stadiumService.deleteStadium(id).subscribe((data)=>{
    console.log(data.isDeleted);
   })
  }
}

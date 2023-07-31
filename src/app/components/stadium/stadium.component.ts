import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StadiumService } from 'src/app/service/stadium.service';
import { generateId } from 'src/app/shared/generatedId';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {

  constructor(private stadiumService:StadiumService) { }
  stadiumForm: FormGroup;
  
  stadium:any  = {};
  ngOnInit() {
  }

  addStadium() {
    this.stadiumService.addStadium(this.stadium).subscribe((data)=>{
      console.log(data.message)
    })

  }
}

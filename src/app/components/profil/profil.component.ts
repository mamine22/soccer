import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private userService:UserService,private activateRoute:ActivatedRoute) { }
id:any;
user:any={};
  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get("id");
    this.userService.getUserById(this.id).subscribe(
      (data) => {  this.user=data.user }
    );
  }

}

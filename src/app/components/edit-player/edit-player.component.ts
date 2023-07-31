import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  id: any;
  player: any={};
  playerForm: FormGroup;
  constructor(private activateRoute: ActivatedRoute, private router: Router,private playerService:PlayerService) { }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get("id");
    this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{this.player=data.player}
    );
  }
  editPlayer() {
    this.playerService.editPlayer(this.player).subscribe(
      (data)=>{console.log("Here IS BE :",data.isUpdated)}
    );
    this.router.navigate(["admin"]);
  }

}

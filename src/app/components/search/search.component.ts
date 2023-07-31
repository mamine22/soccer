import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() resultInput: any;

  findedMatches: any = [];
  match: any = {};
  searshForm: FormGroup;
  constructor(private matchService: MatchService) { }
  ngOnInit() {
  }
  searsh() {
    this.findedMatches = []
    this.matchService.searshMatches(this.match).subscribe(
      (data) => {
        this.findedMatches = data.searshTab;
      })
  }
}

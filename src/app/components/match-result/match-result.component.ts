import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css']
})
export class MatchResultComponent implements OnInit {

  @Input() resultInput: any;
  @Output() matchEmitter:EventEmitter<any> = new EventEmitter();

  constructor(private matchService: MatchService) { }

  comment: any = {};
  commentForm: FormGroup;

  ngOnInit() {
  };
 
  addComment() {
    let userId = localStorage.getItem('userId')
    this.comment.matchId = this.resultInput._id;
    this.comment.userId = userId;
    
    this.matchService.addComment(this.comment).subscribe((data) => {
      console.log(data.message);
      this.matchService.getAllMatchesWithComments().subscribe((data)=>{
        this.matchEmitter.emit(data.matches)
      })
    })


  }

  scoreColor(s1, s2) {
    if (s1 > s2) {
      return 'green'

    } else if (s1 < s2) {
      return 'orange'
    } else {
      return 'blue'
    }
  }
  cssColor(s1, s2) {
    if (s1 > s2) {
      return 'win'

    } else if (s1 < s2) {
      return 'loss'
    } else {
      return 'draw'
    }
  }
}

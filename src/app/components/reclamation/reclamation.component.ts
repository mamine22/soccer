import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/service/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  constructor(private router: Router, private FormBuilder: FormBuilder, private reclamationService: ReclamationService) { }

  reclamationForm: FormGroup;


  ngOnInit() {
    this.reclamationForm = this.FormBuilder.group({
      subject: [""],
      description: [""],


    })
  }

  sendReclamation() {
    let id = localStorage.getItem("userId")
    this.reclamationForm.value.userId = id
    this.reclamationService.sendReclamation(this.reclamationForm.value).subscribe((data) => {
      console.log(data.message)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  date: string = "hello";
  errorMsg: string;
  // form
  loginForm: FormGroup;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", Validators.required],

    })
  }


  // user Obj 
  user: any = {};
  login() {
    this.userService.login(this.loginForm.value).subscribe(
      (data) => {
        console.log(data.message)
        localStorage.setItem("userId",data.user.id )
        this.router.navigate([`profil/${data.user.id}`])
      }
    )



  }

  // if (a >= b){
  //   return"good"
  // }else{
  //   return "weak"
  // }

  // =>>>> (a<=b)? "good":"weak"
}

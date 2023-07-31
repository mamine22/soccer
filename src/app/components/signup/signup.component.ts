import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { generateId } from 'src/app/shared/generatedId';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // form
  signupForm: FormGroup;
  errMessage: string;
  imagePreview:any;

  constructor(private router:Router,private FormBuilder: FormBuilder, private userService: UserService) {
  }

  // *****************  *************** * * * ** * * * *  Module ::::  routerURl


  ngOnInit() {
    this.signupForm = this.FormBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      address: ["", Validators.required],
      phone: ["", [Validators.required, Validators.minLength(8)]],
      img:[""]
    })
  }

  signup() {
    this.signupForm.value.role = "user"
    this.userService.signup(this.signupForm.value,null).subscribe(
      (data) => {
        if (data.message) {
          this.router.navigate(['/signin'])
        }else{
          this.errMessage = "Email Exist !";
        }
      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}

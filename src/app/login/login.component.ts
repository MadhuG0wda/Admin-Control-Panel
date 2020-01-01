import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/auth.service';
import {userModel} from '../model/userModel';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: userModel[];

  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService, private userService: UserService) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    var userRequest = {
      "userEmail":this.loginForm.controls.email.value,
      "userPassword":this.loginForm.controls.password.value
    };
    this.logiAuth(userRequest);
    // if (this.loginForm.controls.email.value === '1' && this.loginForm.controls.password.value === '1') {
    //     this.router.navigate(['list-user']);
    // } else {
    //   this.invalidLogin = true;
    // }
    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // logiAuth(user: userModel): void {
  //   console.log(user);
  //   this.userService.loginAuth(user)
  //   .subscribe( data=>{
  //     this.user = data;
  //     console.log(data);
  //   });
  // }


  logiAuth(user: userModel): void {
    console.log(user);
    this.userService.loginAuth(user)
    .subscribe( data=>{
      console.log(JSON.stringify(data));
      if(data.status == 200){
        this.router.navigate(['dashBoard']);
      }else{
        alert("please check credentials");
      }
      
    });
  }

  dashBoard(){
    this.router.navigate(['dashBoard']);
  }

}

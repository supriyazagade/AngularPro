import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { FormBuilder,FormGroup,FormControl,Validators,NgForm } from '@angular/forms';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public signupForm:FormGroup;
public errMsg:string;
  constructor(private frmbuilder:FormBuilder,private http:Http,private router:Router) { }

  ngOnInit() {
  	this.signupForm = this.frmbuilder.group({
  		
  		email:['',[Validators.required,Validators.email]],
  		password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(16)]]
  	})
  }

   add_data(userRecord){
  	// console.log(userRecord)
  	var userdata=userRecord.value
  	// console.log(userdata)
  	this.http.get("http://localhost:4000/users").subscribe(
  		(res)=>{
  			var match_arr = []
  			// console.log(res.json())
  			for(var ans in res.json()){
  				if(res.json()[ans].email == userdata.email && res.json()[ans].password == userdata.password){
  					match_arr.push(res.json()[ans])
  				}
  			}

  			if(match_arr.length == 0){
  				this.errMsg = "Invalid Credential";
  			}
  			else{
  				// this.errMsg = "ok";
          localStorage.setItem("email",userdata.email);
          localStorage.setItem("status","done");
          // console.log(this.router);
          this.router.navigate(['/']);
  			}
  		}
  	);
  }

}

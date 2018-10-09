import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder,FormGroup,FormControl,Validators,NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	public signupForm:FormGroup;
  public err:string;
  constructor(private frmbuilder:FormBuilder,private http:Http) {
  	// console.log(this.frmbuilder)
  }

  ngOnInit() {
  	this.signupForm = this.frmbuilder.group({
  		name:['',[Validators.required,Validators.pattern(/^[a-zA-Z][a-zA-Z ]{1,}[a-zA-Z]$/)]],
  		mobile:['',[Validators.required,Validators.pattern(/^[1-9][0-9]{9}$/)]],
  		email:['',[Validators.required,Validators.email]],
  		password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(16)]],
  		confirm_password:['',Validators.required]
  	})
  }

  add_data(userRecord){
  	// console.log(userRecord)
    var userdata = userRecord.value;
    if(userdata.password!=userdata.confirm_password){
      this.err = "Password Mismatch";
    }
    else{
      delete userdata.confirm_password;
      // console.log(userdata)
      this.http.post("http://localhost:4000/users",userdata).subscribe(
        (res)=>{
          // console.log(res);
          if(res.statusText == "Created"){
              this.err = "User Added";
          }
        }
      );

      var msg = "User Added , With Eshopper";
      var path = "http://api.textlocal.in/send/?username=supriya17zagade12@gmail.com&hash=8c1780da232e11662c8b5a2f9ce95da2eb5a241f37dbbd30071973f83346f6aa&message="+msg+"&sender=TXTLCL&numbers=91"+userdata.mobile+"&test=0";

      this.http.get(path).subscribe(
        (res)=>{
          console.log(res.json());
        }
      );
      
    }
  }

}

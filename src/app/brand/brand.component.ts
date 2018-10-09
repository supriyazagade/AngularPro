import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
	public errMsg:string = "";
  public brandArr = [];
  constructor(private http:Http,private crud:CrudService) { }

  ngOnInit() {
      this.show();
  }

  show(){
    this.http.get("http://localhost:4000/brands").subscribe(
        (res)=>{
            // console.log(res.json());
            this.brandArr = res.json();
        }
      );
  }

  add(val){
  	if(val.length > 0){
  		this.crud.insert("brands",{name:val}).subscribe(
  				(res)=>{
  					console.log(res)
  					if(typeof res == "object" && res.id!=""){
  						this.errMsg = "Brand Added";
              this.show();
  					}
  				}
  			)
  	}
  	else{
  		this.errMsg = "Invalid Brand Name";
  	}
  }

}

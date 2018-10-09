import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {
public brand_name="";
  constructor(private route:ActivatedRoute,private http:Http,private router:Router) {

  	// console.log(this.route)
   }

  ngOnInit() {
  	var brandid = this.route.snapshot.params.brandid;
  	// console.log(brandid)
  	this.http.get("http://localhost:4000/brands/"+brandid).subscribe(
  		(res)=>{
  			// console.log(res.json())
  			this.brand_name = res.json().name;
  		}
  	);

  }

  update_data(formval){
  	// console.log(formval)
  	var obj = {name:formval.brand_rec};
  	var brandid = this.route.snapshot.params.brandid;
  	this.http.put("http://localhost:4000/brands/"+brandid , obj).subscribe(
  		(res)=>{
  			// console.log(res.json())
  			this.router.navigate(['/brand'])	
  		}
  	);
  }

}

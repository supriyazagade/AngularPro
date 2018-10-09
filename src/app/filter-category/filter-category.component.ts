import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import{Http} from '@angular/http'
@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.css']
})
export class FilterCategoryComponent implements OnInit {
public newArr = []
  constructor(private route: ActivatedRoute,private http:Http) { 
  	// console.log(this.route)
  	// console.log(this.route.snapshot.params.catid)
  }

  ngOnInit() {
  	// console.log(this.route.snapshot.params.catid)
  	// console.log(typeof this.route.snapshot.params.catid)

  	this.http.get("http://localhost:4000/products").subscribe(
  		(response)=>{
  			// console.log(response.json())
  			for(var rec in response.json()){
  				// console.log(rec)
  				// console.log(response.json()[rec])
  				if(this.route.snapshot.params.catid == response.json()[rec].category_id){
  					// console.log(response.json()[rec])
  					this.newArr.push(response.json()[rec])
  				}
  			}
  			// console.log(this.newArr)
  		}
  	);
  }

}

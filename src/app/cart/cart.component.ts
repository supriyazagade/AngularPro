import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private crud:CrudService,private cookie:CookieService) { }
  public newPro=[]
  ngOnInit() {
  		
      if( this.cookie.get( 'cartProduct') )
      {
        var rec = this.cookie.get( 'cartProduct'); 
        // console.log(rec)
        var arr = rec.split(",")
        console.log(arr)
        this.crud.select("products").subscribe((res)=>{
        	// console.log(res)
        	for(var ans in res){
        		// console.log(res[ans].id)
        		if(arr.indexOf(res[ans].id.toString())> -1){
        			this.newPro.push(res[ans])
        		}
        	}
        	// console.log(this.newPro)
        })
      }
  }

  delete_from_cart(id,ev){
  	console.log(ev)
  	ev.preventDefault();
  	if( this.crud.deleteFromCart(id) ){
  		ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none";
  	}
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map} from 'rxjs/operators';
import { Subject} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
	private url = "http://localhost:4000/";

  public subClass = new Subject();

  constructor(private http:Http,private cookie:CookieService) { }

  select(tablename){
  	// console.log("select method");
  	return this.http.get(this.url+tablename).pipe(

  		map(
  			(res)=>{
  				// console.log(res.json())
  				return res.json();
  			}
  		)
  	);
  }

  insert(tablename,data){
  	// console.log("select method");
  	return this.http.post(this.url+tablename,data).pipe(

  		map(
  			(res)=>{
  				// console.log(res.json())
  				return res.json();
  			}
  		)
  	);
  }

  filter(obj){
    // console.log(obj)
    // console.log(this.subClass)
    this.subClass.next(obj)
  }

  add_in_cart(pid){
    if( this.cookie.get('cartProduct') && this.cookie.get('cartProduct')!="" ){
      var oldData = this.cookie.get( 'cartProduct');
      // 2,2,3,3
      var arr =oldData.split(",")
      // console.log(arr)
      // console.log(pid)
      // console.log(typeof pid)
      var pos = arr.indexOf(pid.toString())
      // console.log(pos)
      if(pos==-1){
        var newData = oldData + ","+pid;
        this.cookie.set( 'cartProduct', newData );
        alert("prdouct Updated In Cart")   
      }
      else{
        alert("Product Exist In Cart")
      }
      

    }
    else{
      this.cookie.set( 'cartProduct', pid ); 
      alert("prdouct Added In Cart") 
    }
    
  }

  deleteFromCart(id){
    // alert(id)
    // console.log(id);
    var cartData = this.cookie.get( 'cartProduct');
    var arr = cartData.split(",");
    // console.log(arr)
    var pos = arr.indexOf(id.toString());
    // console.log(pos)
    arr.splice(pos,1)
    // console.log(arr);

    var newPro = arr.join(",")
    // console.log(newPro)
    this.cookie.set( 'cartProduct', newPro );
    return true;
  }


}

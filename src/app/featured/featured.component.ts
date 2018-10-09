import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
public product_data = []
  constructor( private crud:CrudService) { }
  public newData = [];
  ngOnInit() {
  	

    this.crud.select("products").subscribe(
        (response)=>{
            this.product_data=response
        }
    );


    this.crud.subClass.subscribe(
      (res)=>{
        this.newData = [];
        // console.log("FEATURED");
        // console.log(res);
        // console.log(res.y);
        var type = res['y']
        this.crud.select("products").subscribe(
            (response)=>{
                // console.log(response)
                for(var ans in response){
                  // console.log(response[ans])
                  if(type == "cat" && response[ans].category_id==res['x']){
                    this.newData.push(response[ans])
                  }
                  if(type == "br" && response[ans].brand_id==res['x']){
                    this.newData.push(response[ans])
                  }
                }
                this.product_data = this.newData;
            }
        );
      }
    )
  }

  add_to_cart(pid,ev){
    ev.preventDefault();
    // alert(pid);
    this.crud.add_in_cart(pid)
  }

  

}

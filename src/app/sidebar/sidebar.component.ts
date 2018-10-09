import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public brand_data = []
  public category_data = []
  constructor(private crud:CrudService) { }

  ngOnInit() {
  		/************ Brands Data *******/
  		this.crud.select("brands").subscribe(
          (response)=>{
              this.brand_data=response
          }
      );
      /************ Brands Data *******/
      /************ category Data *******/
      this.crud.select("category").subscribe(
          (response)=>{
              this.category_data=response
          }
      );
  		/************ category Data *******/
  }
  filter_brand(id,ev){
    // console.log(id)
    // console.log(ev)
    ev.preventDefault();
    this.crud.filter({x:id,y:"br"})
  }
  filter_category(id,ev){
    ev.preventDefault();
    this.crud.filter({x:id,y:"cat"})
  }
}

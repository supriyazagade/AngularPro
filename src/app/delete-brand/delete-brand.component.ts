import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-delete-brand',
  templateUrl: './delete-brand.component.html',
  styleUrls: ['./delete-brand.component.css']
})
export class DeleteBrandComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:Http,private router:Router) { }

  ngOnInit() {
  	var brandid = this.route.snapshot.params.brandid;
  	// console.log(brandid)
  	this.http.delete("http://localhost:4000/brands/"+brandid).subscribe(
  		(res)=>{
  			// console.log(res.json())
  			this.router.navigate(['/brand'])
  		}

  	)
  }

}

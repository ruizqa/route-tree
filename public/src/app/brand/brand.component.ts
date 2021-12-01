import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  id:any;
  constructor(private _route: ActivatedRoute,
    private _router: Router) { 
    
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.id = params['brand'];
  });
  }

}

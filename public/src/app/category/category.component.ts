import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  id:any;
  constructor(private _route: ActivatedRoute,
    private _router: Router) { 
    
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.id = params['cat'];
  });
  }

}

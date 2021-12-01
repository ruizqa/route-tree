import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  id:any;
  constructor(private _route: ActivatedRoute,
    private _router: Router) { 
    
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
  });

}

}

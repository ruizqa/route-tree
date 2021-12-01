import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-allreviews',
  templateUrl: './allreviews.component.html',
  styleUrls: ['./allreviews.component.css']
})
export class AllreviewsComponent implements OnInit {

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

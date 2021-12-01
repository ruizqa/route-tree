import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

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

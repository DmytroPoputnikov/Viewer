import { Component, OnInit, Input } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post = new Post();

  @Input('image') image?: string;
  @Input() title?: string;
  likeStatus:boolean = false; //status of favorite icon

  constructor() {
    
   }

  ngOnInit(): void {
  }

  

}

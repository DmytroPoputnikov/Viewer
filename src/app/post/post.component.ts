import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input('image') url?: string;
  @Input('image') text?: string;
  constructor() { }

  ngOnInit(): void {
  }

}

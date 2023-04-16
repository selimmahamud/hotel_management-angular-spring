import { Component, OnInit } from '@angular/core';
import { Bookcus } from '../roombooking';
import { BookpostService } from '../bookpost.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  posts: Bookcus[] = [];
    

  constructor(public bookpostService: BookpostService) { }
    

  ngOnInit(): void {
    this.bookpostService.getAll().subscribe((data: Bookcus[])=>{
      this.posts = data;
    })  
  }
    

  deletePost(id:number){
    this.bookpostService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
    })
  }
}

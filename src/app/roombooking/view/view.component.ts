import { Component, OnInit } from '@angular/core';
import { Bookcus } from '../roombooking';
import { ActivatedRoute, Router } from '@angular/router';
import { BookpostService } from '../bookpost.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  id!: number;
  post!: Bookcus;

  constructor(
    public bookpostService: BookpostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.post = {
      id: 0,
      name: '',
      email: '',
      phonenumber: '',
      dateofbirth: '',
      roomtype: '',
      numberofguests: 0,
      checkindate: '',
      checkoutdate: '',
      address: '',
    };
    this.id = this.route.snapshot.params['postId'];
    this.bookpostService.find(this.id).subscribe((data: Bookcus) => {
      this.post = data;
    });
  }
}

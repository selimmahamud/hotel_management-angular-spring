import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bookcus } from '../roombooking';
import { ActivatedRoute, Router } from '@angular/router';
import { BookpostService } from '../bookpost.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: number;
  post!: Bookcus;
  postList!: Bookcus[];
  form!:FormGroup;



  constructor(
    public bookpostService: BookpostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    console.log('iddddddd',this.id);
    
    this.bookpostService.find(this.id).subscribe((data: Bookcus)=>{
      this.post = data;
      this.form.setValue(this.post);



      // this.form = new FormGroup({
      //   id: new FormControl(this.post.id),
      //   name: new FormControl(this.post.name),
      //   email: new FormControl(this.post.email),
      //   phonenumber: new FormControl(this.post.phonenumber),
      //   dateofbirth: new FormControl(this.post.dateofbirth),
      //   roomtype: new FormControl(this.post.roomtype),
      //   numberofguests: new FormControl(),
      //   checkindate: new FormControl(),
      //   checkoutdate: new FormControl(),
      //   address: new FormControl()});
  



      
    });

    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phonenumber: new FormControl(),
      dateofbirth: new FormControl(),
      roomtype: new FormControl(),
      numberofguests: new FormControl(),
      checkindate: new FormControl(),
      checkoutdate: new FormControl(),
      address: new FormControl()

  })
   
}







submit(){

  this.bookpostService.update(this.id, this.form.value).subscribe((res:any) => {
    this.router.navigateByUrl('post/index');
})
}
}

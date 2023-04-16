import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookpostService } from './bookpost.service';

@Component({
  selector: 'app-roombooking',
  templateUrl: './roombooking.component.html',
  styleUrls: ['./roombooking.component.css']
})
export class RoombookingComponent {
  form!: FormGroup;
    

  constructor(
    public bookpostService: BookpostService,
    private router: Router
  ) { }
    
 
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phonenumber: new FormControl(),
      dateofbirth: new FormControl(),
      roomtype: new FormControl(),
      numberofguests: new FormControl(),
      checkindate: new FormControl(),
      checkoutdate: new FormControl(),
      address: new FormControl()
           
    });
  }
    


  submit(){
    this.bookpostService.create(this.form.value).subscribe((res:any) => {      
         this.router.navigateByUrl('post/index');        
         
    })
  }
}

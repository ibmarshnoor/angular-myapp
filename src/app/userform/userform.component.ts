import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {  //controller
  title:string = 'Userform';
  user:User=new User(); //model -stores all form data
  userArray:User[]=[];
  constructor(private userService:UserService) { }
  save(){
    const observable = this.userService.save(this.user);
    observable.subscribe(response=> {
      console.log(response);
      alert('user added..')
      this.userArray.push(Object.assign({}, this.user));
    },
    error=> {
      console.log(error);
      alert("error happened");
    })
    // this.user.firstname = 'John';

  }
  ngOnInit(): void {
  }
}

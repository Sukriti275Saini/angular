import { Component, OnInit } from '@angular/core';
import { AlloperationsService } from '../alloperations.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users;
  message;

  constructor(
    private list: AlloperationsService,
    private eform: FormBuilder
  ) { }

  editUser: any = this.eform.group({
    id: '',
    fname: '',
    lname: '',
    dob: '',
    email: '',
    mobileno: '',
    designation: '',
    address: ''
  });


  ngOnInit(): void {
    this.list.allusers().subscribe(response => {
      this.users = response
    });
  }

  onDelete(data) {
    this.list.deleteuser(data.id).subscribe(()=>{
      this.list.allusers().subscribe(response =>{
        this.users = response
      });
    });
    this.list.sendNotification(data.fname + "'s user data deleted");
  }

  onSubmit(data) {
    this.editUser.setValue(data);
  }

  onUpdate(id, data) {
    this.list.edituser(id, data).subscribe(() => {
      this.list.allusers().subscribe(response => {
        this.users = response
      });
    }
    );
    this.list.sendNotification(data.fname + "'s data updated");
  }
}

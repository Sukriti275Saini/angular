import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlloperationsService } from '../alloperations.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addingUser;

  newId = new FormControl('', [Validators.required, Validators.pattern("[0-9]{3,9}")]);
  newfname = new FormControl('', Validators.required);
  newlname = new FormControl('', Validators.required);
  newdob = new FormControl('', Validators.required);
  newemail = new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9._]{2,25}[@][a-z0-9]{4,20}[.][a-z]{2,5}")]);
  newmobileno = new FormControl('', [Validators.required, Validators.pattern("[1-9][0-9]{9}")]);
  newdesignation = new FormControl('', Validators.required);
  newaddress = new FormControl('', Validators.required);

  constructor(
    private newuser : FormBuilder,
    private addservices : AlloperationsService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.addingUser = this.newuser.group({
      id: this.newId,
      fname: this.newfname,
      lname: this.newlname,
      dob: this.newdob,
      email: this.newemail,
      mobileno: this.newmobileno,
      designation: this.newdesignation,
      address: this.newaddress,
    });
  }

  onSubmit(data){
    console.log(data);
    this.addservices.adduser(data).subscribe(()=> alert("New user added"));
    this.addingUser.reset();
    setTimeout(()=>{
      this.router.navigate(['']);
    },1000);
    this.addservices.sendNotification( "New User Added Named " + data.fname);
  }
}

import { Component, OnInit } from '@angular/core';
import { AlloperationsService } from '../alloperations.service';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {

  count = 0;

  msgs = [];

  constructor(
    private notification: AlloperationsService
  ) { }

  ngOnInit(): void {
    this.notification.getNotification().subscribe(res => {
      if (res) {
        this.count++;
        this.msgs.unshift(res);
      }
    });
  }

  onClick(id){
    this.count = this.count - 1;
    this.msgs.splice(id,1);
  }

}

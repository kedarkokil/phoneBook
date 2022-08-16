import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {

  users: any;
  constructor(private api: ContactService) { }

  ngOnInit(): void {
    this.api.get().subscribe(res => {
      this.users = res;
      console.log('data response', this.users);
    });

  }


}

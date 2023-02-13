import { Component } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { PaginationComponent } from './features/pagination/pagination/pagination.component';
import { IUserDetails } from './features/pagination/user.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTask3';
  users:IUserDetails[]=[];
 
}

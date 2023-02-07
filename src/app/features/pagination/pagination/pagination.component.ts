import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/api-call.service';
import { IProject, IUserDetails } from '../user.type';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  usersList: IUserDetails[] = [];
  projectList: IProject[] = [];
  pageNumber = 0;
  pageSize = 20;
  totalPages = 0;

  constructor(private getApi: ApiCallService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.getApi
      .getAllUsers(this.pageNumber, this.pageSize)
      .subscribe((response) => {
        this.usersList = response.users;
        this.pageNumber = response.pageNumber + 1;
        this.totalPages = response.totalPage;
        this.projectList = this.usersList[0].project;
      });
  }
  nextPage() {
    if (this.pageNumber <= this.totalPages) {
      this.getUsers();
    }
  }
  sample(project:any){
    
  }
}

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
  pageSize = 10;
  totalPages = 0;
  sortOrder = 'desc';
  sortProperty = 'firstName';

  constructor(private getApi: ApiCallService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.getApi
      .getAllUsers(
        this.pageNumber,
        this.pageSize,
        this.sortOrder,
        this.sortProperty
      )
      .subscribe((response) => {
        this.usersList = response.users;
        this.pageNumber = response.pageNumber;
        this.totalPages = response.totalPage;
        this.projectList = this.usersList[0].project;
      });
  }
  nextPage() {
    if (this.pageNumber <= this.totalPages) {
      this.getUsers();
    }
  }
  sample(project: any) {}

  pagination(e: any) {
    console.log(e.rows);
    console.log(e.page);
    this.pageNumber = e.page;
    this.pageSize = e.rows;
    this.getUsers();
  }
  tooltip(projects: IProject[]) {
    let allProjects: string[] = [];
    projects.forEach((el) => {
      allProjects.push(el.project);
    });
    allProjects.splice(0, 1);
    return allProjects;
  }
  employeeCodeSorting() {
    this.sortProperty = "employeeCode";
    // if (this.sortOrder == "desc") {
    //   this.sortOrder = "asc";
    //   this.getUsers();
    // }
    // else if( this.sortOrder == "asc"){
    //   this.sortOrder = "desc"
    //   this.getUsers();
    // }
    this.sortOrder == "desc" ? this.sortOrder = "asc" : this.sortOrder = "desc"
    this.getUsers();
    // this.getUsers();
  }
  employeeNameSorting(){
    this.sortProperty="firstName";
    this.sortOrder=="desc" ? this.sortOrder = "asc" : this.sortOrder = "desc"
    this.getUsers();

  }
}

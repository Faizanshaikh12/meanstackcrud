import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Employee} from './employee.modal';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http : HttpClient) {}

  postEmployee(emp : Employee){
    return this.http.post(this.baseURL, emp);
  }

  getEmploye(){
    return this.http.get(this.baseURL);
  }

  updateEmployee(emp: Employee){
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}

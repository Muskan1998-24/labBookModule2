import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=
 [
   new Employee(9,'Vikash',130000,"JAVA"),
   new Employee(2,'Daya',80000,"Angular"),
   new Employee(7,'Sachin',350000,"Js"),
   new Employee(4,'Uma',92000,"Java"),
   new Employee(5,'Rajita',250000,"Testing"),
   new Employee(6,'Nilima',150000,"Angular"),
   new Employee(3,'Rahul',70000,"Testing"),
   new Employee(8,'Amol',200000,".Net"),
   new Employee(1,'Vishal',190000,"BI")
];   

 

  fetchAllEmployees(): Employee[]
  {
      return this.store;
  }


}
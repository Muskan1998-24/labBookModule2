import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(1,'Rahul',5000,"JAVA"),
   new Employee(2,'Shikha',4000,"Angular")
];   
 
  //add employee in store 
  addEmployee(emp:Employee):void{
   this.store.push(emp);
  }

  //update employee by id
  updateEmployee(id:number):void{
    let foundIndex=-1;
    for(let i=0;i<this.store.length;i++){
      let emp=this.store[i];
      if(emp.empId===id){
        foundIndex=i;
        break;
      }
    }
    if(foundIndex<0){
      return;
    }
    this.store.sort();
  }
   
  //remove employee by id
  removeEmployeeById(id:number){
    let foundIndex=-1;
    for(let i=0;i<this.store.length;i++){
      let emp=this.store[i];
      if(emp.empId===id){
        foundIndex=i;
        break;
      }
    }
    if(foundIndex<0){
      return;
    }
    this.store.splice(foundIndex,1);

  }
  
  //fetch all the employees from store
  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}
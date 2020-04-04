import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'ascend'//name of the pipe
})

 //This pipe orders array on any field 
 
export class AscendingOrder implements PipeTransform{
    
    transform(values: any[], field:string) {
     if(field==null || field==undefined){
         return values;
     }


    
    //sorting of array
    
    let result:any[]=values.sort(
        
        // comparison of arrow function
        
        (e1, e2)=>{
        
        //fetching value of a field of object by field's name
        
        let e1FieldValue=e1[field];
        let e2FieldValue=e2[field];
        
        // comparison of number
        
        if(typeof e1FieldValue=="number")
        {
        let compNumber= e1FieldValue-e2FieldValue;
         return compNumber;
        }
        
        // comparison of string
        
        if(typeof e1FieldValue=="string"){
          let compNumber=  e1FieldValue.localeCompare(e2FieldValue);
          return compNumber;
        }
        return 0;
    }
    );
    return result;
    }


}
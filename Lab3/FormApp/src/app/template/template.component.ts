import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  productName;
  productId;
  productCategory = ['Grocery','Mobile','Electonics','Cloths'];

  ngOnInit(): void {
  }


  register(myform){   
    console.log("myform="+myform.value.productName+myform.value.productId);
    this.productName=myform.value.productName;
    this.productId=myform.value.productId
  }

}

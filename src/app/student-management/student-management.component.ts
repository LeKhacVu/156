import { Component, OnInit } from '@angular/core';
import { Istudent } from '../models/student';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent implements OnInit {

  studentList:Istudent[]= [
    {name:'Lê Khắc Vũ',age:13,className:'13vlh1'},
    {name:'Lê Khắc B',age:15,className:'15vlh1'},
    {name:'Lê Khắc C',age:20,className:'14vlh1'},
    {name:'Lê Khắc A',age:19,className:'16vlh1'}
  ];

  selectedStudent: Istudent[] =[];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from 'src/app/models/student';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {
  @Input() item : Istudent;
    constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-data-binding',
  templateUrl: './demo-data-binding.component.html',
  styleUrls: ['./demo-data-binding.component.scss'],
})
export class DemoDataBindingComponent implements OnInit {
  name = 'Dang Trung Hieu';

  email: string;

  isDisabled = false;
  imgSrc =
    'https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg';

  changeName() {
    this.name = 'Edward Dang';
  }

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent implements OnInit {
  public name: boolean = false
  public email: boolean = false
  public phone: boolean = false

  constructor() { }
  inputItems = ['Как Вас зовут?', 'Ваша почта', 'Ваш номер телефона']

  ngOnInit(): void {
  }

}

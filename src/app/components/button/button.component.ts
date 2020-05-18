import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string
  @Input() disabled: boolean
  @Input() submit: boolean
  clickSubmit: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    let temptext = this.text
    this.clickSubmit = true
    setTimeout(() => {
      this.clickSubmit = false
    }, 5000)
    setTimeout(() => {
      this.text = "Спасибо, заявка принята! Ожидайте ответа"
  }, 1000)
    setTimeout(() => {
      this.text = temptext
    }, 4000)
  }

}

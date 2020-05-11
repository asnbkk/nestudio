import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() name
  @Input() text
  @Input() focused = false
  // focused: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}

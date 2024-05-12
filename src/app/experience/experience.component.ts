import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() title!: string;
  @Input() company!: string;
  @Input() date!: string;
  @Input() description!: string[];
}
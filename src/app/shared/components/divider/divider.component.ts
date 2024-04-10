import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
})
export class DividerComponent {
  @Input() width? = '80%';
}

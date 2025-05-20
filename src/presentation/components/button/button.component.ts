import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';

  get buttonClass(): string {
    return `btn-${this.type} btn-${this.size}`;
  }
}

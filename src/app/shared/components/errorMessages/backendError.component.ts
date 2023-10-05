import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-backend-error',
  templateUrl: './backendError.component.html',
  styleUrls: ['./backendError.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BackendError implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = {};

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ');
      return `${name} ${messages}`;
    });
  }

  errorMessages: string[] = [];
}

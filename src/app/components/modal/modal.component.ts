import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(private router: Router) {}

  navegateToCreate() {
    this.router.navigate(['/products/create']);
  }
}

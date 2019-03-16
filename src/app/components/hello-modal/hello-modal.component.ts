import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-hello-modal',
  templateUrl: './hello-modal.component.html',
  styleUrls: ['./hello-modal.component.sass']
})
export class HelloModalComponent {
  showNum = 0;

  constructor(private injector: Injector) {
    this.showNum = this.injector.get('showNum');
  }
}

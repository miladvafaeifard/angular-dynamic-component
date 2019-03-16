import { Component, Injector, InjectionToken } from '@angular/core';

@Component({
  selector: 'app-bye-modal',
  templateUrl: './bye-modal.component.html',
  styleUrls: ['./bye-modal.component.sass']
})
export class ByeModalComponent {

  showNum = 0;

  constructor(private injector: Injector) {
    this.showNum = this.injector.get('showNum');
  }

}

import { Component } from '@angular/core';
import { HelloModalComponent } from './components/hello-modal/hello-modal.component';
import { ByeModalComponent } from './components/bye-modal/bye-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dyn-app';
  componentData = null;

  createHelloWorldComponent(){
    this.componentData = {
      component: HelloModalComponent,
      inputs: {
        showNum: 9
      }
    };
  }
  
  createWorldHelloComponent(){
    this.componentData = {
      component: ByeModalComponent,
      inputs: {
        showNum: 2
      }
    };
  }
}

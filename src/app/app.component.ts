import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import miniToastr from 'mini-toastr';
var mt = require('mini-toastr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    miniToastr.init();
  }
  test() {
    miniToastr.success("message", "title");
    this.toastr.success('You are awesome!', 'Success!');
  }
}

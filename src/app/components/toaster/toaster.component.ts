import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: [ './toaster.styles.scss' ]
})
export class ToasterComponent {
  @Input() show = true;

  reload() {
    document.location.reload();
  }
}


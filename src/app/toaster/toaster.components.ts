import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toaster',
  template: `
    <div class="toast" [class.show]="show">
      <div class="img">
        <img src="/assets/icons/icon-72x72.png" alt="icon" />
      </div>
      <div class="desc">
        Ein neues Update ist verfügbar!
        <br/>
        Klicke auf Update um die Seite zu Aktualisieren.
        <br/>
        <button (click)="reload()">Update</button>
      </div>
    </div>
  `,
  styleUrls: [ './toaster.styles.scss' ]
})
export class ToasterComponent {
  @Input() show = false;

  reload() {
    document.location.reload();
  }
}
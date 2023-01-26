import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  template: `
  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="../../assets/icons/icon-144x144.png" alt="" width="144" height="144">
    <div class="col-lg-6 mx-auto">
      <h1 class="display-5 fw-bold">Homepage</h1>
      <button (click)="startTypeWriter()" 
        type="button" class="btn btn-secondary btn-sm text-center">
        Starte die Demo Information.
      </button>
      <p #target [@textAnimation]="{ value: state, params: { speed: speed } }"></p>
    </div>
  </div>
  `,
  animations: [
    trigger('textAnimation', [
      state('hidden', style({
        opacity: 0,
      })),
      state('visible', style({
        opacity: 1,
      })),
      transition('hidden => visible', animate('{{ speed }}ms')),
    ]),
  ],
  styleUrls: ['./home.component.scss']
})
  export class HomeComponent implements OnInit {
    text = 'Wir sind spezialisiert auf die Erstellung von professionellen und benutzerfreundlichen Websites. Egal, ob Sie eine neue Website für Ihr Unternehmen benötigen oder Ihre bestehende Website auf den neuesten Stand bringen möchten – wir sind der richtige Ansprechpartner für Sie. Unser Team besteht aus erfahrenen Webdesignern und -entwicklern, die sich stetig weiterbilden, um Ihnen immer das bestmögliche Ergebnis zu liefern. Wir setzen auf moderne Technologien und achten darauf, dass Ihre Website gut auf Suchmaschinen wie Google gefunden wird. Neben der Erstellung von Websites bieten wir auch Dienstleistungen wie die Erstellung von Landingpages, Online-Shops und die Optimierung Ihrer Webpräsenz für mobile Endgeräte an. Kontaktieren Sie uns noch heute und lassen Sie uns gemeinsam Ihr perfektes Webprojekt realisieren!';
    speed = 50;
    i = 0;
    state = 'hidden';
    @ViewChild('target', { static: true })
  target!: ElementRef;
  
    constructor() {}
  
    ngOnInit() {}
  
    startTypeWriter() {
      this.state = 'visible';
      const text = this.text.split('');
      const target = this.target.nativeElement;
      const speed = this.speed;
      const self = this;
  
      function type() {
        if (text.length > self.i) {
          target.innerHTML += text[self.i];
          self.i++;
          setTimeout(type, speed);
        }
      }
      type();
    }
  }
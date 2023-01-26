import { Component } from '@angular/core';
import { HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';

const themeAndroidStudio: string = 'node_modules/highlight.js/styles/androidstudio.css';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent {
  response!: HighlightAutoResult;

  reload() {
    document.location.reload();
  }

code = `.toast {
  visibility: visible;
  max-width: 50px;
  height: 100px;
  /*margin-left: -125px;*/
  margin: auto;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;

  position: fixed;
  z-index: 1;
  left: 0;right:0;
  bottom: 30px;
  font-size: 17px;
  white-space: nowrap;

  .desc {
      color: #fff;
      padding: 16px;
      overflow: hidden;
    white-space: nowrap;
  }

  .img {
      width: 72px;
      float: left;
      padding-top: 16px;
      padding-bottom: 16px;
      box-sizing: border-box;
      background-color: #111;
      color: #fff;
  }

  &.show {
      visibility: visible;
      -webkit-animation: fadein 0.5s, expand 0.5s 0.5s;
      animation: fadein 0.5s, expand 0.5s 0.5s;
      animation-fill-mode: forwards;
  }
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes expand {
  from {min-width: 50px}
  to {min-width: 450px}
}

@keyframes expand {
  from {min-width: 50px}
  to {min-width: 450px}
}`;



constructor(private hljsLoader: HighlightLoader) {}


}
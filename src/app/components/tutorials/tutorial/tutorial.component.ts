import { Component } from '@angular/core';
import { HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';
import { Clipboard } from '@angular/cdk/clipboard';

const themeAndroidStudio: string = 'node_modules/highlight.js/styles/androidstudio.css';


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {
[x: string]: any;

  response!: HighlightAutoResult;

code = `#!/bin/bash

echo "Enter the name of the image file with extension: "
read image_name

echo "Enter the output format (png, jpg, gif, etc): "
read output_format

convert "$(pwd)/$image_name" -resize 16x16 favicon.$output_format

convert "$(pwd)/$image_name" -resize 72x72 icon-72.$output_format

convert "$(pwd)/$image_name" -resize 96x96 icon-96.$output_format

convert "$(pwd)/$image_name" -resize 144x144 icon-144.$output_format

convert "$(pwd)/$image_name" -resize 120x120 apple-touch-icon.$output_format

convert "$(pwd)/$image_name" -resize 270x270 ms-tile-icon.$output_format

convert "$(pwd)/$image_name" -resize 512x512 icon-512.$output_format

convert "$(pwd)/$image_name" -resize 192x192 app-icon.$output_format

`;

constructor(private clipboard: Clipboard) {}

copyText() {
  const textToCopy = document.getElementById('textToCopy');
  if(textToCopy){
      const text = textToCopy.innerText;
      this.clipboard.copy(text);
  }else{
      console.log("Element not found")
  }
}


}

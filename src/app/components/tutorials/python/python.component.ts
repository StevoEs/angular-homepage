import { Component } from '@angular/core';
import { HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';
import { Clipboard } from '@angular/cdk/clipboard';

const themeAndroidStudio: string = 'node_modules/highlight.js/styles/androidstudio.css';


@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent {
  [x: string]: any;

  response!: HighlightAutoResult;

code = `
import os
import sys

def check_python():
    try:
        os.system("python3 -V")
        return True
    except:
        return False

def install_python():
    os.system("pkg install python")

def check_packages():
    packages = ['youtube-dl', 'ffmpeg']
    for package in packages:
        try:
            if package == 'youtube-dl':
                os.system("pip show youtube-dl")
            else:
                os.system(f"pkg show {package}")
        except:
            return False
    return True

def install_packages():
    packages = ['youtube-dl', 'ffmpeg']
    os.system("pkg update")
    for package in packages:
        if package == 'youtube-dl':
            os.system("pip install youtube-dl")
        else:
            os.system(f"pkg install {package}")

def download_video(url, quality):
    video_info = os.popen(f"youtube-dl --get-filename {url}").read().strip()
    os.system(f"youtube-dl {url} -f bestvideo[ext=mp4]+bestaudio[ext=m4a]/{quality} -o '{video_info}.mp4'")

def download_audio(url, quality):
    audio_info = os.popen(f"youtube-dl --get-filename {url}").read().strip()
    os.system(f"youtube-dl {url} -f bestaudio[ext=m4a]/{quality} -o '{audio_info}.m4a'")
    os.system(f"ffmpeg -i '{audio_info}.m4a' '{audio_info}.mp3'")
    os.remove(f"{audio_info}.m4a")

if __name__ == "__main__":
    if not check_python():
        install = input("Python is not installed. Do you want to install it? (yes/no): ")
        if install.lower() == 'yes':
            install_python()
    if not check_packages():
        install = input("One or more required packages are not installed. Do you want to install them? (yes/no): ")
        if install.lower() == 'yes':
            install_packages()
        else:
            sys.exit("Exiting program. Please install required packages and run again.")
    url = input("Enter the URL of the video: ")
    file_type = input("Do you want a video file or an audio file? (video/audio): ")
    quality = input("Do you want the best quality or the worst quality? (best/worst): ")
    if file_type.lower() == 'video':
        download_video(url, quality)
    elif file_type.lower() == 'audio':
        download_audio(url, quality)
    print("Download complete.")

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


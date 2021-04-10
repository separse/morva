import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import 'leader-line';
declare var LeaderLine: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild('startingElement', { read: ElementRef }) startingElement!: ElementRef;
    @ViewChild('endingElement', { read: ElementRef }) endingElement!: ElementRef;
  
    ngAfterViewInit() {
      const line = new LeaderLine(this.startingElement.nativeElement, this.endingElement.nativeElement);
    }
  }

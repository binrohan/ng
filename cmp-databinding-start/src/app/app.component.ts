import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test', content: 'Content'}];
  frames: number[] = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {blueprintName: string, bluePrintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.blueprintName,
      content: bluePrintData.bluePrintContent
    });
  }

  onFrameChanged(frame: number){
    this.frames.push(frame);
  }
 
}

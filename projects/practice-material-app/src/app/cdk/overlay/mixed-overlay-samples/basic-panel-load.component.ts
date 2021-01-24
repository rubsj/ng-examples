import { Component } from '@angular/core';
@Component({
    selector: 'app-basic-panel-load',
    template: `
      <p>{{value}}</p>
    `,
    styles: [
        `p {
            font-weight: bold;
            padding: 10px;
            border: 1px solid black;
            background-color: teal;
            height: 300px;
        }`]
})
export class BasicPanelLoadComponent {
    value: string = 'Hello this is from Sample panel component'
}
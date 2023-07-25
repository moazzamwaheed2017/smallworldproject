import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'smallworld-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss'],
})
export class DropDownsComponent {

  selected = 0;
  agentName: any[] = [
    {id: 1, description: 'Type A'},
    {id: 2, description: 'Type B'},
    {id: 3, description: 'Type C'}
  ];

  country: any[] = [
    {id: 1, name: 'USA'},
    {id: 2, name: 'Pakistan'},
    {id: 3, name: 'UK'}
  ];
}
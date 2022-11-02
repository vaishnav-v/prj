import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              }
            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'File',
        icon: 'pi pi-fw pi-file'
      },

    ]
  }

}

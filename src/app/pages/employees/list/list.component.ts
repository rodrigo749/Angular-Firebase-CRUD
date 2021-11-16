import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras= {
    state: {
      value: null
    }
  };

  fakeData = [
    {
      name: 'Rodrigo',
      lastName: 'Ottoboni',
      email: 'me@gmail.com',
      startDate: '01/11/2021',
    },
    {
      name: 'Felipe',
      lastName: 'Frugoli',
      email: 'me@gmail.com',
      startDate: '01/11/2021',
    },
    {
      name: 'Pablo',
      lastName: 'Dias',
      email: 'me@gmail.com',
      startDate: '01/11/2021',
    },
    {
      name: 'Matheus',
      lastName: 'Neves',
      email: 'me@gmail.com',
      startDate: '01/11/2021',
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any):void {
     this.navigationExtras.state.value = item;
     this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoToSee(item: any):void {
     this.navigationExtras.state.value = item;
     this.router.navigate(['details'], this.navigationExtras);
  }

  onGoToDelete(item: any):void {
    alert('Deleted');
  }

}

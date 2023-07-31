import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-table',
  templateUrl: './store-table.component.html',
  styleUrls: ['./store-table.component.css']
})
export class StoreTableComponent implements OnInit {

  stores: any = [];
  constructor(private router: Router) { }


  ngOnInit() {
    this.stores = JSON.parse(localStorage.getItem("stores") || "[]");
  }
  
  goEditStore(name) {
    this.router.navigate([`editStore/${name}`]);
  }
  deleteStore(id: any) {
    for (let i = 0; i < this.stores.length; i++) {
      if (this.stores[i].id == id) {
        this.stores.splice(i, 1)
        break;
      }
    }
    localStorage.setItem("stores", JSON.stringify(this.stores));
  }


}

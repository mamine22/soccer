import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {

  stores: any = [];
  name: any;
  store: any;
  storeForm: FormGroup;
  constructor(private activateRoute: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.name = this.activateRoute.snapshot.paramMap.get("name");
    this.stores = JSON.parse(localStorage.getItem("stores") || "[]");

    for (let i = 0; i < this.stores.length; i++) {
      if (this.stores[i].name == this.name) {
        this.store = this.stores[i];
        break;
      }
    }
  }
  editStore() {
    for (let i = 0; i < this.stores.length; i++) {
      if (this.stores[i].name == this.name) {
        this.stores[i] = this.store;
        break;
      }
    }
    localStorage.setItem("stores", JSON.stringify(this.stores));
    this.router.navigate(["admin"]);
  }

}

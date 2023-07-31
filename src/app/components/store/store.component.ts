import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { editStore } from 'src/app/shared/edit-store';
import { generateId } from 'src/app/shared/generatedId';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  name: any;
  title: string = "Add Store"
  stores: any = [];
  findedStore: any = {};

 




  ngOnInit() {
    // let obj:any;
    this.stores = JSON.parse(localStorage.getItem("stores") || "[]");
    this.name = this.activateRoute.snapshot.paramMap.get("name");
    if (this.name) {

      this.title = "Edit Store";
      this.findedStore = this.stores.find(obj => { return obj.name == this.name });

      
    }
  }

  // match ID
  storeForm: FormGroup;
  // match Obj
  store: any = {};

  // methode add new match
  addStore() {
    if (this.name) {
      editStore()
    } else {

      this.store.id = generateId(this.stores)
      this.stores.push(this.store)
      localStorage.setItem("stores", JSON.stringify(this.stores));
    }
  }



}

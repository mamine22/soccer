//Function generate ID
export function editStore() {

    for (let i = 0; i < this.stores.length; i++) {
        if (this.stores[i].name == this.name) {
          this.stores[i] = this.store;
          break;
        }
      }
      localStorage.setItem("stores", JSON.stringify(this.stores));
      this.router.navigate(["admin"]);
  }
  
  
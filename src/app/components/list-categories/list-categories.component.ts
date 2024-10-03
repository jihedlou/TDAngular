import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { Categorie } from 'src/app/Models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  title : string ='';

  categories : Categorie[] =[
    {"id":1,
      "title":"Grand électroménager",
      "image":"assets/images/img1.jpg", description:"is simply dummy text of the printing and typesetting industry.",
      "available":true},

      {"id":2,
        "title":"Petit électroménager",
      "image":"assets/images/img2.jpg", description:"jjdjjd dkdjd xt of the printing and typesetting industry.",
      "available":true},

      {"id":3,
        "title":"Produits informatiques",
      "image":"assets/images/lec.jpg", "description":"is simply dummy text of the printing and typesetting industry.",
      "available":true},

      {"id":4,
        "title":"Smart Phones", "image":"assets/images/tel.jpg",
      description:"is simply dummy text of the printing and typesetting industry.", 
      "available":true},

      {"id":5,
        "title":"TV, images et son",
      "image":"assets/images/tv.jpg", description:"is simply dummy text of the printing and typesetting industry.",
      "available":true},

      {"id":6,
        "title":"Produits voiture", "image":"assets/images/pro.jpg",
      description:"is simply dummy text of the printing and typesetting industry.","available":false},
      ];
      affichedescription(id:number){
        //foreach
        this.categories.forEach(element => {
          if(element.id ==id){
            alert(element.description)
          }
          
      })
      // filter 
      let category = this .categories.filter(element => element.id == id)[0]
      alert(category.description);

    }

  
}

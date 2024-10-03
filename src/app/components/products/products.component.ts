import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  price: number = 0;
  listProducts: Product[] = [
    {
      id: 1,
      name: 'Refrigérateur LG Inox',
      image: 'assets/images/3.png',
      categoryId: 1,
      description: '',
      price: 2800,
      brand: 'LG',
      promotion: 0,
      nb_likes: 0,
    },
    {
      id: 2,
      name: 'Refrigérateur Samsung Blanc',
      image: 'assets/images/img2.jpg',
      categoryId: 1,
      description: '',
      price: 2400,
      brand: 'Samsung',
      promotion: 0,
      nb_likes: 0,
    },
    {
      id: 3,
      name: 'Lave vaisselle Beko',
      image: 'assets/images/3.png',
      categoryId: 1,
      description: '',
      price: 1875,
      brand: 'BEKO',
      promotion: 0,
      nb_likes: 0,
    },
    {
      id: 4,
      name: 'Oppo Smart Phone',
      image: 'assets/images/22.png',
      categoryId: 4,
      description: '',
      price: 1200,
      brand: 'OPPO',
      promotion: 0,
      nb_likes: 0,
    },
    {
      id: 5,
      name: 'Hachoir',
      image: 'assets/images/11.png',
      categoryId: 2,
      description: '',
      price: 120,
      brand: 'Moulinex',
      promotion: 0,
      nb_likes: 0,
    },
    {
      id: 6,
      name: "TV 50'' LG",
      image: 'assets/images/22.png',
      categoryId: 5,
      description: '',
      price: 1800,
      brand: 'LG',
      promotion: 0,
      nb_likes: 0,
    },
  ];
 
  id!: number;
  
  constructor (private activated: ActivatedRoute){
    this.id= this.activated.snapshot.params['id'];

    //premiere methode d'afficher id
    console.log('Snapshot method :')
    console.log(this.activated.snapshot.params['id']);

    //deuxiéme  methode d'afficher id
    console.log("params : ")
    this.activated.params.subscribe({
      next: (param)=>console.log(param['id'])
    })
    
 //troisiéme methode d'afficher id
    console.log("paramsMap : ")
    this.activated.paramMap.subscribe({
      next: (param)=>console.log(param.get('id'))
    })

   
    
       


  }

}

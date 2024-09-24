import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color="blue"
  titre: string="hello";
  persone={
    id:1,
    name:"jihed",
    age:22

  }
  quantity=7;
  imgsrc = "/assets/testt.jpg"
  height = 200;
  width =  200;
  Acheter(){
    this.quantity --;
  }
  onInputChange(event: Event){
    const el = event.target as HTMLInputElement
    this.color = el.value
  }


}

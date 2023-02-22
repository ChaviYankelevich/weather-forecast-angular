import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-forcast';
  routeUrl = `https://localhost:7086/api/Weather3Days/GetWeather`;
  data:any;
  city:string;
  flag:boolean=false;
  w:any[]=[];

  constructor(public http:HttpClient) { 
    
  
   
  
  }
  getWeather() {
    return this.http.get<any>(`${this.routeUrl}/${this.city}`);
  }
  save(form){
  this.getWeather().subscribe(r => {
      this.data = r;

          this.w=this.data.forecast.forecastday
      console.log(this.w)
    })
      this.flag=true;
    }
 
}

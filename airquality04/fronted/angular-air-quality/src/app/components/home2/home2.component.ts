import { Component, OnInit } from '@angular/core';
import { Aqi } from 'src/app/models/aqi.model';
import { AqiService } from 'src/app/services/aqi.service';
import { AqiFromThirdPartyService } from 'src/app/models/aqi.model';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  aqi: any;
  date: Date;
  lockButton: Boolean;

  constructor(private aqiService: AqiService) {
    this.aqi = 'Sin datos';
    this.lockButton = false;
    this.date = new Date();
  }

  ngOnInit(): void {
    console.log("Ey! inicié!");
  }

  getAQI(): void{
    this.lockButton=true;
    this.aqiService.consultarAQIDesdeElServidorBackend(6232).subscribe((data)=>{
      //this.aqi = (data as any).aqiFromThirdPartyService.aqi
      let dataConvertida: Aqi = data as Aqi
      console.log(dataConvertida)
      this.aqi = Number(dataConvertida.aqiFromThirdPartyService.aqi)
      this.date = new Date();
      this.lockButton=false;
    })
  }

}

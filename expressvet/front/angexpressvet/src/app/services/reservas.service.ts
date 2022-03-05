import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  readonly URL_API = this.config.getConfig().backend.url

  constructor(private config :ConfigService, private http: HttpClient) { }

  create(data: any){
    return this.http.post(this.URL_API + '/reservas',data)
  }


}

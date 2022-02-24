import { Injectable } from '@angular/core';
import { configuration } from '../components/configuration/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config = configuration

  constructor() { }

  getConfig(){
    return this.config
  }
}
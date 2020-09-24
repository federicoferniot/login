import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private baseUrl = "https://restcountries.eu/rest/v2/region"

  constructor(private http: HttpClient) { }

  getRegion(region){
    return this.http.get(this.baseUrl+`/${region}`);
  }
}

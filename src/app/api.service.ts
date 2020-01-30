import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { News } from './news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlBase: string = 'http://localhost:8080/test/api/v1';
  constructor(private http: HttpClient) { }

  /**
   * Obtiene las noticias desde el servicio local
   */
  getNews(): Observable<HttpResponse<News[]>> {
    return this.http.get<News[]>(this.urlBase + '/news', { observe: 'response' });
  }

  /**
   * Elimina el feed
   * @param _id - Identificador de la noticia
   */
  removeNews(_id:string) {
    return this.http.get<News[]>(this.urlBase + '/news/' + _id, { observe: 'response' });
  }
}

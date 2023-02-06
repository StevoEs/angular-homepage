import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PythonAnywhereService {
  private host = 'www.pythonanywhere.com';
  private username = 'StevoEs';
  private token = '1e8c5422c1e77836fdbf462ce6c98849752c9dd8';

  constructor(private http: HttpClient) {}


  getCpuData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${this.token}`
    });
    return this.http.get<any>(
      `https://${this.host}/api/v0/user/${this.username}/cpu/?format=json`,
      { headers }
    );
  }
}

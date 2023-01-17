import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  getDatabases(): Observable<string[]>{
    const query = 'SELECT schema_name FROM information_schema.schemata WHERE schema_name = Produkte';
    return this.http.post<string[]>('/api/query', { query });
  }
}

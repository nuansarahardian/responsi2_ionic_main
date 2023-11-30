import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private apiURL(): string {
    return 'http://localhost/api_responsi';
  }

  tambah(data: any, endpoint: string): Observable<any> {
    console.log('Mengirim permintaan tambah:', data);
    return this.http.post(`${this.apiURL()}/${endpoint}`, data);
  }

  edit(data: any, endpoint: string): Observable<any> {
    return this.http.put(`${this.apiURL()}/${endpoint}`, data);
  }

  tampil(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiURL()}/${endpoint}`);
  }

  hapus(id: any, endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiURL()}/${endpoint}/${id}`);
  }

  lihat(id: any, endpoint: string): Observable<any> {
    return this.http.get(`${this.apiURL()}/${endpoint}/${id}`);
  }
}
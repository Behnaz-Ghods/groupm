import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'http://localhost:4200/api/passwords'; 

  constructor(private http: HttpClient) { }

  // Add a password
  addPassword(passwordData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, passwordData);
  }

  // Get all passwords
  getPasswords(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a single password by id
  getPasswordById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // Update a password
  updatePassword(passwordData: any): Observable<any> {
    const url = `${this.apiUrl}/${passwordData.id}`;
    return this.http.put<any>(url, passwordData);
  }

  // Delete a password
  deletePassword(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}

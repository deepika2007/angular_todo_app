import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  addTodo(title: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/todos`, { title });
  }

  getTodos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/todos`);
  }

  getByIdTodo(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/todos/${id}`);
  }

  updateTodo(id: string, title: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/todos/${id}`, { title });
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/todos/${id}`);
  }
}

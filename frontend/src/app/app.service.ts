import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DialogData } from './dialog/dialog.interface';

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

  updateTodo(id: string, todo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/todos/${id}`, todo);
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/todos/${id}`);
  }

  todoReminder(payload: DialogData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reminder`, payload);
  }
}

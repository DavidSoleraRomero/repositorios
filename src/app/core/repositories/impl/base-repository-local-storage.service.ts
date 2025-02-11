// src/app/repositories/impl/base-repository-http.service.ts
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IBaseRepository } from '../intefaces/base-repository.interface';
import { PEOPLE_API_URL } from '../repository.tokens';

@Injectable({
  providedIn: 'root'
})
export class BaseRepositoryLocalStorageService<T> implements IBaseRepository<T> {

  protected baseList: T[] = [];
  protected apiUrl:string='';
  constructor(
    protected http: HttpClient,
    @Inject(PEOPLE_API_URL) apiUrl: string // URL base de la API para el modelo
  ) {
    this.apiUrl = apiUrl;
    let data = localStorage.getItem("data")
    let parsed: T[] = [];
    if (data != null) parsed = JSON.parse(data);
    else this.http.get<T[]>(`${this.apiUrl}`).subscribe({
      next(dataList: any) {
          parsed = dataList;
          localStorage.setItem(
            "data",
            JSON.stringify(dataList)
          )
      },
      error(err) {
          console.error(err);
      },
    })
    this.baseList = parsed;
  }

  getAll(): Observable<T[]> {
    return new Observable<T[]>((observer) => {
      observer.next(this.baseList);
      observer.complete();
    });
  }

  getById(id: string): Observable<T | null> {
    return this.http.get<T>(`${this.apiUrl}/${id}`);
  }

  add(entity: T): Observable<string> {
    return new Observable<string>(observer => {
      this.baseList
    });
  }

  update(id: string, entity: T): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, entity);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

// src/app/repositories/impl/base-repository-http.service.ts
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IBaseRepository } from '../intefaces/base-repository.interface';
import { PEOPLE_API_URL } from '../repository.tokens';
import { Person } from '../../models/person.model';
import { BaseRepositoryHttpService } from './base-repository-http.service';
import { IPeopleRepository } from '../intefaces/people-repository.interface';


@Injectable({
  providedIn: 'root'
})
export class PeopleRepositoryHttpService extends BaseRepositoryHttpService<Person> implements IPeopleRepository {

  constructor(
    http: HttpClient,
    @Inject(PEOPLE_API_URL) apiUrl: string // URL base de la API para el modelo
  ) {
    super(http, apiUrl)
  }

  findByName(name: string): Observable<Person> {
    return of({
      id: "1",
      name: name,
      surname: "Solera Romero",
      age: 18,
      createdAt: "",
      updatedAt: ""
    });
  }
  
}

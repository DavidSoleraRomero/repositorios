// src/app/services/impl/people.service.ts
import { Injectable, Inject } from '@angular/core';
import { BaseService } from './base-service.service';
import { IPeopleRepository } from '../../repositories/intefaces/people-repository.interface';
import { IPeopleService } from '../interfaces/people-service.interface';
import { Person } from '../../models/person.model';
import { PEOPLE_REPOSITORY_TOKEN } from '../../repositories/repository.tokens';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends BaseService<Person> implements IPeopleService {
  constructor(
    @Inject(PEOPLE_REPOSITORY_TOKEN) repository: IPeopleRepository
  ) {
    super(repository);
    console.log(repository);
    repository.add({
      id: "1",
      name: "",
      surname: "",
      createdAt: "",
      updatedAt: "",
      age: 18
    });
  }

  findByName(name: string): Observable<Person> {
    console.log(name + " es jardinero");
    return of({
      id: "1",
      name: "",
      surname: "",
      createdAt: "",
      updatedAt: "",
      age: 18
    })
  }

  // Implementa métodos específicos si los hay
}

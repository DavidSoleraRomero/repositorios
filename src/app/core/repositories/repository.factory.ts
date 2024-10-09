// src/app/repositories/repository.factory.ts
import { FactoryProvider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRepositoryHttpService } from './impl/base-repository-http.service';
import { IBaseRepository } from './intefaces/base-repository.interface';
import { Person } from '../models/person.model';
import { PEOPLE_API_URL, PEOPLE_REPOSITORY_TOKEN } from './repository.tokens';
import { BaseRepositoryLocalStorageService } from './impl/base-repository-local-storage.service';
// Importa otros modelos según sea necesario

export function createRepository<T>(http: HttpClient, apiUrl: string, backend: string): IBaseRepository<T> {
  switch (backend) {
    case "API":
      return new BaseRepositoryHttpService<T>(http, apiUrl);
    case "LocalStorage":
      return new BaseRepositoryLocalStorageService<T>(http, apiUrl);
    default:
      throw Error("Bum");
  }
}

// Ejemplo de configuración para People
export const PeopleRepositoryFactory: FactoryProvider = {
  provide: PEOPLE_REPOSITORY_TOKEN,
  deps: [HttpClient, PEOPLE_API_URL, 'API'],
  useFactory: (http: HttpClient, apiURL:string, backend: string) => {
    return createRepository<Person>(http, apiURL, backend);
  },
};

// Repite esto para otros modelos como Usuario, etc.

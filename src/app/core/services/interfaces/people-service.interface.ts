// src/app/services/interfaces/people.service.interface.ts
import { Observable } from 'rxjs';
import { Person } from '../../models/person.model';
import { IBaseService } from './base-service.interface';

export interface IPeopleService extends IBaseService<Person> {
  findByName(name: string): Observable<Person>;
}

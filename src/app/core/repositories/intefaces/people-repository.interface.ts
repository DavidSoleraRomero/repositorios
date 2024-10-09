// src/app/core/repositories/interfaces/people-repository.interface.ts
import { Observable } from "rxjs";
import { Person } from "../../models/person.model";
import { IBaseRepository } from "./base-repository.interface";

export interface IPeopleRepository extends IBaseRepository<Person>{
    findByName(name: string): Observable<Person>;
}
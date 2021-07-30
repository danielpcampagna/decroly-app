import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export abstract class IService<T> {
  protected path: string = '';

  constructor(protected http: HttpClient) { }

  public get    = (id?: string | number) => this.http.get<T[]>(!id ? this.path : `${this.path}/${id}`);
  public post   = (body: T) => this.http.post(this.path, body);
  public put    = (id: string | number, body: Partial<T>) => this.http.put(`${this.path}/${id}`, body);
  public patch  = (id: string | number, body: Partial<T>) => this.http.patch(`${this.path}/${id}`, body);
  public delete = (id: string | number) => this.http.delete(`${this.path}/${id}`);
}

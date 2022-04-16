import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Advice } from "../model/advice";

@Injectable({
  providedIn: 'root'
})
export class AdviceServiceService {
  private readonly API = environment.api

  constructor(private http: HttpClient) {}

  getAdvice(): Observable<Advice> {
    return this.http.get<Advice>(this.API)
  }
}

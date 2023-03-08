import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({  providedIn: 'root' })
export class HttpClientService {
  private httpClient = inject(HttpClient)

  public hello() {
    return this.httpClient.get('/api/v1/hello')
  }
}

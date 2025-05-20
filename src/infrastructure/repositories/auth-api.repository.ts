import { Injectable } from '@angular/core';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../domain/entities/user.entity';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthApiRepository implements AuthRepository {
  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string): Observable<User> {
    return this.http
      .post<User>('https://dummyjson.com/auth/login', { username, password })
      .pipe(
        map((response: any) => ({
          id: response.id,
          username: response.username,
          email: response.email,
          firstName: response.firstName,
          lastName: response.lastName,
          gender: response.gender,
          image: response.image,
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        }))
      );
  }

  logout(): Observable<void> {
    return this.http.post<void>('https://dummyjson.com/auth/logout', {});
  }
}

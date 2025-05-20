import { Injectable } from '@angular/core';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { User } from '../../domain/entities/user.entity';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginUseCase {
  constructor(private authRepo: AuthRepository) {}

  login(username: string, password: string): Observable<User> {
    return this.authRepo.login(username, password);
  }
}

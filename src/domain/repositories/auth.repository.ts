import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

export abstract class AuthRepository {
  abstract login(email: string, password: string): Observable<User>;
  abstract logout(): Observable<void>;
}

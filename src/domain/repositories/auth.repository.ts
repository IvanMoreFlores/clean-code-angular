import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

export abstract class AuthRepository {
  abstract login(username: string, password: string): Observable<User>;
  abstract logout(): Observable<void>;
}

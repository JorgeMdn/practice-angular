import { SessionToken } from '../models';
import { LocalStorage } from './local-storage';

export class Auth {
  private static SESSION = 'session';

  static getSession(): SessionToken | null {
    return LocalStorage.get(Auth.SESSION);
  }

  static login(session: SessionToken): void {
    LocalStorage.set(session, Auth.SESSION);
  }

  static logout(): void {
    LocalStorage.delete(Auth.SESSION);
  }

  static checkSession(): boolean {
    const session = Auth.getSession();
    return session !== null;
  }

  static getToken(): string {
    return Auth.getSession().token;
  }
}

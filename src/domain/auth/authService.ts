import { authAPI } from '../../data/auth/authAPI.ts'
import { Auth } from './auth.ts'

export class AuthService {
  async login(identity: string, password: string): Promise<Auth> {
    return await authAPI.login(identity, password)
  }
}

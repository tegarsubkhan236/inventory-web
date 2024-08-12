import axiosClient from '../../core/axios.ts'
import { AxiosResponse } from 'axios'
import { Auth } from '../../domain/auth/auth.ts'

export const authAPI = {
  async login(identity: string, password: string): Promise<Auth> {
    const response: AxiosResponse = await axiosClient().post('/api/v1/auth/login', {
      identity,
      password,
    })
    console.log(response.data)
    return response.data
  },
}

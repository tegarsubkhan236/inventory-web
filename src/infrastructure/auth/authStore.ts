import { create, StateCreator } from 'zustand'
import { AuthService } from '../../domain/auth/authService.ts'
import { Auth } from '../../domain/auth/auth.ts'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AuthState {
  token: string | null
  login: (username: string, password: string) => Promise<void>
}

interface BearSlice {
  bears: number
  addBear: () => void
  eatFish: () => void
}

interface FishSlice {
  fishes: number
  addFish: () => void
}

interface SharedSlice {
  addBoth: () => void
  getBoth: () => void
}

const createBearSlice: StateCreator<BearSlice & FishSlice, [], [], BearSlice> = set => ({
  bears: 0,
  addBear: () => set(state => ({ bears: state.bears + 1 })),
  eatFish: () => set(state => ({ fishes: state.fishes - 1 })),
})

const createFishSlice: StateCreator<BearSlice & FishSlice, [], [], FishSlice> = set => ({
  fishes: 0,
  addFish: () => set(state => ({ fishes: state.fishes + 1 })),
})

const createSharedSlice: StateCreator<BearSlice & FishSlice, [], [], SharedSlice> = (set, get) => ({
  addBoth: () => {
    // you can reuse previous methods
    get().addBear()
    get().addFish()
    // or do them from scratch
    // set((state) => ({ bears: state.bears + 1, fishes: state.fishes + 1 })
  },
  getBoth: () => get().bears + get().fishes,
})

const useBoundStore = create<BearSlice & FishSlice & SharedSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createSharedSlice(...a),
}))

export const useAuthStore = create<AuthState>()(
  persist(
    set => {
      const authService = new AuthService()

      return {
        token: null,
        login: async (username: string, password: string) => {
          try {
            const data: Auth = await authService.login(username, password)
            set({ token: data.token })
          } catch (error: unknown) {
            if (error instanceof Error) {
              console.error('Error during login:', error.message)
              throw new Error(error.message)
            } else {
              console.error('Unknown error during login:', error)
              throw new Error('Unknown error during login')
            }
          }
        },
      }
    },
    {
      name: 'TOKEN_KEY',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ token: state.token }),
    }
  )
)

import 'next-auth'

declare module 'next-auth' {
  interface User {
    _id: string
    isAdmin: boolean
  }
  interface Session {
    user: User & {
      _id: string
      isAdmin: boolean
    }
  }
} 
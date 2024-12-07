import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { auth } from '@/lib/auth'
import ClientProviders from './ClientProvider'

export default async function Providers({
    children,
  }: {
    children: React.ReactNode
  })
   {
    const session = await auth()
    return (
      <SessionProvider session={session}>
      <ClientProviders>
        {children}
      </ClientProviders>
      </SessionProvider>
    )
  }
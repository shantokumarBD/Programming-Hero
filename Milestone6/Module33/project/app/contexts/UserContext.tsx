'use client'
import React, { createContext, ReactNode } from 'react'

export const UserContext = createContext({})

const UserProvider = ({children}: {children: ReactNode}) => {
  return (
    <UserContext.Provider value={'dark'}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
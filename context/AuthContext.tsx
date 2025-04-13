'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Placeholder for future Supabase or Web3 auth
  }, [])

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
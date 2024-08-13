// src/components/FirebaseAuthSync.js
'use client'
import { useAuth } from '@clerk/nextjs'
import { signInWithCustomToken } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from '@/firebase-config'

const FirebaseAuthSync = () => {
  const { getToken, userId } = useAuth()

  useEffect(() => {
    const signIntoFirebase = async () => {
      if (userId) {
        try {
          const token = await getToken({ template: 'integration_firebase' })
          const userCredentials = await signInWithCustomToken(auth, token || '')
        } catch (error) {
          console.error('Error authenticating with Firebase:', error)
        }
      }
    }

    signIntoFirebase()
  }, [userId])

  return null
}

export default FirebaseAuthSync

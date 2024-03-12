import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import '@ui/styles/globals.css'

export const metadata: Metadata = {
  title: 'MALAN UI',
  description: 'Generated by create next app'
}

export default function ({ children }: PropsWithChildren) {
  return children
}
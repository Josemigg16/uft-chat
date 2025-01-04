'use client'
import { useState } from 'react'

export default function Home() {
  const [hola] = useState('hola mundo')
  return <h1>{hola}</h1>
}

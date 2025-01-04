'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [hola, setHola] = useState('hola mundo')
  return <h1>{hola}</h1>
}

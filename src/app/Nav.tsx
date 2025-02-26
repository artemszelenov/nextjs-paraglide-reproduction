'use client'
import Link from "next/link";
import { localizeHref } from '@/paraglide/runtime'

export function Nav() {
  return (
    <nav style={{ margin: 50, fontWeight: 700 }}>
      <em style={{ display: 'block', marginBottom: 10 }}>Client side nav component: </em>
      <Link href={localizeHref('/')} style={{ textDecoration: 'underline' }}>Go to home</Link>
    </nav>
  )
}

'use client';

import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Logo = () => {
  const pathname = usePathname()
  const isGitHub = pathname.startsWith('/evento')
  const prefix = isGitHub ? '/evento' : ''

  return (
    <Image
      src={`${prefix}/evento/evento.png`}
      alt="EVENTO logo"
      width={53}
      height={12}
    />
  )
}

export default Logo
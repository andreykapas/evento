import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src="/evento.png"
      alt="EVENTO logo"
      width={53}
      height={12}
    />
  )
}

export default Logo
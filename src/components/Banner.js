import Image from 'next/image'
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="banner"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default Banner

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
      <div className='absolute left-36 sm:left-[45%] bottom-24 sm:bottom-32 text-center'>
        <h3 className='mb-2'>Not sure where to go? Perfect.</h3>
        <button className='p-3 bg-slate-300 text-lime-100 rounded-lg'>I&apos;m flexible</button>
      </div>
    </div>
  )
}

export default Banner

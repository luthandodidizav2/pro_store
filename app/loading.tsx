import Image from "next/image"
import loader from '@/assets/loader.gif'



const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-[100vw]">
        <Image className="" src={loader} alt="loading-icon" width={180} height={180} />
    </div>
  )
}

export default loading
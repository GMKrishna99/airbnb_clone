'use client'
import Image from "next/image"
import AvatarImage from '../../public/images/placeholder.jpg'

interface AvatarProps{
    src: string | null | undefined
}
const Avatar:React.FC<AvatarProps> = ({
    src
}) =>{
    return(
        <Image
        alt="Avatar"
        src={src || AvatarImage}
        className="rounded-full"
        height="30"
        width="30"
        />
    )
}
export default Avatar
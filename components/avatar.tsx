"use client"

import Image from "next/image"
import MotionTransition from "./transition-component"

const avatar = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
      <Image src="/avatar-1.png" alt="Avatar" width={350} height={350} className="w-full h-full" />
    </MotionTransition>
  )
}

export default avatar
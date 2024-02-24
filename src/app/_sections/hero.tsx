import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div
        style={{ background: "url(home-hero.svg)", height: "735px" }}
        className="p-8"
      >
        <div className="h-full w-full  flex flex-col-reverse">
          <div className="flex justify-between items-center gap-2">
            <p className="text-white whitespace-nowrap text-lg font-medium">
              230 children & women under our care
            </p>
            <div className="w-full bg-[#e5e5e550] h-1 rounded-sm" />
            <p className="text-white whitespace-nowrap text-lg font-medium">
              58 donations collected
            </p>
          </div>
          <div className="mb-80 flex gap-3">
            <Button variant="tertiary">What we do</Button>
            <Button variant="destructive" className="flex gap-2">
              {" "}
              <Image src="play.svg" width={24} height={24} alt="play" /> Play
              Video
            </Button>
          </div>
          <p className="mb-14 w-2/5 text-white font-bold text-6xl">
            Inclusive care for children with special needs
          </p>
        </div>
      </div>
  )
}

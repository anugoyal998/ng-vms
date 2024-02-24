import { Button } from '@/components/ui/button'
import { MoveRightIcon } from "lucide-react"
import React from 'react'

const event_info = [
  {
    date:'13 APR',
    name:'A day with our wonderful children'
  }
]
const Events = () => {
  return (
    <div>
      <div className='flex '>

      <p className='text-4xl whitespace-nowrap'>Our Events</p>
      <div className="bg-gray-300 h-[2px] w-full mt-5 ml-2" />
      </div>
      <div className='pt-10 flex gap-10 pb-10 '>
        <EventCards {...event_info[0]}/>
        <EventCards {...event_info[0]}/>
      </div>
    </div>
  )
}

const EventCards = ({date,name}:{date:string,name:string}) => {
  return (
    <div className='rounded-xl bg-[#f2c94c] w-1/2 pl-10 pb-10'>
      <div className='flex pt-7 ' >
        <p className='text-5xl font-bold pl-4'>{date}</p>
        <div className='flex flex-col'>
          <p className='font-bold flex'>Next Events
          <div className="bg-black h-[2px] w-10 mt-3 ml-2" />
          </p>
          
          <p className='text-2xl font-bold'>{name}</p>
        </div>
        <div className='pr-10'>
        <Button className='h-14 w-14 rounded-full' variant="tertiary"><MoveRightIcon/></Button>
        </div>
      </div>
    </div>
  )
}
export default Events

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Key } from "lucide-react";
const employee_data= [
    {
        image:"employee.svg",
        name:"Leonardo John Davies",
        position:"Cofouder, CEO",
        fb:"facebook",
        x:"twitter",
        linkedin:"linkedin",
    },
    {
      image:"employee.svg",
      name:"Leonardo John Davies",
      position:"Cofouder, CEO",
      fb:"facebook",
      x:"twitter",
      linkedin:"linkedin",
  },
  {
    image:"employee.svg",
    name:"Leonardo John Davies",
    position:"Cofouder, CEO",
    fb:"facebook",
    x:"twitter",
    linkedin:"linkedin",
},
{
  image:"employee.svg",
  name:"Leonardo John Davies",
  position:"Cofouder, CEO",
  fb:"facebook",
  x:"twitter",
  linkedin:"linkedin",
},
{
  image:"employee.svg",
  name:"Leonardo John Davies",
  position:"Cofouder, CEO",
  fb:"facebook",
  x:"twitter",
  linkedin:"linkedin",
},
{
  image:"employee.svg",
  name:"Leonardo John Davies",
  position:"Cofouder, CEO",
  fb:"facebook",
  x:"twitter",
  linkedin:"linkedin",
},
{
  image:"employee.svg",
  name:"Leonardo John Davies",
  position:"Cofouder, CEO",
  fb:"facebook",
  x:"twitter",
  linkedin:"linkedin",
},
]
const MeetOurTeam = () => {
  return (
    <div>

    <div className="flex justify-center flex-col items-center">
      <h1 className="text-5xl font-bold ">Meet Our Team</h1>
      <p className="w-1/3 pt-6 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor alias
        vitae beatae provident
      </p>
    </div>
    <div className="flex justify-between flex-wrap gap-7 pt-20">
      {
        employee_data.map((employee,index) => {
          return (
            <TeamMember key={`teammember-${index}`} {...employee}/>
          )
        })
      }
        
    </div>
    </div>
  );
};

export default MeetOurTeam;

const TeamMember = ({image,name,position,fb,x,linkedin}:{image:string,name:string,position:string,fb:string,x:string,linkedin:string}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={image} height={320} width={296} alt=""/>
      <span className="text-md font-bold pt-2">{name}</span>
      <span className="text-sm pt-2">{position}</span>
      <div className="flex justify-center gap-2 pt-2">

      <Link className="text-sm" href={fb}>fb </Link>
      <Link className="text-sm" href={x}>x</Link>
      <Link className="text-sm" href={linkedin}>linkedin</Link>
      </div>
      
    </div>
  )
}


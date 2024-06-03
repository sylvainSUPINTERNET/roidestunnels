"use client";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, RadioGroup, Radio, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import React from "react";
import ThreeScene from "./components/ThreeScene";
import {Image} from "@nextui-org/react";
import { CiDollar } from "react-icons/ci";
import { FaCannabis } from "react-icons/fa";

export default function Home() {

  const [selectedKeys, setSelectedKeys]: any = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (

    <div className="container mx-auto">
      <div className="p-2 text-center mt-[1em]">
        <h1 className="text-4xl md:text-8xl font-extrabold leading-tight">CBD Livraison express</h1>
        <div>
          <p className="text-md md:text-4xl text-slate-500 mt-5 font-medium leading-tight">Faites vous livrer vos produits CBD en 1h</p>
        </div>
      </div>
      <div>
      </div>
    
      
      <div className="flex items-center justify-center center-content mt-5">
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <CardHeader className="absolute z-10 top-0 flex-col !items-start isolate bg-gradient-to-r from-indigo-500/60 via-purple-500/60 to-pink-500/60 shadow-lg ">
                <div>
                  <h4 className="text-black uppercase font-bold">Moon Rock</h4>
                  <p className="text-black font-bold text-tiny">
                    <CiDollar size={40} color="yellow"></CiDollar>
                  </p>
                </div>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://www.budsking.com/cdn/shop/products/cbdmoonrocks2_1200x1200.png?v=1667218347"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 ">
                <div className="w-full flex justify-center items-center">
                  <p className="text-black text-medium flex space-x-1 items-center">
                    <FaCannabis color={"#48e08a"} size={34}/>
                    <span>0.3%</span>
                  </p>
                </div>
                <Button className="bg-black w-full " color="primary" radius="full" size="sm">
                  Ajouter
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <CardHeader className="absolute z-10 top-0 flex-col !items-start isolate bg-gradient-to-r from-indigo-500/60 from-10% via-sky-500/60 via-30% to-emerald-500/60 to-90% shadow-lg ">
                <h4 className="text-black uppercase font-bold">OG Kush</h4>
                <p className="text-black font-bold text-tiny">Green-House FRANCE</p>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://leafly-cms-production.imgix.net/wp-content/uploads/2017/11/12113733/moon-rocks-1.jpg"
              />
               <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Available soon.</p>
                  <p className="text-black text-tiny">Get notified.</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  Notify Me
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-0 flex-col !items-start isolate bg-gradient-to-r from-amber-500/60 to-pink-500/60 shadow-lg ">
                <h4 className="text-black uppercase font-bold">Gelato</h4>
                <p className="text-black font-bold text-tiny">Green-House FRANCE</p>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://www.davidvanille.com/5181-large_default/fleurs-de-cbd-gelato.jpg"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Available soon.</p>
                  <p className="text-black text-tiny">Get notified.</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  Notify Me
                </Button>
              </CardFooter>
            </Card>

            {/* <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                <h4 className="text-black font-medium text-2xl">Acme camera</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://nextui.org/images/card-example-6.jpeg"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Available soon.</p>
                  <p className="text-black text-tiny">Get notified.</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  Notify Me
                </Button>
              </CardFooter>
            </Card>

            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src="https://nextui.org/images/card-example-5.jpeg"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-10 h-11 bg-black"
                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">Breathing App</p>
                    <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                  </div>
                </div>
                <Button radius="full" size="sm">Get App</Button>
              </CardFooter>
            </Card> */}


        </div>
      </div>
      
    </div>

  );
}

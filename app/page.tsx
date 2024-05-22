"use client";

import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, RadioGroup, Radio, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import React from "react";
import ThreeScene from "./components/ThreeScene";

export default function Home() {

  const [selectedKeys, setSelectedKeys]: any = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (

    <div>
      <ThreeScene width={1000} height={1000}></ThreeScene>
    </div>


    // <main className="mx-auto container bg-gradient-to-r from-transparent from-0% via-white to-green-100">
    //   <div className="flex justify-around bg-red-600">
    //       {      
    //         [1,2,3].map( (item, index) => {
    //             return ( 
    //               <Card
    //                 key={index}
    //                 isBlurred
    //                 className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
    //                 shadow="sm">
    //                   <CardHeader>
    //                     <p>Head</p>
    //                   </CardHeader>
    //                   <CardBody>
    //                     <p>Body</p>
    //                   </CardBody>
    //                   <CardFooter>
    //                     <p>Footer</p>
    //                   </CardFooter>
    //               </Card>
    //             )
    //         })
    //       }    
    //   </div>
    //   </main>
  );
}

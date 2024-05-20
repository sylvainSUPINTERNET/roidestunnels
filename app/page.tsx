"use client";

import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, RadioGroup, Radio, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import React from "react";

export default function Home() {

  const [selectedKeys, setSelectedKeys]: any = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <main className="mx-auto container">
      {/* <div className="mt-5 ml-3 text-4xl font-extrabold leading-tight text-slate-700">
      </div> */}

      <div className="mb-5 mt-5">
        <div>
          <h2 className="text-black font-extrabold leading-tight text-4xl text-slate-700">Nos fleurs CBD</h2>
        </div>
      </div>


      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {
            [1,2,3].map((i) => {
              return (
                <div className="justify-self-stretch" key={i}>
                <Card
                    style={{"backgroundImage": "url('/holo1.jpg')"}}
                    isFooterBlurred
                    radius="lg"
                    className="border-none bg-center bg-no-repeat bg-cover shadow-lg"
                  >

                    <CardHeader className="h-[15%] justify-between bg-black/60 before:bg-white/10 border-black/10 border-1 overflow-hidden absolute before:rounded-xl rounded-t-large top-0 w-full shadow-small  z-10">
                      <p className="text-lg font-extrabold leading-tight text-white/80">Le nom est ici</p>
                    </CardHeader>
      
                    <div className="flex justify-center items-center">
                      <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        src="/fleur1.png"
                        width={700}
                        height={700}
                      />
                    </div>
                      
                    <CardFooter className="h-[25%] bg-black/60 before:bg-white/10 border-black/10 border-1 overflow-hidden absolute before:rounded-xl rounded-b-large bottom-0 w-full shadow-small  z-10">
                      {/* <p className="text-lg font-extrabold leading-tight text-white/80">Le nom est ici</p> */}
                      

                      <div className="flex space-x-5">
                        <div>
                        <Input
                            type="number"
                            placeholder="0.00"
                            labelPlacement="outside"
                            width={50}
                            startContent={
                              <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">$</span>
                              </div>
                            }
                          />
                        </div>

                        <div>
                          <Dropdown>
                            <DropdownTrigger>
                              <Button 
                                variant="bordered" 
                                className="capitalize"
                              >
                                {selectedValue}
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu 
                              aria-label="Single selection example"
                              variant="flat"
                              disallowEmptySelection
                              selectionMode="single"
                              selectedKeys={selectedKeys}
                              onSelectionChange={setSelectedKeys}
                            >
                              <DropdownItem key="text">Text</DropdownItem>
                              <DropdownItem key="number">Number</DropdownItem>
                              <DropdownItem key="date">Date</DropdownItem>
                              <DropdownItem key="single_date">Single Date</DropdownItem>
                              <DropdownItem key="iteration">Iteration</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>

                        <div>
                          Ajouter
                        </div>
                        
                        
                      </div>


                      {/* <Button className="text-lg text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                        Ajouter
                      </Button> */}
                    </CardFooter>
                  </Card>
                </div>
              )
          }
          )}
        </div>
      </div>



    </main>
  );
}

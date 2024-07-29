"use client";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, RadioGroup, Radio, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import React, { useEffect } from "react";
import ThreeScene from "./components/ThreeScene";
import {Image} from "@nextui-org/react";
import { CiDollar } from "react-icons/ci";
import { FaCannabis, FaCartPlus } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Cookie from 'js-cookie';
import { motion } from 'framer-motion';



export default function Home() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <main className="container mx-auto">

      <div className="flex justify-center mt-10">
        <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass">
                
            <h1 className="mx-6 bg-gradient-to-b from-black/70 to-black bg-clip-text pb-4  text-center text-5xl font-extrabold leading-tight text-transparent  md:!w-full  lg:text-6xl xl:leading-snug">
              Bien Mangé ? Facile !
            </h1>
      
            <p className="mx-6 text-center font-mono text-xl text-slate-500 md:text-2xl">
              Vos repas fraîchement cuisinés pour la semaine
            </p>
         </motion.div>
      </div>



      <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5, ease: "easeOut" }} className="flex mt-3 md:mt-5 md:mb-1">


                <div className="flex flex-col w-full md:flex-row mt-3 md:mt-5 md:mb-1">

                  <div className="w-full md:rounded-l-lg p-2 md:p-6 text-md md:text-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-zinc-800 bg-gradient-to-b from-white via-yellow-50 to-white-50 p-6 rounded-xl font-mono justify-center flex items-center font-extrabold leading-tight ">
                      Livraison 1h Région Parisienne
                    </div>
                    <div className="text-zinc-800 bg-gradient-to-b from-white via-pink-50 to-white-50 p-6 rounded-xl font-mono justify-center flex items-center font-extrabold leading-tight ">
                      Plat sur Mesure
                    </div>
                    <div className="text-zinc-800 bg-gradient-to-b from-white via-red-50 to-white-50 p-6 rounded-xl font-mono justify-center flex items-center font-extrabold leading-tight ">
                      Plat à la Carte
                    </div>
                    <div className="text-zinc-800 bg-gradient-to-b from-white via-green-50 to-white-50 p-6 rounded-xl font-mono justify-center flex items-center font-extrabold leading-tight ">
                      Carte Ticket Restaurent
                    </div>
                  </div>
                  <div className="hidden md:block w-full md:w-2/4">
                    <img src="kek.gif" className="rounded rounded-r-lg shadow-lg w-full h-full object-cover" alt="image"></img>
                  </div>
                </div>

                  
                {/* <div className="flex flex-col w-full md:flex-row mt-3 md:mt-5 md:mb-1">
                  <div className="w-full md:rounded-l-lg p-2 md:p-6 text-md md:text-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 rounded-lg">
                      <div className="bg-zinc-900 p-4 rounded-lg flex items-center justify-center">
                        <p className="ml-2 font-bold text-white ">Livraison express 1h - Paris</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-1 rounded-lg">
                      <div className="bg-zinc-900 p-4 rounded-lg flex items-center justify-center">
                        <p className="ml-2 font-bold text-white">Plat sur mesure</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-lg">
                      <div className="bg-zinc-900 p-4 rounded-lg flex items-center justify-center">
                        <p className="ml-2 font-bold text-white">Plat à la carte</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-lg">
                      <div className="bg-zinc-900 p-4 rounded-lg flex items-center justify-center">
                        <p className="ml-2 font-bold text-white">Carte ticket restaurant</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block w-full md:w-2/4">
                    <img src="kek.gif" className="rounded rounded-r-lg shadow-lg w-full h-full object-cover" alt="image"></img>
                  </div>
                </div> */}

      </motion.div >



      <div className="mt-[0em] md:mt-[0em] p-2">

      <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                          <h2 className="mt-3 mx-6 bg-gradient-to-b from-black/70 to-black bg-clip-text pb-4  text-center text-4xl font-extrabold leading-tight text-transparent  md:!w-full  lg:text-5xl xl:leading-snug">
                Nos Offres
          </h2>
      </motion.div>

      

              <div className="flex flex-col sm:items-center md:flex-row md:space-x-2 md:justify-around">

              <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  className="w-full flex justify-center"
              >

                  <div className="grid gril-cols-1 md:grid-cols-4 gap-4 w-full p-4">

                    {
                      [1,2,3,4].map( (i, idx) => {
                        return (
                          <div className="p-4 rounded bg-white border-2 border-purple-800/60 shadow-2xl shadow-purple-800/10 mb-5" key={idx}>
                          <div className="w-full justify-around">
                              <h3 className=" text-xl md:text-2xl font-extrabold leading-tight text-center">
                                Pack Essentiel
                              </h3>
                          </div>
                          <div>
                              <p className="font-light text-gray-900 sm:text-lg dark:text-gray-400 text-center">
                                  4 repas par semaine
                              </p>
                          </div>
                          <div className="mt-5 mb-5 font-mono font-extrabold leading-tight text-4xl text-center text-blue-500">
                            43.90€
                          </div>
                          <div className="flex p-1">
                            <div className="mr-2">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                </path>
                              </svg>
                            </div>
                            <div className="">
                              Repas customisable
                            </div>
                          </div>

                          <div className="flex p-1">
                            <div className="mr-2">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                </path>
                              </svg>
                            </div>
                            <div className="">
                              Repas à la carte
                            </div>
                          </div>

                          <div className="mt-5 mb-2 flex justify-center">
                          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-zinc-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              JE M'ABONNE
                            </span>
                          </button>
                          </div>
                      </div>
                        )
                      })
                    }

                  </div>
              </motion.div>
              </div>
        </div>
{/* 
        <div className="h-screen w-full bg-white" style={{
        backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px), radial-gradient(ellipse at center, #fff 60%, transparent 100%)`,
        backgroundSize: '16px 16px, cover'}}>

          <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5, ease: "easeOut" }}>
            <h1 className="mx-6 mt-12 bg-gradient-to-b from-black/80 to-black bg-clip-text pb-4  text-center text-5xl font-extrabold leading-tight text-transparent  md:!w-full lg:!mt-20 lg:text-6xl xl:leading-snug">
              Bien Mangé ? Facile !
            </h1>
      
            <p className="mx-6 text-center font-mono text-xl text-slate-600 md:text-xl">
              Vos repas fraîchement cuisinés, livrés pour la semaine !
            </p>
          </motion.div>

          <div className="mt-[5em] flex">
            <div>XD</div>
          </div>

        </div> */}


      
        {/* <div className="mt-[5em] md:mt-[0em] p-2">
              <div className="flex flex-col sm:items-center md:flex-row md:space-x-2 md:justify-around">
                
              <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  className="w-full flex justify-center"
              >
                  <div className="grid gril-cols-1 md:grid-cols-4 gap-4 w-full p-4">

                      <div className="p-4 rounded bg-zinc-900 border-2 border-purple-800/60 shadow-2xl shadow-purple-800/10 mb-5">
                          <div className="w-full justify-around">
                              <h3 className="text-white text-xl md:text-2xl font-extrabold leading-tight">
                                Pack Essentiel
                              </h3>
                          </div>
                          <div>
                              <p className="font-light text-gray-200 sm:text-lg dark:text-gray-400">
                                  4 repas par semaine
                              </p>
                          </div>
                          <div className="mt-5 mb-5 text-white font-mono font-extrabold leading-tight text-4xl">
                            43.90€
                          </div>
                          <div className="flex p-1">
                            <div className="mr-2">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                </path>
                              </svg>
                            </div>
                            <div className="text-white">
                              Repas customisable
                            </div>
                          </div>

                          <div className="flex p-1">
                            <div className="mr-2">
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                </path>
                              </svg>
                            </div>
                            <div className="text-white">
                              Repas à la carte
                            </div>
                          </div>

                          <div className="mt-5 mb-2">
                          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-zinc-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            JE M'ABONNE
                            </span>
                          </button>
                          </div>

                      </div>
                  </div>
              </motion.div>
              </div>
        </div>
 */}



      {/* <div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'blue',
                    margin: '20px'
                }}
            >
                Div 1
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'green',
                    margin: '20px'
                }}
            >
                Div 2
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'red',
                    margin: '20px'
                }}
            >
                Div 3
            </motion.div>
        </div> */}



      {/* <div className="
          h-96     h-full        bg-[url('/bbblurry.svg')] bg-no-repeat bg-center

         bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-100
          ">
            UNFOR
      </div> */}

      {/* <div className="md:flex text-2xl md:justify-around">

        <div className="flex flex-col items-center">

          <div className="mt-2 mb-2">
            <div className="text-4xl md:text-4xl leading-tight">Créez votre propre menu</div>
            <div>
              <img src="https://img.icons8.com/?size=100&id=104302&format=png&color=000000" className="mx-auto"></img>
            </div>
          </div>

          <div className="mt-2 mb-2">
            <div className="text-4xl md:text-4xl leading-tight">Recevez votre box</div>
            <div>
              <img src="https://img.icons8.com/?size=100&id=118939&format=png&color=000000" className="mx-auto"></img>
            </div>
          </div>

          <div className="mt-2 mb-2"> 
            <div className="text-4xl md:text-4xl leading-tight">Modifier ou arrêter</div>
            <div>
              <img src="https://img.icons8.com/?size=100&id=kZR35qNLwxfz&format=png&color=000000" className="mx-auto"></img>
            </div>
          </div>

        </div>


      </div> */}


    </main>
  )

}


// export interface Product {
//     name: string;
//     price: number;
//     image: string;
//     description: string;
// }

// export default function Home() {

//   const [selectedKeys, setSelectedKeys]: any = React.useState(new Set(["text"]));

//   const selectedValue = React.useMemo(
//     () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
//     [selectedKeys]
//   );

//   const [currentProduct, setCurrentProduct] = React.useState<Product>({
//     name: "",
//     description: "",
//     price: 0,
//     image: ""
//   });

//   const [currentProductQuantity, setCurrentProductQuantity] = React.useState<string|null>(null);

//   const {isOpen, onOpen, onOpenChange} = useDisclosure();

//   useEffect(() => {
//     // const value = Cookie.get('key');
//     // console.log("COOKIE", value);
//   }, []);
  

//   return (

//     <div className="container mx-auto">

//       <div className="bg-[url('/main.png')] h-48 w-full bg-no-repeat bg-center">
//       </div>

//       <Modal 
//           isOpen={isOpen} 
//           placement={"center"}
//           onOpenChange={onOpenChange} 
//         >
//           <ModalContent>
//             {(onClose) => (
//               <>
//                 <ModalHeader className="flex flex-col gap-1">{currentProduct.name}</ModalHeader>
//                 <ModalBody>
//                   <div className="flex justify-center">
//                     <Image 
//                           width={160}
//                           height={160}
//                     src={currentProduct.image}>
//                     </Image>
//                   </div>

//                   <div className="flex justify-center">
//                     <Select
//                         label="Poids"
//                         placeholder="Choisissez votre poids"
//                         className="max-w-xs"
//                         onChange={ ( e ) => {
//                           setCurrentProductQuantity(e.target.value);
//                         }}
//                       >
//                         {[{key:"5g",label: "5g"}].map((animal) => (
//                           <SelectItem key={animal.key}>
//                             {animal.label}
//                           </SelectItem>
//                         ))}
//                       </Select>
//                   </div>

//                 </ModalBody>
//                 <ModalFooter>
//                   {/* <Button color="danger" variant="light" onPress={onClose}>
//                     Fermer
//                   </Button> */}
//                   <Button color="primary" onPress={ async () => {
                    

//                     if ( currentProduct && currentProductQuantity && currentProduct !== null && currentProductQuantity !== null ) {

//                       console.log("ADD TO CART", currentProduct, currentProductQuantity);

//                       if ( !Cookie.get("roidestunnels_cart") ) {
                        

//                         Cookie.set("roidestunnels_cart", JSON.stringify({
//                           items: [
//                             {
//                               name: currentProduct.name,
//                               quantity: currentProductQuantity
//                             }
//                           ]
//                         }), { expires: parseInt(process.env.NEXT_PUBLIC_COOKIE_MAX_AGE as string)});
  
//                       } else {
                        
//                         // update cookie or restore if it's shit inside
//                         console.log("BS", Cookie.get("roidestunnels_cart"));
//                         try {

//                         } catch ( e ) {
//                           // Restore completly
//                         }

//                       }

//                     }



//                     // const cookieName:string = process.env.roidestunnels_cart as string;
                    
                    
//                     // if ( !Cookie.get(cookieName) ) {
                      
//                     // } else {

//                     // }

//                     // try {
//                     //   const resp = await fetch(process.env.NEXT_PUBLIC_API_CART as string, {
//                     //     method: "POST",
//                     //     headers: {
//                     //       "Content-Type": "application/json"
//                     //     },
//                     //     body: JSON.stringify({
//                     //       "items":[
//                     //         {
//                     //           "product": currentProduct,
//                     //           "quantity": "5g"
//                     //         }
//                     //       ]
//                     //     })
//                     //   });
//                     // } catch ( e ) {

//                     // }

//                     // reset
//                     setCurrentProductQuantity(null);
//                     setCurrentProduct({
//                       name: "",
//                       description: "",
//                       price: 0,
//                       image: ""
//                     });

//                     onClose();
//                   }}>
//                     Confirmer
//                   </Button>
//                 </ModalFooter>
//               </>
//             )}
//           </ModalContent>
//         </Modal>

//       <div className="p-2 text-center mt-[1em]">
//         <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">Vos repas fraîchement cuisinés, livrés pour la semaine.</h1>
//         <div>
//           <p className="text-md md:text-4xl text-slate-500 mt-5 font-medium leading-tight">Faites vous livrer vos produits CBD en 1h</p>
//         </div>
//       </div>
//       <div>
//       </div>
    
//       <div className="flex items-center justify-center center-content mt-5">
//         <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">


//             <Card className="col-span-12 sm:col-span-4 h-[300px]">
//               <CardHeader className="absolute z-10 top-0 flex-col isolate bg-gradient-to-r from-indigo-500/60 from-10% via-sky-500/60 via-30% to-emerald-500/60 to-90% shadow-lg ">
                
//                 <div className=" bg-black text-white p-2 rounded shadow-lg">
//                   <h4 className="uppercase font-extrabold leading-tight">OG Kush</h4>
//                   {/* <p className="text-medium text-center font-bold leading-tight">10€/g</p> */}
//                 </div>

//               </CardHeader>
//               <Image
//                 removeWrapper
//                 alt="Card background"
//                 className="z-0 w-full h-full object-cover"
//                 src="https://leafly-cms-production.imgix.net/wp-content/uploads/2017/11/12113733/moon-rocks-1.jpg"
//               />
//                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
//                 <div className="flex">
//                     <div>
//                       <GoDotFill size={24} color="red" className="red"/> 
//                      </div>
//                      <div>
//                      <span className="text-black text-tiny font-bold"> Rupture de stock</span>
//                      </div>
//                 </div>
//                 <Button onPress={() => {
//                   setCurrentProduct(prevProduct => ({
//                     name: "OG Kush",
//                     price: 10,
//                     image: "https://leafly-cms-production.imgix.net/wp-content/uploads/2017/11/12113733/moon-rocks-1.jpg",
//                     description: ""
//                   }));
//                   onOpen();
//                 }} className="font-bold text-sm  bg-black text-white" color="primary" radius="full" size="sm" isDisabled={true}>
//                   Ajouter
//                 </Button>
//               </CardFooter>
//             </Card>

//             <Card className="col-span-12 sm:col-span-4 h-[300px]">
//             <CardHeader className="absolute z-10 top-0 flex-col isolate bg-gradient-to-r from-amber-500/60 to-pink-500/60 shadow-lg ">
//                 <div className=" bg-black text-white p-2 rounded shadow-lg">
//                   <h4 className="uppercase font-extrabold leading-tight">Gelato - 10E/g</h4>
//                 </div>
//               </CardHeader>
//               <Image
//                 removeWrapper
//                 alt="Card background"
//                 className="z-0 w-full h-full object-cover"
//                 src="https://www.davidvanille.com/5181-large_default/fleurs-de-cbd-gelato.jpg"
//               />
//               <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
//               <div className="flex">
//                     <div>
//                       <GoDotFill size={24} color="green" className="red"/> 
//                      </div>
//                      <div>
//                      <span className="text-black text-tiny font-bold">En stock</span>
//                      </div>
//                 </div>
//                 <Button onPress={() => {
//                   setCurrentProduct(prevProduct => ({
//                     name: "Gelato",
//                     price: 10,
//                     image: "https://www.davidvanille.com/5181-large_default/fleurs-de-cbd-gelato.jpg",
//                     description: ""
//                   }));
//                   onOpen();
//                 }} className="font-bold text-sm  bg-black text-white" color="primary" radius="full" size="sm">
//                   Ajouter
//                 </Button>
//               </CardFooter>
//             </Card>

//             {/* <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
//               <CardHeader className="absolute z-10 top-1 flex-col items-start">
//                 <p className="text-tiny text-white/60 uppercase font-bold">New</p>
//                 <h4 className="text-black font-medium text-2xl">Acme camera</h4>
//               </CardHeader>
//               <Image
//                 removeWrapper
//                 alt="Card example background"
//                 className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
//                 src="https://nextui.org/images/card-example-6.jpeg"
//               />
//               <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
//                 <div>
//                   <p className="text-black text-tiny">Available soon.</p>
//                   <p className="text-black text-tiny">Get notified.</p>
//                 </div>
//                 <Button className="text-tiny" color="primary" radius="full" size="sm">
//                   Notify Me
//                 </Button>
//               </CardFooter>
//             </Card>

//             <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
//               <CardHeader className="absolute z-10 top-1 flex-col items-start">
//                 <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
//                 <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
//               </CardHeader>
//               <Image
//                 removeWrapper
//                 alt="Relaxing app background"
//                 className="z-0 w-full h-full object-cover"
//                 src="https://nextui.org/images/card-example-5.jpeg"
//               />
//               <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
//                 <div className="flex flex-grow gap-2 items-center">
//                   <Image
//                     alt="Breathing app icon"
//                     className="rounded-full w-10 h-11 bg-black"
//                     src="https://nextui.org/images/breathing-app-icon.jpeg"
//                   />
//                   <div className="flex flex-col">
//                     <p className="text-tiny text-white/60">Breathing App</p>
//                     <p className="text-tiny text-white/60">Get a good night's sleep.</p>
//                   </div>
//                 </div>
//                 <Button radius="full" size="sm">Get App</Button>
//               </CardFooter>
//             </Card> */}


//         </div>
//       </div>
      
//     </div>

//   );
// }

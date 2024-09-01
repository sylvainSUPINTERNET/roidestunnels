import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MealBuilder from "./mealbuilder.component";

export default function PriceTable({productsData}:{productsData: any}) {

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit : { opacity: 0, y: -50 }
      };
    


    const pageVariants = {
        initial: { opacity: 0, x: "100%" },
        in: { opacity: 1, x: "0%" },
        out: { opacity: 0, x: "-100%" },
    };

    const pageTransition = {
        duration: 0.5,
        ease: "easeInOut",
    };


    const [currentPage, setCurrentPage] = useState('main');

    const [offerTypeSelected, setOfferTypeSelected] = useState("main");

    const [selectedProduct, setSelectedProduct] = useState({});

    
    

    return (
        
        <div className="mt-[3em] md:mt-[5em] p-2">

        
        <AnimatePresence mode="wait">
        {
            currentPage === "main" && (
                <motion.div 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                >
                        <h2 className="mt-3 mx-6 bg-gradient-to-b from-black/70 to-black bg-clip-text pb-4  text-center text-4xl font-extrabold leading-tight text-transparent  md:!w-full  lg:text-5xl xl:leading-snug">
                            Nos Offres
                        </h2>
        
                        <p className="mx-6 text-center font-bold font-mono text-xl text-slate-600/80 md:text-2xl">
                            Préparer vos repas et faites vous livrer dans l&apos;heure !
                        </p> 
                </motion.div>
            )
        }
        </AnimatePresence>







        <AnimatePresence mode="wait">

            {/* {currentPage === 'main' && (
                <motion.div
                    key="main"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="page"
                >
                    <h1>Page Principale</h1>
                    <button onClick={ e => setCurrentPage("page2") }>Confirmer (Créer un plat)</button>
                </motion.div>
            )} */}

            { currentPage === 'page2' && (
                <motion.div
                    key="page2"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="page"
                >
                    {/* <h1>Page Principale 2 : {offerTypeSelected}</h1>
                    <button onClick={ e => {setCurrentPage("main")}}>Back main</button> */}
                    <MealBuilder offerTypeSelected={offerTypeSelected} setCurrentPage={setCurrentPage} pack={selectedProduct}/>
                </motion.div>
            )}
            
            {
                currentPage === "main" && (
                    <div className="flex flex-col sm:items-center md:flex-row md:space-x-2 md:justify-around">

                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="w-full flex justify-center"
                    >
    
                        <div className="grid gril-cols-1 md:grid-cols-4 gap-4 w-full p-4">
    
                        {
                            productsData.data.sort( (a:any, b:any) => {
                                return a.default_price.unit_amount - b.default_price.unit_amount;
                            }).map( (i:any, idx:number) => {
                            return (
                                <div className="p-4 rounded bg-white border-2 border-purple-800/60 shadow-2xl shadow-purple-800/10 mb-5" key={idx}>
                                <div className="w-full justify-around">
                                    <h3 className=" text-xl md:text-2xl font-extrabold leading-tight text-center">
                                     {i.name}
                                    </h3>
                                </div>
                                <div>
                                    <p className="font-light text-gray-900 sm:text-lg dark:text-gray-400 text-center">
                                        {i.description}
                                    </p>
                                </div>
                                <div className="mt-5 mb-5 font-mono font-extrabold leading-tight text-4xl text-center text-blue-500">
                                    {(i.default_price.unit_amount / 100).toFixed(2)}€
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
                                    Livraison express
                                </div>
                                </div>
    
                                <div className="mt-5 mb-2 flex justify-center">
                                <button 
                                    onClick={ e => {
                                        setCurrentPage("page2")
                                        setOfferTypeSelected(i.metadata.offerTypeMetadata)
                                        setSelectedProduct(i)
                                    }}
                                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-zinc-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        COMPOSER
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
                )
            }


        </AnimatePresence>

      </div>
    );

}
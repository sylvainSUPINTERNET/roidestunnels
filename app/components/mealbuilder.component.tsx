import { FiAlertOctagon, FiArrowLeft } from "react-icons/fi"

export default function MealBuilder({offerTypeSelected, setCurrentPage, pack} : {offerTypeSelected: string, setCurrentPage: React.Dispatch<React.SetStateAction<string>>, pack:any}) {
    return ( 
        <div>

            <div onClick={ e => {setCurrentPage("main")}} className="cursor-pointer flex items-center p-2">
                <FiArrowLeft fontSize={36} className=" bg-white p-1 "/>
                <p className="text-2xl bg-white p-1 text-zinc-600/80" >
                    {
                        `${pack.name} -  ${pack.description} (${ (pack.default_price.unit_amount / 100).toFixed(2)}€)`
                    }
                </p>
            </div>

{/* 
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                {
                    new Array(parseInt(offerTypeSelected)).fill("").map((_, index) => {

                        return (
                            <div className="bg-white p-4 rounded-lg" key={index}>
                            <p className="text-2xl font-bold">Repas {index}</p>

                            <div className="mt-5 px-3">
                                <div className="mt-3 mb-3">
                                    <p className="text-xl text-zinc-800/60">Protéine</p>
                                    <div className="flex flex-col gap-2 md:px-1">

                                        <div className="bg-white w-full p-1">
                                            <p className="text-xl flex justify-center">Carotte Rapée Basilic</p>
                                            <div className="flex  mt-2">
                                                <div className="w-full flex flex-col">
                                                    <div className="mb-2 text-lg font-medium">89 Kcal</div>
                                                    <div className="mb-2">
                                                        <img src={"/Nutri-score-A.png"} width={64}></img>
                                                    </div>
                                                </div>
                                                <div className="w-full flex justif-center">
                                                    <img src="https://t3.ftcdn.net/jpg/00/43/99/18/360_F_43991864_HPDlXyU3T3pPD1pV5pTXNfFB4O6wyjt6.jpg" width={128}></img>
                                                </div>
                                            </div>

                                            <div className="p-2">
                                                <div className="grid grid-cols-4 items-center gap-1">
                                                    <div className="bg-red-600 rounded-lg p-1  text-center shadow-md">
                                                        <div className="text-sm text-white font-medium">
                                                            Oeuf
                                                        </div>
                                                    </div>
                                                    <div className="bg-red-600 rounded-lg p-1  text-center shadow-md">
                                                        <div className="text-sm text-white font-medium">
                                                            Lactose
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 mb-3">
                                    <p className="text-xl text-zinc-800/60">Légume</p>
                                    <div className="flex flex-row gap-4">
                                        <div>Top1</div>
                                        <div>Top1</div>
                                        <div>Top1</div>
                                        <div>Top1</div>
                                    </div>
                                </div>
                                <div className="mt-3 mb-3">
                                    <p className="text-xl text-zinc-800/60">Condiment</p>
                                    <div className="flex flex-row gap-4">
                                        <div>Top1</div>
                                        <div>Top1</div>
                                        <div>Top1</div>
                                        <div>Top1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div> */}


            <div className="flex flex-col mt-5">
                {
                    new Array(parseInt(offerTypeSelected)).fill("").map((_, index) => {
                        return ( 
                            <div className="mt-4 p-2">
                                <div className="text-2xl font-bold">
                                    Repas {index+1}
                                </div> 

                                {/* <div className="mt-5 px-3">
                                    <div className="mt-3 mb-3">
                                        <p className="text-xl text-zinc-800/60">Protéine</p>
                                        <div className="flex flex-col gap-2 md:px-1">

                                            <div className="bg-white w-full p-1">
                                                <p className="text-xl flex justify-center">Carotte Rapée Basilic</p>
                                                <div className="flex  mt-2">
                                                    <div className="w-full flex flex-col">
                                                        <div className="mb-2 text-lg font-medium">89 Kcal</div>
                                                        <div className="mb-2">
                                                            <img src={"/Nutri-score-A.png"} width={64}></img>
                                                        </div>
                                                    </div>
                                                    <div className="w-full flex justif-center">
                                                        <img src="https://t3.ftcdn.net/jpg/00/43/99/18/360_F_43991864_HPDlXyU3T3pPD1pV5pTXNfFB4O6wyjt6.jpg" width={128}></img>
                                                    </div>
                                                </div>

                                                <div className="p-2">
                                                    <div className="grid grid-cols-4 items-center gap-1">
                                                        <div className="bg-red-600 rounded-lg p-1  text-center shadow-md">
                                                            <div className="text-sm text-white font-medium">
                                                                Oeuf
                                                            </div>
                                                        </div>
                                                        <div className="bg-red-600 rounded-lg p-1  text-center shadow-md">
                                                            <div className="text-sm text-white font-medium">
                                                                Lactose
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 mb-3">
                                        <p className="text-xl text-zinc-800/60">Légume</p>
                                        <div className="flex flex-row gap-4">
                                            <div>Top1</div>
                                            <div>Top1</div>
                                            <div>Top1</div>
                                            <div>Top1</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 mb-3">
                                        <p className="text-xl text-zinc-800/60">Condiment</p>
                                        <div className="flex flex-row gap-4">
                                            <div>Top1</div>
                                            <div>Top1</div>
                                            <div>Top1</div>
                                            <div>Top1</div>
                                        </div>
                                    </div>
                                </div> */}


                                <div className="">
                                    <div className="p-2 text-lg text-gray-800/80">
                                        <p>Protéine</p>

                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-1">

                                        {
                                            [1,2,3,4].map( (item, index) => {
                                                return ( 
                                                    <div className="flex flex-col">
                                                    <p className="text-sm md:text-lg font-bold text-center mb-2">Poulet Curry Japonais</p>
                                                    <div className="flex flex-row mt-4">
                                                        <div className="flex flex-row justify-around w-full">
                                                            <div>
                                                                <div className="mb-3 font-medium">
                                                                    100 Kcal
                                                                </div>
                                                                <div className="mb-3 font-medium">
                                                                    150g
                                                                </div>
                                                                <div>
                                                                    <img src={"/Nutri-score-A.png"} width={64}></img>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <img className="rounded-lg" src={"https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE="} width={128}></img>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                    <div className="p-1 flex flex-wrap gap-4 text-xs md:text-sm mt-4">
                                                        <div className="bg-gray-200/80 rounded-lg shadow-md border-1 border-zinc-200/80 p-1">
                                                            <p className="text-center font-medium">Oeuf</p>
                                                        </div>
                                                        <div className="bg-gray-200/80 rounded-lg shadow-md border-1 border-zinc-200/80 p-1">
                                                            <p className="text-center font-medium">Oeuf</p>
                                                        </div>
                                                        <div className="bg-gray-200/80 rounded-lg shadow-md border-1 border-zinc-200/80 p-1">
                                                            <p className="text-center font-medium">Lactose</p>
                                                        </div>
                                                        <div className="bg-gray-200/80 rounded-lg shadow-md border-1 border-zinc-200/80 p-1">
                                                            <p className="text-center font-medium">Oeuf</p>
                                                        </div>
                                                        <div className="bg-gray-200/80 rounded-lg shadow-md border-1 border-zinc-200/80 p-1">
                                                            <p className="text-center font-medium">Arachide</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
        
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>






            {/* <div className="flex flex-col md:flex-row">

                <div className="bg-white p-4 rounded-lg">
                    <p className="text-2xl font-bold">Repas X</p>

                    <div className="mt-5 px-3">
                        <div>
                            <p className="text-xl text-zinc-800/60">Protein</p>
                            <div className="flex flex-row gap-4">
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                            </div>
                        </div>

                        <div>
                            <p className="text-xl text-zinc-800/60">Vegetable</p>
                            <div className="flex flex-row gap-4">
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                            </div>
                        </div>

                        <div>
                            <p className="text-xl text-zinc-800/60">Condiment</p>
                            <div className="flex flex-row gap-4">
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                    <p className="text-2xl font-bold">Repas X</p>

                    <div className="mt-5 px-3">
                        <div>
                            <p className="text-xl text-zinc-800/60">Protein</p>
                            <div className="flex flex-row gap-4">
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                            </div>
                        </div>

                        <div>
                            <p className="text-xl text-zinc-800/60">Vegetable</p>
                            <div className="flex flex-row gap-4">
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                            </div>
                        </div>

                        <div>
                            <p className="text-xl text-zinc-800/60">Condiment</p>
                            <div className="flex flex-row gap-4">
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                                <div>Top1</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
            
        {/*             
            <div id="accordion-open" data-accordion="open">
                <h2 id="accordion-open-heading-1">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                    <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> What is Flowbite?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                    </div>
                </div>
                <h2 id="accordion-open-heading-2">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                    <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>Is there a Figma file available?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>
                <h2 id="accordion-open-heading-3">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                    <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> What are the differences between Flowbite and Tailwind UI?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
                    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        */}

        </div>
    )
}
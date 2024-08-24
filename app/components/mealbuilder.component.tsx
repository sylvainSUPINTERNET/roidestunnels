import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWeightScale } from "react-icons/fa6"
import { FiAlertOctagon, FiArrowLeft } from "react-icons/fi"

export default function MealBuilder({offerTypeSelected, setCurrentPage, pack} : {offerTypeSelected: string, setCurrentPage: React.Dispatch<React.SetStateAction<string>>, pack:any}) {
    
    const max_topping_per_meal:number = 4;

     let [ selected, setSelected] = useState<Set<string>>(new Set()); 


    function updateMealsSelectionMap(e:any, type: "protein" | "vegetable" | "condiment", topping: {
        _id: string; name: string; calories: number; weight: number; nutriScore: string; imageUrl: string; allergens: string[]
    }, mealIndex: number) {

        const key = buildKey(topping._id, type, mealIndex);

        if ( selected.has(key) ) {
            setSelected(prevSet => {
                const newSet = new Set([...Array.from(prevSet).filter( (value) => value !== key)]);
                return newSet;
            });

            return;
        }

        
        let count:number = 0;
        let proteinCount: number = 0;

        selected.forEach( (value) => {
            const [mealPosition, type, row] = value.split("@");
            if ( mealIndex === parseInt(row) ) {
                count++
            }
            if ( type === "protein" && mealIndex === parseInt(row) ) {
                proteinCount++
            }
        });

        if ( proteinCount > 0 && type === "protein" ) {
            // Remove the protein

            selected.forEach( currentKey => {
                const [mealPosition, currentType, row] = currentKey.split("@");
                // Removoe the protein already selected
                if ( mealIndex === parseInt(row) && currentType === "protein" ) {
                    setSelected(prevSet => {
                        const newSet = new Set([...Array.from(prevSet).filter( (value) => value !== currentKey)]);
                        return newSet;
                    });
                }
                // take the new one
                setSelected(prevSet => {
                    const newSet = new Set([...Array.from(prevSet), key]);
                    return newSet;
                });
    
            })
            
            //alert("1 protein only")

            return;
        }

        if ( count > 3 ) {
            alert(`4 ingrédients max pour le Repas ${mealIndex}`)
            return;
        }

        if ( selected.size > 0 ) {
    
            setSelected(prevSet => {
                const newSet = new Set([...Array.from(prevSet), key]);
                return newSet;
            });
    
        } else {
            setSelected(new Set([key]));
        }

    };

    
    const buildKey = (id:string,  type: "protein" | "vegetable" | "condiment", index:number):string => {
        return `${id}@${type}@${index}`;
    }


    const disableCard = (topping:any, indexMeal:number, type: "protein" | "vegetable" | "condiment"): string => {

        if ( selected.size > 0 && selected.has(buildKey(topping._id, type, indexMeal+1)) ) {
            return "bg-gradient-to-r from-rose-100/40  via-teal-100 to-rose-200/40 border-2 border-slate-300";
        }

        return ``;
    }


    const detectAllFilled = () => {
        const mealsMax = pack.metadata.offerTypeMetadata;
        if ((mealsMax*max_topping_per_meal) === selected.size) {
            return true;
        } else {
            return false;
        }
    }



    useEffect( () => {

    }, [])


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
            <div className="p-2 flex flex-col items-center mt-2 md:mt-0">
                <div className="text-bold text-xl px-3">{pack.metadata.offerTypeMetadata} toppings par repas</div>
                <div className="px-8 text-md text-gray-800/80">1 protéine</div>
                <div className="px-8 text-md text-gray-800/80">Légume et condiment illimités</div>
            </div>


            <div className="flex flex-col mt-5">
                {
                    new Array(parseInt(offerTypeSelected)).fill("").map((_, indexMeal) => {
                        return ( 
                            <div className="p-2" key={indexMeal}>
                                <div className="text-2xl font-bold text-black/60 text-center mt-4">
                                    Repas {indexMeal+1}
                                </div> 

                                <div>

                                    <div className="p-2 text-lg text-gray-800/80">

                                        <div className="flex justify-center md:justify-start mb-3 p-2">
                                            <div className="bg-red-600/20 rounded-lg shadow-md p-2">
                                                <p className="mt-2 text-md md:text-2xl font-medium text-zince-800">Protéine</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-1 mt-3">

{/* 
                                        { 
                                            mealsSelectionMap.hasOwnProperty(`meal_${indexMeal+1}`) 
                                            && mealsSelectionMap[`meal_${indexMeal+1}`].hasOwnProperty("protein") 
                                            && mealsSelectionMap[`meal_${indexMeal+1}`]["protein"].length > 0 
                                            && mealsSelectionMap[`meal_${indexMeal+1}`]["protein"].filter( (topping: any) => topping === "1").length > 0
                                            && (
                                                <p>disable other</p>
                                            )

                                        }

                                                                    
                                        {
                                            JSON.stringify(mealsSelectionMap)
                                        }
 */}

                                        {
                                            [
                                                {
                                                "_id": "1",
                                                "name": "Poulet Curry Japonais",
                                                "calories": 100,
                                                "weight": 150,
                                                "nutriScore": "A",
                                                "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                },
                                                {
                                                    "_id": "2",
                                                    "name": "Poulet Curry Japonais",
                                                    "calories": 100,
                                                    "weight": 150,
                                                    "nutriScore": "B",
                                                    "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                    "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                },
                                                {
                                                    "_id": "3",
                                                    "name": "Poulet Curry Japonais",
                                                    "calories": 100,
                                                    "weight": 150,
                                                    "nutriScore": "C",
                                                    "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                    "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                },
                                                {
                                                    "_id": "4",
                                                    "name": "Poulet Curry Japonais",
                                                    "calories": 100,
                                                    "weight": 150,
                                                    "nutriScore": "D",
                                                    "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                    "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                } 
                                            ].map( (topping, index) => {
                                                return ( 
                                                <div className="flex flex-col" key={index}>
                                                    <div className={`cursor-pointer bg-white p-1 rounded-lg
                                                                         ${disableCard(topping, indexMeal, "protein")}
                                                                          p-2
                                                                         `
                                                                    }  
                                                                    id={`protein_${indexMeal+1}_${index}`} onClick={e => updateMealsSelectionMap(e, "protein", topping, indexMeal+1)}>
                                                    <p className="text-md md:text-xl font-bold text-center mb-2">{topping.name}
                                                    
                                                    {/* {
                                                        selected.size > 0 && selected.has(buildKey(topping._id, "protein", indexMeal+1)) && (
                                                            <span>selected</span>
                                                        )
                                                    } */}
                                                    </p>
                                                    <div className="flex flex-row mt-4">
                                                        <div className="flex flex-row justify-around w-full">
                                                            <div>
                                                                <div className="mb-3 font-medium flex items-center gap-1">
                                                                    <div className="text-md md:text-2xl font-bold font-mono">
                                                                        {topping.calories}
                                                                    </div>
                                                                    <div>
                                                                        <img src={"calories.png"} width={36}></img>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3 font-medium font-mono">
                                                                    {topping.weight}g
                                                                </div>
                                                                <div>
                                                                    <img src={`/Nutri-score-${topping.nutriScore}.png`} width={64}></img>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <img className="rounded-lg" src={topping.imageUrl} width={128}></img>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                    <div className="p-1 flex flex-wrap gap-4 text-xs md:text-sm mt-4">
                                                        {
                                                            topping.allergens.map((allergen, index) => {
                                                                return ( 
                                                                    <div className="bg-gray-200/80 rounded-lg shadow-md border-1 border-zinc-200/80 p-1" key={index}>
                                                                        <p className="text-center font-medium">{allergen}</p>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
        
                                        </div>
                                    </div>


                                    <div className="p-2 text-lg text-gray-800/80">

                                        <div className="flex justify-center md:justify-start mb-3 p-2">
                                            <div className="bg-green-600/20 rounded-lg shadow-md p-2">
                                                <p className="mt-2 text-md md:text-2xl font-medium text-zince-800">Légume</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-1 mt-3">

                                        {
                                            [
                                                {
                                                "_id": "1",
                                                "name": "Poulet Curry Japonais",
                                                "calories": 100,
                                                "weight": 150,
                                                "nutriScore": "A",
                                                "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                },
                                                {
                                                    "_id": "2",
                                                    "name": "Poulet Curry Japonais",
                                                    "calories": 100,
                                                    "weight": 150,
                                                    "nutriScore": "B",
                                                    "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                    "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                },
                                                {
                                                    "_id": "3",
                                                    "name": "Poulet Curry Japonais",
                                                    "calories": 100,
                                                    "weight": 150,
                                                    "nutriScore": "C",
                                                    "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                    "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                },
                                                {
                                                    "_id": "4",
                                                    "name": "Poulet Curry Japonais",
                                                    "calories": 100,
                                                    "weight": 150,
                                                    "nutriScore": "D",
                                                    "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                    "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                } 
                                            ].map( (topping, index) => {
                                                return ( 
                                                    <div className="flex flex-col" key={index}>
                                                    <div className={`cursor-pointer bg-white p-1 rounded-lg ${disableCard(topping, indexMeal, "vegetable")} p-2`} onClick={e => updateMealsSelectionMap(e, "vegetable", topping, indexMeal+1)}>
                                                    <p className="text-md md:text-xl font-bold text-center mb-2">Poulet Curry Japonais</p>
                                                    <div className="flex flex-row mt-4">
                                                        <div className="flex flex-row justify-around w-full">
                                                            <div>
                                                                <div className="mb-3 font-medium flex items-center gap-1">
                                                                    <div className="text-md md:text-2xl font-bold font-mono">
                                                                        100
                                                                    </div>
                                                                    <div>
                                                                        <img src={"calories.png"} width={36}></img>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3 font-medium font-mono">
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
                                                </div>
                                                )
                                            })
                                        }
        
                                        </div>
                                    </div>

                                    <div className="p-2 text-lg text-gray-800/80">

                                        <div className="flex justify-center md:justify-start mb-3 p-2">
                                            <div className="bg-yellow-600/20 rounded-lg shadow-md p-2">
                                                <p className="mt-2 text-md md:text-2xl font-medium text-zince-800">Condiment</p>
                                            </div>
                                        </div>


                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-1 mt-3">

                                        {
                                            [
                                                {
                                                "_id": "1",
                                                "name": "Poulet Curry Japonais",
                                                "calories": 100,
                                                "weight": 150,
                                                "nutriScore": "A",
                                                "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                },
                                                {
                                                    "_id": "2",
                                                    "name": "Poulet Curry Japonais",
                                                    "calories": 100,
                                                    "weight": 150,
                                                    "nutriScore": "B",
                                                    "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                    "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                },
                                                {
                                                    "_id": "3",
                                                    "name": "Poulet Curry Japonais",
                                                    "calories": 100,
                                                    "weight": 150,
                                                    "nutriScore": "C",
                                                    "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                    "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                },
                                                {
                                                    "_id": "4",
                                                    "name": "Poulet Curry Japonais",
                                                    "calories": 100,
                                                    "weight": 150,
                                                    "nutriScore": "D",
                                                    "imageUrl": "https://media.istockphoto.com/id/1183970158/fr/photo/fond-de-carottes-coup%C3%A9es-en-fines-lani%C3%A8res-pour-les-marin%C3%A9s-salade-crue-de-carottes-cor%C3%A9ennes.jpg?s=612x612&w=0&k=20&c=ZCBKb9PAsm5zUjogdhj9q8NSw0vTwY_9KXGtL3tSkCE=",
                                                    "allergens": ["Oeuf", "Lactose", "Arachide"]
                                                } 
                                            ].map( (topping, index) => {
                                                return ( 
                                                    <div className="flex flex-col" key={index}>

                                                    
                                                    <div className={`cursor-pointer bg-white p-1 rounded-lg ${disableCard(topping, indexMeal, "condiment")} p-2`} onClick={e => updateMealsSelectionMap(e, "condiment", topping, indexMeal+1)}>
                                                    <p className="text-md md:text-xl font-bold text-center mb-2">Poulet Curry Japonais</p>
                                                    <div className="flex flex-row mt-4">
                                                        <div className="flex flex-row justify-around w-full">
                                                            <div>
                                                                <div className="mb-3 font-medium flex items-center gap-1">
                                                                    <div className="text-md md:text-2xl font-bold font-mono">
                                                                        100
                                                                    </div>
                                                                    <div>
                                                                        <img src={"calories.png"} width={36}></img>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3 font-medium font-mono">
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
                                                </div>
                                                )
                                            })
                                        }
        
                                        </div>

                                        <div className="flex justify-center">
                                            <hr className="w-3/4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                        </div>
                                    

                                    </div>



                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex justify-center mb-[5em] font-bold text-2xl">
                {
                    detectAllFilled() && (
                        <button 
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                            disabled={false}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white text-4xl bg-zinc-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                CONFIRMER
                            </span>
                        </button>
                    )
                    
                }

                {
                    !detectAllFilled() && (
                        <button 
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm font-medium text-gray-900 rounded-lg 
                            group bg-gradient-to-br from-purple-600 to-blue-500"
                            disabled={true}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-gray-500 text-4xl bg-zinc-900 dark:bg-gray-900 rounded-md ">
                                CONFIRMER
                            </span>
                        </button>
                    )
                }



                
            </div>

        </div>
    )
}
'use server';

import React from "react";
import Landing from "./components/landing.component";



export default async function Home() {

  // TODO gerer l'erreur de chien puant ici
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let data = await resp.json();


  const productApiResp = await fetch( (process.env.NEXT_PUBLIC_API_NURISH as string) + '/stripe/products', {
    cache: 'no-cache' 

  });
  let productData = await productApiResp.json();


  // MOCK 
  data  = {
    "protein": [
      {
        "_id":"1",
        "name": "Poulet Curry Vert",
        "kcal": 489,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      },
      {
        "_id":"2",
        "name": "Poulet Coco",
        "kcal": 489,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      },
      {
        "_id":"3",
        "name":"Poulet Massala",
        "kcal": 489,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      },
      {
        "_id":"4",
        "name":"Poulet Marinée Origan",
        "kcal": 230,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      }
    ],
    "vegetable": [
      {
        "_id":"5",
        "name":"Riz Basmati",
        "kcal": 489,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      },
      {
        "_id":"6",
        "name":"Penne Rigate",
        "kcal": 877,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      },
      {
        "_id":"8",
        "name":"Courgette Cumin",
        "kcal": 489,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      },
      {
        "_id":"9",
        "name":"Carotte Gingembre",
        "kcal": 489,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      }
    ],
    "condiment" : [
      {
        "_id":"10",
        "name":"Sauce Curry",
        "kcal": 100,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      },
      {
        "_id":"11",
        "name":"Sauce Coco",
        "kcal": 489,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      },
      {
        "_id":"12",
        "name":"Sauce Massala",
        "kcal": 489,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      },
      {
        "_id":"13",
        "name":"Sauce Alfredo",
        "kcal": 489,
        "allergens": ["gluten", "lactose"],
        "imgUrl": "https://previews.123rf.com/images/monphoto/monphoto0908/monphoto090800004/5312243-escalope-grill%C3%A9e-r%C3%B4tis-de-viande-de-dinde-avec-des-l%C3%A9gumes.jpg"
      }
    ]
  };
 

  return ( 
    <Landing mealsData={data} productsData={productData}></Landing>
  );

}
import { FiArrowLeft } from "react-icons/fi"

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
        </div>
    )
}
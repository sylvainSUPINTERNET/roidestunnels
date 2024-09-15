export default async function Page({ params }: { params: { job_id: string } }) {

    
    // const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // let posts = await data.json()

    return <div>
            <div className="flex justify-center items-center h-screen">
            <div className="relative bg-gray-200 rounded w-11/12 h-5/6 flex justify-center items-center">

                <iframe 
                src="https://stuart.sandbox.followmy.delivery/100795284/cae994e5646060db64e8be466f877876"
                className="w-full h-full rounded p-2 shadow-lg"
                title="Suivi de livraison"
                allowFullScreen
                ></iframe>

                <button 
                className="text-xl md:text-2xl absolute bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow
                top-3 right-[20%] md:right-[25%]"
                // style={{ top: '5%', left: '25%' }}
                >
                Annuler la livraison
                </button>
            </div>
            </div>

    </div>
}
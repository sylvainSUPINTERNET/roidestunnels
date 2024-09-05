export default async function Page({ params }: { params: { job_id: string } }) {

    
    // const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // let posts = await data.json()

    return <div>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-gray-200 rounded w-11/12 h-5/6 flex justify-center items-center">
                    <iframe 
                    src="https://stuart.sandbox.followmy.delivery/100795284/cae994e5646060db64e8be466f877876"
                    className="w-full h-full rounded p-2 shadow-lg"
                    title="Suivi de livraison"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
    </div>
}
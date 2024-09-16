import OrderRefundBtn from "@/app/components/orderRefundBtn";

export default async function Page({ params }: { params: { job_id: string } }) {

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_STUART}/jobs/${params.job_id}`)
    const {jobDetail} = await data.json();


    return <div>
            <div className="flex justify-center items-center h-screen">
            <div className="relative bg-gray-200 rounded w-11/12 h-5/6 flex justify-center items-center">
                <iframe 
                src={jobDetail.deliveries[0].tracking_url}
                className="w-full h-full rounded p-2 shadow-lg"
                title="Suivi de livraison"
                allowFullScreen
                ></iframe>


                <OrderRefundBtn jobDetail={jobDetail}/>

            </div>
            </div>

    </div>
}
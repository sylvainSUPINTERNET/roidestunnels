"use client";

import { useState } from "react";

const OrderRefundBtn = ({jobDetail}: {jobDetail:any}) => {

    let [disabled, setDisabled] = useState(
        (new Date(jobDetail.created_at).getTime()) - (new Date().getTime()) > 2 * 60 * 1000
    );
    

    function checkRefundPossible() {
        const creationDate = new Date(jobDetail.created_at).getTime();
        const now = new Date().getTime();
        const diffMs = now - creationDate;
        const diffMinutes = diffMs / 1000 / 60;

        if (diffMinutes <= 2 && diffMinutes >= 0) {
            //console.log('Refund possible');
            // TODO send request to cancel ( stuart ) + refund stripe
            setDisabled(false);
            return false;
        } else {
            //alert("Can't refund after 2 minutes");
            setDisabled(true);
            return true;
        }
    }

    return (
        <button 
        disabled={disabled}
        onClick={ () => checkRefundPossible()}
        className="text-xl md:text-2xl absolute bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow
        top-3 right-[20%] md:right-[25%]"
        // style={{ top: '5%', left: '25%' }}
        >
        Annuler la livraison
        </button>
    );
}

export default OrderRefundBtn;
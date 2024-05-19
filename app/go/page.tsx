"use client";

import { useCounterStore } from "../store/store-provider";

export default function Go() {

    const { count, incrementCount, decrementCount } = useCounterStore(
        (state) => state,
      )

      
    return ( 
        <div>
            {count}
            <button type="button" onClick={() => void incrementCount()}>
                Increment Count
            </button>
            <button type="button" onClick={() => void decrementCount()}>
                Decrement Count
            </button>
        </div>
    )
}
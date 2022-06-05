import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CoupleData } from "../types/CoupleData";


type GroomAndBrideData = {
    groom: CoupleData
    bride: CoupleData
}

export default function useGroomAndBrideData(): [GroomAndBrideData, Dispatch<SetStateAction<GroomAndBrideData>>] {
    const defaultData: GroomAndBrideData = {
        groom: {
            name: "Adylan Roaffa Ilmy",
            isMale: true,
            fatherName: "Baswara Pramudita",
            motherName: "Dyah Paminta Rahayu",
            photoSrc: "https://via.placeholder.com/300x464?text=Photo+Adylan"
        },
        bride: {
            name: "Azka Nabilah Mumtaz",
            isMale: false,
            fatherName: "Ikhwan Harapan",
            motherName: "Shinta Pratiwi Damayanti",
            photoSrc: "https://via.placeholder.com/300x464?text=Photo+Azka"
        },
    }

    const [data, setData] = useState(defaultData);

    // TODO: fetch data
    useEffect(() => {
        setData(defaultData)
    }, [])

    return [data, setData]
}


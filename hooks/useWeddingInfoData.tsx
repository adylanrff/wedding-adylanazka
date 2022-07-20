import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { WeddingInfoData } from "../types/WeddingInfoData";


export default function useWeddingInfoData(): [WeddingInfoData, Dispatch<SetStateAction<WeddingInfoData>>] {
    const defaultData: WeddingInfoData = {
        akadSchedule: {
            startDatetime: 1671332400,
            endDatetime: 1671332400
        },
        resepsiSchedule: {
            startDatetime: 1671332400,
            endDatetime: 1671332400
        },
        location: {
            name: "",
            address: `
            Arumanis, Sitinggil, Kizahashi \n
            at Bumi Surabaya City Resort \n
            Jl. Jenderal Basuki Rachmat No.106-128 \n
            Embong Kaliasin, Kec. Genteng, Kota Surabaya
            `,
            latitude: 0,
            longitude: 0
        },
        addToCalendarUrl: "https://calendar.google.com/event?action=TEMPLATE&tmeid=NTd2YWcybWpzMHZhdTJydDhjMHY3ZnVobDQgYWR5bGFucmZmQG0&tmsrc=adylanrff%40gmail.com",
    }

    const [data, setData] = useState(defaultData);

    // TODO: fetch data
    useEffect(() => {
        setData(defaultData)
    }, [])

    return [data, setData]
}


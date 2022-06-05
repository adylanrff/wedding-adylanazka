import { CoupleData } from "../../types/CoupleData";
import CouplePhotoInfo from "../CouplePhotoInfo";

type Props = {
    groomData?: CoupleData
    brideData?: CoupleData
}

export default function GroomAndBrideInfo({ groomData, brideData }: Props) {
    return (<div className='flex sm:flex-row flex-col justify-center sm:space-x-48 sm:space-y-0 space-y-8' >
        {/* Grooms */}
        < div >
            <CouplePhotoInfo coupleData={groomData} />
        </div >
        {/* & */}
        < div className='flex items-center' >
            <p className="flex-1 text-center font-title text-title font-bold sm:text-6xl text-5xl">&</p>
        </div >
        {/* Bride */}
        < div >
            <CouplePhotoInfo coupleData={brideData} />
        </div >
    </div >);
}


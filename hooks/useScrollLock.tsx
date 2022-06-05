import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useScrollLock(shouldLock: Boolean): [Boolean, Dispatch<SetStateAction<Boolean>>] {
    const [isScrollLocked, setIsScrollLocked] = useState(shouldLock);

    useEffect(() => {
        if (isScrollLocked) {
            document.documentElement.style.position = 'relative'; /* [1] */
            document.documentElement.style.overflow = 'hidden'; /* [2] */
            document.body.style.position = 'relative'; /* [1] */
            document.body.style.overflow = 'hidden'; /* [2] */
          } else {
            document.documentElement.style.position = ''; /* [1] */
            document.documentElement.style.overflow = ''; /* [2] */
            document.body.style.position = ''; /* [1] */
            document.body.style.overflow = ''; /* [2] */

            document.documentElement.style.overflowX = 'hidden'
            document.documentElement.style.overflowY = 'hidden'
            document.body.style.overflowX = 'hidden'
          }
    }, [isScrollLocked])

    return [isScrollLocked, setIsScrollLocked]
}


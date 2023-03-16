import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";


const config = {}

export const useScrollBar = (root, hasScroll) => {
    useEffect(() => {

        let scrollBars;

        if(root.current && hasScroll) {
            scrollBars = OverlayScrollbars(root.current, config);
        }

        return () => {
            if(scrollBars) {
                scrollBars.destroy();
            }
        }
    }, [root, hasScroll]);
}
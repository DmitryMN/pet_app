import { useState, useLayoutEffect } from "react";

const queries = [
    '(max-width: 766px)',
    '(min-width: 767px) and (max-width: 1199px)',
    '(min-width: 1200px)',
];
 
export const useMatchMedia = () => {
    const mediaQuerylist = queries.map(query => matchMedia(query));
    
    const getValues = mediaQuerylist.map(val => val.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQuerylist.forEach(media => media.addEventListener('change', handler));

        return () => mediaQuerylist.forEach(media => media.removeEventListener('change', handler));
    }, []);

    return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index]
    }), {})
}
import { nanoid } from 'nanoid';

export const useGenerator = (length = 4)=>{
    const key = nanoid(length);
    const fullURL = () =>{
        return window.location.host + `/${key}` 
    }

    return {
        fullURL,key
    }
}
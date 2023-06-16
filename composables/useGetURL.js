export const useGetURL = ()=>{
    if (process.client) {
       return window.location.host
    }
}
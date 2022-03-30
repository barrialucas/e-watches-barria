import {relojesArr} from "./Modelos"


export const Promesa=()=>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(
                relojesArr
            )
        }, 1000)
    })
}
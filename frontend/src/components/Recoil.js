import {atom,selector} from 'recoil'
import axios from 'axios';
export const balanceAtom = atom({
    key:'balanceAtom',
    default : selector({
        key : 'balanceSelector',
        get : async ({get}) => {

            const response = await axios.get('http://localhost:3000/api/v1/account/balance',{
                headers : {
                    'Authorization' : 'Bearer '+localStorage.getItem('token')
                }
            })
            console.log(response.data.balance)
            return await response.data.balance;
        }
    })
})
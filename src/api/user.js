import instance from './requset'

export const Login = (req) => {
    return instance({
        url:'/login',
        method:'POST',
        data:req

    }).then(response =>{
        console.log(response.data)
        return response.data
    })
}

export default {Login}
import Mock from 'mockjs'


Mock.mock(
    '/api/login',
    'post',
    (req) => {
       const {passWord,userName} = JSON.parse(req.body)
       if(userName === 'admin' && passWord === '123456'){
           return {
                success:true,
                code:200,
                token:'admin-token'
            }
       }
       return {
            success:false
        }
    }
)
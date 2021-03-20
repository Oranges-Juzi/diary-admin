import {Form,Button,Icon,Image,Input,Layout,Menu,Breadcrumb,Row,Col,Dropdown,Avatar,Badge} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


const arr = [
    Form,
    Button,
    Icon,
    Image,
    Input,
    Menu,
    Layout,
    Breadcrumb,
    Row,
    Col,
    Dropdown,
    Avatar,
    Badge
]

export function setUpAntd(app){
    arr.map(i =>{
        app.use(i)
    })
}





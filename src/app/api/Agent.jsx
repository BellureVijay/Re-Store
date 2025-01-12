import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const baseUrl='http://localhost:5000/api/';

const sleep=()=>new Promise(resolve=>setTimeout(resolve,500))
axios.interceptors.response.use(async response => {
    await sleep();
    return response;
}, error => {
    const {data,status}=error.response
    switch (status) {
        case 400:
            if(data.erorrs){
                const validationErorrs=[];
                for(var key in data.errors){
                    if(data.erorrs[key]){
                        validationErorrs.push(data.erorrs[key])
                    }
                }
                throw validationErorrs.flat();
            }
            toast.error(data.title)
            break;
        case 401:
            toast.error(data.title)
            const navigate=useNavigate()
            navigate('/server-error')
            break;
        case 500:
            break;
        case 404:
            toast.error(data.title)
            break;
    
        default:
            break;
    }
    return Promise.reject(error);
});

const responseBody=(response)=>response.data;

const request={
    get:(url)=>axios.get(baseUrl+url).then(responseBody),
    post:(url,body:{})=>axios.post(baseUrl+url).then(responseBody),
    put:(url,body:{})=>axios.put(baseUrl+url).then(responseBody),
    delete:(url)=>axios.delete(baseUrl+url).then(responseBody)
}

const catalog={
    list:()=>request.get('Products'),
    details:(id)=>request.get(`products/${id}`)
}

const testErrors={
    get400Error:()=>request.get('ErrorHandling/bad-request'),
    get401Error:()=>request.get('ErrorHandling/unauthorised'),
    get404Error:()=>request.get('ErrorHandling/not-found'),
    getValidationError:()=>request.get('ErrorHandling/validation-error'),
    get500Error:()=>request.get('ErrorHandling/server-error')
}
const agent={
    catalog,
    testErrors
}

export default agent;
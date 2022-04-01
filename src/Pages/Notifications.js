// nofification Succsuss
import { toast } from 'react-toastify';


const notify = (text, type) => {
    if (type === "succsess") {
        toast.success(text);
    } else {
        toast.error(text)
    }
}

export {notify} ;
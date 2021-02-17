import {useState, useContext} from 'react';
import {ShopContext} from '../../State/Context/ShopContext';


export const usePagination = () => {
    const {state:{products:{products}}} = useContext(ShopContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [threshold] = useState(9)
    let indexOfLastProduct = currentPage * threshold;
    let indexOfFirstProduct = indexOfLastProduct - threshold;
    let currentProduct = products.slice(indexOfFirstProduct,indexOfLastProduct);

    const paginate = (currentPage) => setCurrentPage(currentPage);

    return{
        products,
        currentPage,
        threshold,
        currentProduct,
        paginate
    }
};


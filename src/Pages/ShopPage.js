import React, {Fragment} from 'react';
import {usePagination} from "../Utils/js/helpers";
import Pagination from "../Components/Pagination/Pagination";
import Products from "../Components/Products/Products";

const ShopPage = () => {
    const {
        products,
        threshold,
        currentProduct,
        paginate
    } = usePagination();

    return (
        <Fragment>
            <Products products={currentProduct}/>
            <Pagination className="pagination" postPerPage={threshold} totalPosts={products.length} paginate={paginate}/>
        </Fragment>
    )
}
export default ShopPage;
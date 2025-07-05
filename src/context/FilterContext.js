import { useContext, createContext, useReducer } from "react";
import { FilterReducer } from "../reducers";
const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
};

export const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(FilterReducer, filterInitialState)

    function intialProductList(products)
    {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }

    function bestSeller(productList)
    {
        return state.bestSellerOnly? productList.filter((product) => product.best_seller === true ) : productList
    }
    function inStock(productList)
    {
        return state.onlyInStock? productList.filter((product) => product.in_stock === true ) : productList
    }
    function sort(productList)
    {
        if(state.sortBy === 'lowtohigh')
        {
            return productList.sort((a,b) => Number(a.price) - Number(b.price))
        }
        if(state.sortBy === 'hightolow')
        {
            return productList.sort((a,b) => Number(b.price) - Number(a.price))
        }
        return productList   
    }
    function ratings(productList)
    {
        if (state.ratings === "4STARSABOVE")
        {
            return productList.filter((product) => product.rating >=4)
        }
        if (state.ratings === "3STARSABOVE")
        {
            return productList.filter((product) => product.rating >=3)
        }
        if (state.ratings === "2STARSABOVE")
        {
            return productList.filter((product) => product.rating >=2)
        }
        if (state.ratings === "1STARSABOVE")
        {
            return productList.filter((product) => product.rating >=1)
        }
        return productList
    }
    const filteredProductList = sort(ratings(inStock(bestSeller(state.productList))))
    
    const value = {
        state,
        dispatch,
        productList : filteredProductList,
        intialProductList
    }
    return(
       < FilterContext.Provider value = {value}>
            {children}
       </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)
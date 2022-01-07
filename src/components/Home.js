import React,{useState,useRef} from 'react'
import currencyFormatter from "currency-formatter";
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';


import Pagination from './Pagination';

const Home = () => {
    const searchRef= useRef();
    //const dispatch= useDispatch();
    const {products} = useSelector(state => state.ProductsReducer);
    const[currentPage,setCurrentPage]=useState(1);
    const[productPerPage]=useState(8);
    const[search,setSearch]=useState("");
    const[productSearched,setProductSearched] = useState(false);
    const paginate=(pageNumber)=>
    {                                       //Function for pagination
        setCurrentPage(pageNumber);
    }
 
    const searchHandler=(e) =>             //Function for searching an item based on keyword
   {
       e.preventDefault();
       const searchKey=searchRef.current.value;
       setSearch(searchKey);
        productSearched ? setProductSearched(false):setProductSearched(true)
       
   }

    const indexOfLastproduct= currentPage * productPerPage;
    const indexOfFirstPost= indexOfLastproduct- productPerPage;
    const currentPosts= products.slice(indexOfFirstPost,indexOfLastproduct)   //calculating number of pages per page for pagination 


    return (
                <div className="container">
                  
                    <h1>Recently ordered</h1>
                      
                        <form onSubmit={searchHandler}>
                            <div className="search">
                         
                                <div>  <input 
                                           type="text" 
                                           className="inputForm"   
                                           placeholder="Search for Product, Brands and More" 
                                           ref={searchRef} /> 
                                </div> 
                                <div className="search-button"> 
                                    <button className="view">
                                        <SearchIcon color={'primary'} />
                                    </button>
                                </div> 
                           </div>
                        </form>
                        <hr/> 
                    <div className="row">

                        {!productSearched && 
                            <Pagination 
                                productPerPage={productPerPage} 
                                totalProducts={products.length} 
                                paginate={paginate} />}
                    
                        {currentPosts.filter((product) => {

                            if (search === "") 
                                {
                                    return product;
                                } 
                                else if (product.name.toLowerCase().includes(search.toLowerCase())) 
                                {
                                    return product;
                                }
                            return null;
                               }).map(product => (
                                    <div className="col-3 productAlign" key={product.id}>
                                        <div className="product">
                                            <div className="product__img">
                                                <img src={product.image_link} alt="productimg"/>
                                            </div>
                                        <div className="product__name">
                                          {product.name}
                                        </div>
                                        <div >
                                            <div>
                                                <div className="product__price">
                                                    {currencyFormatter.format(product.price, { code: 'USD' })}
                                                </div>
                                            </div>
                                          <Link to={`/details/${product.id}`}> <button className='productbtn'>View More</button></Link>
                                           </div>
                                        </div>
                                    </div>       
                    ))}
                    
              </div>     
        </div>
          
    )}
            
    export default Home;              

              
            
       



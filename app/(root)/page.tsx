import ProductList from "@/components/shared/product/product-list";
import getLatestProducts from "@/lib/actions/productActions";



const HomePage =async()=>{

  const latestProducts = await getLatestProducts();


  return(
    <>
      <ProductList data={latestProducts} title="Latest Arrivals"   />
    </>
  )
}




export default HomePage;
import ProductCard, { ProductType } from "../Components/ProductCard"

// ISR
const getProduct = async(): Promise<ProductType[]> => {
    try {
        const res = await fetch('http://localhost:5000/users', 
            {next: {revalidate: 20}}            
        )
        return res.json()
    } catch (error) {
        throw new Error("Failed data load")
    }
}

const ProductsPage = async() => {

    const data = await getProduct()

  return (
    <div className="px-8 pt-24 pb-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-base-content">Our Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
    </div>
  )
}

export default ProductsPage
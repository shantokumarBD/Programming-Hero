import React from 'react'

export interface ProductType {
  id: number;
  name: string;
  email: string;
  age: number;
  city: string;
}

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 w-full">
      <div className="card-body">
        <h2 className="card-title text-2xl text-primary font-bold">
          {product.name}
          <div className="badge badge-secondary">{product.age} Years</div>
        </h2>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-base-content/80 flex items-center gap-2">
            📧 {product.email}
          </p>
          <p className="text-base-content/80 flex items-center gap-2">
            📍 {product.city}
          </p>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary hover:-translate-y-1 transition-transform w-full">View Details</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
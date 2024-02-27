import React from 'react'

function ProductInfo() {
    const productItems = ['a', 'b', 'c', 'd', 'e', 'f'];
    return (
    <div className="flex flex-wrap">
        {productItems.map((item, index) => (
            <div className="w-full md:w-1/2 p-4 md:p-2">
                <FloatingCard/>
            </div>
            )
        )}
    </div>
  )
}

function FloatingCard() {
    return (
        <a
        href="#"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Hover Me
        </a>
    )
  }

export default ProductInfo
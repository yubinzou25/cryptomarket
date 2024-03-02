import React from 'react'
import { Link } from 'react-router-dom';

function ProductInfo() {
    const productItems = ['a', 'b', 'c', 'd', 'e', 'f'];
    return (
    <div className="flex flex-col space-y-20">
        <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
            Explore Our Product
        </div>
        <div className="flex flex-wrap gap-y-5">
        {productItems.map((item, index) => (
                <FloatingCard
                    linkPath="/"
                    headText="Spot"
                    mainText="Buy and sell over 700 types of cryptocurrencies at discounted transaction fees."
                    imgPath="/image/product_01.svg"
                />
            )
        )}
        </div>
    </div>
  )
}
function FloatingCard({linkPath, headText, mainText, imgPath}:
    {linkPath:string, headText:string, mainText:string, imgPath:string}) {
    return (
        <div className="w-full md:w-1/2 p-4 md:p-2">
            <Link
            to={linkPath}
            >
                <div
                className="border border-gray-300 p-4 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <div
                    className="flex flex-row justify-between"
                    >
                        <div
                        className="flex flex-col justify-between w-1/2"
                        >
                            <div>{headText}</div>
                            <div
                            className="mb-20"
                            >{mainText}</div>
                            <div>learn more</div>
                        </div>
                        <div
                        className="bg-cover bg-center"
                        style={{
                            backgroundImage: `url("${imgPath}")`,
                            width: "200px",
                            height: "200px",
                        }}
                        >
                    </div>
                    </div>
                </div>
            </Link>
        </div>
    )
  }

export default ProductInfo
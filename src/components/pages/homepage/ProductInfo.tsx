import React from 'react'
import { Link } from 'react-router-dom';

function ProductInfo() {
    const productItems = [
        {
            path:'/',
            header:'Spot',
            main:'Buy and sell over 700 types of cryptocurrencies at discounted transaction fees.',
            img:'/image/product_01.svg'
        },
        {
            path:'/',
            header:'Derivatives',
            main:'Upgrade your trades with UDST Perpetual, Move,and more.',
            img:'/image/product_02.svg'
        },
        {
            path:'/',
            header:'Launchpad',
            main:'DigiFinex Launchpad provides users worldwide with a low-cost opportunity to invest early in project tokens. exclusively for DigiFinex Users.',
            img:'/image/product_03.svg'
        },
        {
            path:'/',
            header:'Wealth',
            main:'Get high yields with our diverse staking products.',
            img:'/image/product_04.svg'
        },
        {
            path:'/',
            header:'Card',
            main:'Spend Crypto without fiat conversion, unlimited transactions under 100K.',
            img:'/image/product_05.svg'
        },
        {
            path:'/',
            header:'Cloud Mining& Merged Mining',
            main:'Integrate a full set of services, will help you enjoy benefits',
            img:'/image/product_06.svg'
        }]
    return (
    <div className="flex flex-col space-y-20">
        <div className="text-3xl lg:text-4xl font-semibold">
            Explore Our Product
        </div>
        <div className="flex flex-wrap gap-y-5">
        {productItems.map((item, index) => (
                <FloatingCard
                    linkPath={item.path}
                    headText={item.header}
                    mainText={item.main}
                    imgPath={item.img}
                    key={index}
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
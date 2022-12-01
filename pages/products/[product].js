import React from 'react'
import { useRouter } from 'next/router'
import { productData } from '../../data/Data'
import Layout from '../../components/layout/Layout'

const product = () => {
    const router = useRouter()
    const { product } = router.query
    const data = productData.filter(curElem => curElem.slug === product);

    // console.log(data)
    return (
        <Layout>
            <div className="flex justify-center items-center">
                {data.map((curElem, index) => {
                    return (
                        <div key={index} className="flex gap-16 w-[60vw] py-5">
                            <div className="w-2/4 flex justify-center items-center">
                                <img src={curElem.imgurl} alt="" />
                            </div>
                            <div className="w-3/4 font-semibold">
                                <h1 className='text-4xl'>{curElem.name}</h1>
                                <p className='text-sm py-2 pl-1 hover:underline hover:text-blue-500 cursor-pointer text-slate-600'>{curElem.brand}</p>
                                <p className='text-2xl py-2'>RS {curElem.price}</p>
                                <ul className='py-2 px-8'>
                                    {curElem.features ? curElem.features.map((e) => (
                                        <li className='text-slate-600 list-disc'>{e}</li>
                                    )) : ''}
                                </ul>

                                <p  className='py-2 '>40% off upto RS <span className='text-blue-600 '>499</span> on Exchange</p>
                                <p className='text-green-500 pb-2 cursor-pointer hover:underline'>Bank offers</p>
                                <div className="flex gap-5 pt-2">
                                    <button className='text-white font-semibold bg-blue-500 px-10 py-1 hover:bg-blue-600'>Add to Cart</button>
                                    <button className='text-white font-semibold bg-blue-500 px-10 py-1 hover:bg-blue-600'>Buy Now</button></div>
                            </div>
                        </div>)
                })}
            </div>
        </Layout>
    )
}
export default product
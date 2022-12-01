import React from 'react'
import { useRouter } from 'next/router'
import { productData } from '../../data/Data'
import Layout from '../../components/layout/Layout'
import Link from 'next/link'

const category = () => {
    const router = useRouter()
    const { category } = router.query

    const data = productData.filter(curElem => curElem.category === category);
    // console.log(data)
    return (
        <Layout>
            <div className="flex flex-col items-center">
                {data.map((curElem, index) => (
                    <Link href={`/products/${curElem.slug}`}>
                        <div key={index} className="w-[60vw] border-b-2 group py-8 hover:border-blue-500 px-5 hover:duration-300 duration-300 cursor-pointer">
                            <div className="flex gap-10">
                                <div className="w-96 flex justify-center items-center">
                                    <img className='w-fit h-40' src={curElem.imgurl} alt="" />
                                </div>
                                <div className="w-4/5 font-semibold ">
                                    <h1 className='text-2xl group-hover:text-blue-500'>{curElem.name}</h1>
                                    <h1 className='text-sm py-1 text-blue-500 hover:underline w-fit'>{curElem.brand}</h1>
                                    <ul className='p-3'>
                                        {curElem.features ? curElem.features.map((e) => (<li className='text-xs list-disc text-slate-600'>{e}</li>)) : ''}
                                    </ul>
                                </div>
                                <div className="w-2/5 flex flex-col justify-center font-semibold ">
                                    <h1 className='text-2xl'>RS <span className=''>{curElem.price}</span></h1>
                                    <h1 className='text-sm text-slate-600'>32% off</h1>
                                    <h1 className='text-sm text-slate-600'>Free delivery</h1>
                                    <h1 className='text-base font-normal'>upto Rs <span className='font-semibold'>499</span> off on Bank offers</h1>
                                    <h1 className=' text-green-500 font-bold text-lg'>Bank offers</h1>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    )
}
export default category
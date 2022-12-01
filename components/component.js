import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdKeyboardArrowDown, MdNotifications, MdFileDownload, MdTrendingUp, MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { BsFillCartFill, BsCreditCard2FrontFill, BsCollectionFill, BsFillGiftFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'
import Link from 'next/link'

export const Header = () => {

    const HoverMenuItem = ({ imgname, name }) => (

        <p className='flex cursor-pointer gap-4 items-center px-5 py-3 text-sm w-60 border-b border-slate-200 hover:bg-slate-100'>{imgname} <span>{name}</span></p>
    )


    return (
        <>
            <div className="flex justify-center items-center bg-blue-500 text-white gap-6">
                <div className="">
                    <img className=" w-16 flex justify-centre"
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                        alt="" />
                    <p className="flex text-sm gap-1 items-center -mt-2">explore <span className="text-yellow-400 font-semibold">plus</span>
                        <img className="hover:scale-105 w-6"
                            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                            alt="" />
                    </p>
                </div>
                <div className=" flex gap-3 bg-white items-center">
                    <input className="px-3 py-2 text-sm text-black outline-none" type="text" size="65"
                        placeholder="search for products,brands amd more" />
                    <button type="submit" className="px-3 text-blue-600">
                        <BiSearchAlt2 className='w-6 h-6' />
                    </button>
                </div>
                <div className="group">
                    <button className=" rounded bg-white text-blue-500 px-8 py-1 font-semibold">login</button>
                    <div className="py-3 hidden group-hover:block hover:block absolute z-20">
                        <div className=" bg-white border-slate-300 border-t-0 border -ml-2 text-slate-800 font-semibold">
                            <div className="bg-white absolute  -mt-2 w-4 h-4 ml-10 rotate-45"></div>
                            <p className='flex cursor-pointer justify-between px-5 py-3 text-sm w-60 border-b border-slate-200'><span className='hover:underline'>New Customer?</span> <span className='text-blue-500'>Signup</span></p>
                            <HoverMenuItem imgname={<FaUserCircle className='w-4 h-4 text-blue-600' />} name={'My Profile'} />
                            <p className='flex cursor-pointer gap-4 items-center px-5 py-3 text-sm w-60 border-b border-slate-200 hover:bg-slate-100'><img className="w-4"
                                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                                alt="" /><span>Flipkart Plus Zone</span></p>
                            <HoverMenuItem imgname={<BsCollectionFill className='w-4 h-4 text-blue-600' />} name={'Orders'} />
                            <HoverMenuItem imgname={<HiHeart className='w-4 h-4 text-blue-600' />} name={'Wishlist'} />
                            <HoverMenuItem imgname={<BsCreditCard2FrontFill className='w-4 h-4 text-blue-600' />} name={'Rewards'} />
                            <HoverMenuItem imgname={<BsFillGiftFill className='w-4 h-4 text-blue-600' />} name={'Giftcards'} />
                        </div>
                    </div>
                </div>
                <button className="text-white text-lg py-3 px-2 font-semibold">Become a seller</button>
                <div className="group ">
                    <button className="py-3 px-2 font-semibold flex items-center">More <span className='hover:-rotate-180 hover:duration-300'><MdKeyboardArrowDown className='w-6 h-6' /></span></button>
                    <div className="py-3 hidden group-hover:block hover:block absolute z-20">
                        <div className=" bg-white border-slate-300 border-t-0 border -ml-8 text-slate-800 font-semibold">
                            <div className="bg-white absolute z-12 -mt-4 w-4 h-4 ml-12 rotate-45"></div>
                            <div className="absolute bg-white z-10 -mt-2">
                                <HoverMenuItem imgname={<MdNotifications className='w-4 h-4 text-blue-600' />} name={'Notification Preferences'} />
                                <HoverMenuItem imgname={<HiHeart className='w-4 h-4 text-blue-600' />} name={'24 / 7 Customer Care'} />
                                <HoverMenuItem imgname={<MdTrendingUp className='w-4 h-4 text-blue-600' />} name={'Advertise'} />
                                <HoverMenuItem imgname={<MdFileDownload className='w-4 h-4 text-blue-600' />} name={'Download App'} />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="text-white text-lg py-3 px-2 font-semibold flex items-center gap-2"><BsFillCartFill />Cart</button>

            </div>
        </>
    )
}


export const Footer = ({ data }) => {
    return (
        <>
            <div className="bg-slate-800 pl-32 py-10">
                <div className="flex font-semibold justify-center ">
                    {data.map((curElem) => (
                        <div className="w-1/5">
                            <p className='text-white text-xl py-2'>{curElem.title}</p>
                            <div className="text-gray-300">
                                {curElem.menu.map((e) => (
                                    <p className='cursor-pointer hover:text-white'>{e}</p>

                                ))}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
                <div className="flex bg-slate-800 text-white justify-center py-4 border-t-2">
                    <p className='font-semibold text-2xl'>Developed by <Link href={'mailto:ti7112@outlook.com'} className='text-blue-300 hover:underline hover:text-white duration-500'>Ayushjha7112</Link></p>
                </div>
        </>
    )
}

export const Category = ({ data }) => {

    const Item = ({ data }) => {
        const [showMenu, setshowMenu] = useState(0)

        const hover = (e) => {
            // console.log(document.getElementsByClassName('ayush'))
            console.log(showMenu)
            // setshowMenu()
        }

        return (
            <>
                <div className="group">
                    <img className='w-24' src={data.url} alt="" />
                    <p className='flex gap-1 items-center cursor-pointer hover:text-blue-600 text-sm font-semibold justify-center'>{data.name} {data.menu ? <MdKeyboardArrowDown className='' /> : ''}</p>
                    {data.menu ?
                        <div className="absolute z-20 hidden group-hover:flex hover:flex flex-col items-center ml-8">
                            <div className="bg-white w-6 h-6 border-slate-200 border-l-2 border-t-2 -mb-6 rotate-45 "></div>
                            <div className="absolute w-[28vw] grid grid-cols-2">
                                <div className="py-3">
                                    <div className=" bg-white border-slate-200 border-2 px-3 pb-3">
                                        {data.menulink.map((curElem, index) => (
                                            <div className="group">
                                                <p name={`${index}`} onMouseOver={() => { setshowMenu(index) }} className={`mt-2 group font-semibold py-2 border-b border-slate-200 cursor-pointer px-2 hover:bg-slate-100`} key={index}>{curElem.name}</p>

                                            </div>

                                        ))}
                                    </div>
                                </div>
                                <div className="group-hover:block py-3 h-full">
                                    <div className="bg-gray-100 border-slate-200 border-2 h-full px-3 pb-3">
                                        {data.menulink[showMenu].submenu ?
                                            <div className="">
                                                <p className='px-2 py-3 border-b font-semibold text-gray-700'>{data.menulink[showMenu].name}</p>
                                                {data.menulink[showMenu].submenu.map((curElem, index) => {
                                                    return (
                                                        <p className='mt-2 font-semibold py-2 border-b border-slate-200 cursor-pointer px-2 hover:bg-white' key={index}>{curElem.name}</p>
                                                    )
                                                })}
                                            </div> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ''}
                </div>
            </>
        )
    }

    return (
        <>
            <div className="px-32 py-2">
                <div className="flex justify-center gap-5 items-center">
                    {data.map((curElem, index) => (
                        <div key={index} className="">
                            <Item data={curElem} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export const Slider = ({ data }) => {

    const [mlvalue, setMlValue] = useState(0)

    const next = () => {
        (mlvalue === (data.length * 100)) ? setMlValue(100) : setMlValue(mlvalue + 100)
        console.log(document.getElementsByClassName('ayush'))
    }

    const prev = () => {
        (mlvalue === 100) ? setMlValue((data.length * 100)) : setMlValue(mlvalue - 100)
        console.log(document.getElementsByClassName('ayush'))
    }
    return (
        <>
            <div className="px-32">
                <div className="flex overflow-hidden">
                    {/* <div className={`ayush flex -ml-[300%] duration-500`}> */}
                    <img className={`ayush -ml-[${mlvalue + '%'}] duration-500`} src={data[0]} alt="" />
                    {data.map((curElem, index) => (
                        <img key={index} className='w-full' src={curElem} alt="" />
                    ))}
                    {/* </div> */}
                    <div className="absolute z-10">
                        <div className="flex justify-between
                         w-[85vw] pl-4 items-center h-[25vh]">
                            <button onClick={prev} className="bg-gray-100 pl-3"><MdArrowBackIos className='w-6 h-20' /></button>
                            <button onClick={next} className=" bg-gray-100 px-[6px]"><MdArrowForwardIos className='w-6 h-20' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const ProductView = ({ data }) => {

    const GridView = ({ data }) => {
        return (
            <div className="flex pt-4 justify-center gap-3">
                <div className="flex border-b-4 py-12 w-[85vw] gap-5 ">
                    {data.map((curElem, index) => (
                        <Link key={index} href={`/category/${curElem.slug}`}><div className="text-center cursor-pointer">
                            <div className="w-48 flex justify-center h-44">
                                <img className="h-44 w-fit hover:scale-105"
                                    src={curElem.imgurl}
                                    alt="" />
                            </div>
                            <p className='font-semibold pt-2'> {curElem.title ? curElem.title : 'Printer'}</p>
                            <p className="text-green-600">{curElem.starting ? 'from' + curElem.starting : 'from 3999'}</p>
                            <p className="text-gray-500">{curElem.brand ? curElem.brand : 'AJcracks'}</p>
                        </div></Link>
                    ))}
                </div>
            </div>
        )
    }
    return (
        <>
            <GridView data={data.slice(0, 8)} />
            <GridView data={data.slice(8, 16)} />
            <GridView data={data.slice(16, 24)} />
            <GridView data={data.slice(24, 32)} />
            <GridView data={data.slice(32, 40)} />
            <GridView data={data.slice(40, 48)} />
        </>
    )
}


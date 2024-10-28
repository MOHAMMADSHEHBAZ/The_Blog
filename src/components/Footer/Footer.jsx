import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import logo from '../../assets/logo2.png'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                            <div>
                            <img src ={logo} alt="" className='max-w-20' />
                            </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. | 
                                    <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                    @MohammadShehbaz
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-200">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-extralight text-gray-500 hover:text-gray-700"
                                        to="/"
                                    >
                                        <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                        Features
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-extralight text-gray-500 hover:text-gray-700"
                                        to="/"
                                    >
                                        <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                        Pricing
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-extralight text-gray-500 hover:text-gray-700"
                                        to="/"
                                    >
                                        <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                        Affiliate Program
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-extralight text-gray-500 hover:text-gray-700"
                                        to="/"
                                    >   
                                    <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                    Press Kit
                                    </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-200">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-extralight text-gray-500 hover:text-gray-700"
                                        to="/"
                                    >
                                        <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                        Account
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-extralight text-gray-500 hover:text-gray-700"
                                        to="/"
                                    >
                                        <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                        Help
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-extralight text-gray-500 hover:text-gray-700"
                                        to="/"
                                    >
                                        <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                        Contact Us
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-extralight text-gray-500 hover:text-gray-700"
                                        to="/"
                                    >
                                        <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                        Customer Support
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-200">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-extralight text-gray-500 hover:text-gray-700"
                                        to="/"
                                    >
                                        <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                        Terms &amp; Conditions
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-extralight text-gray-500 hover:text-gray-700"
                                        to="/"
                                    >
                                        <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                        Privacy Policy
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-extralight text-gray-500 hover:text-gray-700"
                                        to="/"
                                    >
                                        <a href="https://github.com/MOHAMMADSHEHBAZ" target='_blank'>
                                        Licensing
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer
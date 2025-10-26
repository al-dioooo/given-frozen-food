'use client'

import { motion } from "motion/react"
import Link from "next/link"

import { CircleDecoration, Topography } from "@/components/graphics/decoration"
import GVNGraphic from "@/components/graphics/gvn"
import Logo from "@/components/graphics/logo"
import { FourPointedStar } from "@/components/icons/filled"
import { ArrowNarrowDown, ArrowNarrowRight } from "@/components/icons/outline"
import RaySpinner from "@/components/ray-spinner"
import StarSpinner from "@/components/star-spinner"
import { ProductDataType } from "@/helpers/types"
import { useRef, useState } from "react"

const productAnimationVariants = {
  hover: {
    scale: 1.05
  },
  tap: {
    scale: 0.95
  }
}

const MotionLink = motion(Link)

const productDataListMock: ProductDataType[] = [
  {
    id: 1,
    name: "Kanzler Chicken Nugget",
    slug: "kanzler-chicken-nugget",
    cover_image: "img/products/kanzler-chicken-nugget.png",
    payment_type: "-",
    description: "",
    price: 0,
    created_at: ""
  },
  {
    id: 2,
    name: "CEDEA Fish Dumpling Cheese",
    slug: "cedea-fish-dumpling-cheese",
    cover_image: "img/products/cedea-fish-dumpling-cheese.png",
    payment_type: "-",
    description: "",
    price: 0,
    created_at: ""
  },
  {
    id: 3,
    name: "Shifudo Chikuwa Mini",
    slug: "shifudo-chikuwa-mini",
    cover_image: "img/products/shifudo-chikuwa-mini.png",
    payment_type: "-",
    description: "",
    price: 0,
    created_at: ""
  }
]

export default function Home() {
  // Scroll container refs
  const ourProductContainerRef = useRef(null)

  // States
  const [productDataList, setProductDataList] = useState(productDataListMock)

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col space-y-4 justify-center min-h-screen bg-white p-8 md:p-36 overflow-hidden">
        <div className="flex md:flex-row flex-col-reverse justify-between items-center">
          <div className="relative">
            <h1 className="text-3xl md:text-6xl font-semibold leading-tight relative z-1">
              <p>
                We Provide
              </p>
              <p>
                <span className="text-red-500 underline underline-offset-8 decoration-red-200">All You Need</span>
              </p>
            </h1>
            <h2 className="md:text-lg text-gray-500 mt-4 max-w-md relative z-1">
              Hidangan yang tidak hanya lezat tetapi juga bergizi dan praktis.
            </h2>

            <div className="mt-16 relative w-fit z-1">
              <a href="https://wa.me/6285763277736" target="_blank" className="font-medium bg-linear-to-tl from-red-500 to-red-300 pl-6 pr-2 py-2 rounded-full text-white inline-flex items-center">Order<span className="bg-white text-red-500 text-sm px-3 py-1 rounded-full ml-4">Now</span></a>

              <div className="absolute pointer-events-none -top-1 -right-1 text-yellow-300">
                <FourPointedStar className="w-8 h-8" />
              </div>
            </div>

            <div className="absolute pointer-events-none inset-0">
              <div className="-translate-x-32 -translate-y-32 rounded-full aspect-square bg-orange-100 blur-3xl"></div>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full max-w-lg aspect-square">
            <GVNGraphic className="w-[18rem] md:w-lg h-auto relative z-1" />

            {/* Decoration */}
            <div className="absolute pointer-events-none -inset-16 flex items-center justify-center">
              <RaySpinner className="w-full h-full text-red-100" baseVelocity={5} />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Decoration */}
          <div className="absolute inset-x-0 pointer-events-none flex justify-center">
            <div className="rounded-full border border-gray-200 p-2">
              <ArrowNarrowDown className="w-12 h-12 text-red-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 md:p-12">
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row overflow-hidden items-center p-6 md:p-12 rounded-4xl border-4 border-orange-50 justify-between bg-linear-to-tr from-orange-200 via-orange-50 to-orange-50 relative">
          <h3 className="text-xl font-semibold tracking-wider text-red-500">
            <p><Logo className="w-32 h-auto" /></p>
            <p>Frozen Food</p>
          </h3>
          <h4 className="max-w-3xl text-justify md:text-lg">
            Penyedia berbagai produk makanan beku berkualitas tinggi yang praktis, lezat, dan siap dinikmati kapan saja.
          </h4>

          {/* Topography Decoration */}
          <div className="absolute  pointer-events-none top-0 inset-x-0">
            <Topography className="w-full h-auto text-orange-100 mask-radial-gradient" />
          </div>
        </div>
      </section>

      <section className="flex justify-center w-full bg-white">
        {/* Just decoration */}
        <div className="flex items-center justify-center relative">
          <StarSpinner className="w-20 h-20 z-2 relative text-red-500" baseVelocity={8} />
          <span className="absolute z-1 inset-0 flex justify-center items-center"><CircleDecoration className="scale-150 text-orange-200 blur-[1px] -rotate-[9deg]" strokeWidth={2} /> </span>
        </div>
      </section>

      <section ref={ourProductContainerRef} className="flex flex-col items-center p-8 md:p-16 space-y-16 rounded-b-[4rem] border-b-12 border-b-orange-100 bg-white">
        <h5 className="text-4xl text-red-500 font-semibold">Best Seller</h5>

        <div className="space-y-4">
          <div className="flex justify-between w-full">
            <div></div>
            <div>
              <MotionLink href="/product" className="text-red-500 font-medium inline-flex space-x-2 items-center">
                <span>Lihat Semua Produk</span>
                <div className="rounded-full border border-gray-200 p-1">
                  <ArrowNarrowRight className="w-6 h-6 text-red-500" />
                </div>
              </MotionLink>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {productDataList.map((row: ProductDataType) => (
              // <MotionLink key={row.id} variants={productAnimationVariants} href={`/product/${row.slug}`} className="space-y-2">
              //   <motion.img variants={productAnimationVariants} whileHover="hover" whileTap="tap" transition={{ type: "spring", visualDuration: .3 }} className="w-full aspect-video rounded-3xl" src={`${process.env.BASE_URL}/${row.cover_image}`} alt={`${row.name} Cover`} />
              //   <div className="px-6 flex items-center justify-between">
              //     <p className="font-medium">{row.name}</p>
              //     <p className="font-medium text-gray-500 capitalize">Order Now</p>
              //   </div>
              // </MotionLink>
              <motion.a key={row.id} target="_blank" variants={productAnimationVariants} href={`https://wa.me/6285763277736?text=Halo, Saya ingin memesan ${row.name}. Apakah tersedia?`} className="space-y-2">
                <motion.img variants={productAnimationVariants} whileHover="hover" whileTap="tap" transition={{ type: "spring", visualDuration: .3 }} className="w-full aspect-video rounded-3xl" src={`${process.env.BASE_URL}/${row.cover_image}`} alt={`${row.name} Cover`} />
                <div className="px-6 flex items-center justify-between">
                  <p className="font-medium">{row.name}</p>
                  <p className="font-medium text-gray-500 capitalize">Order Now</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

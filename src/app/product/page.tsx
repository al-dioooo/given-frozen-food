'use client'

import { useRef, useState } from "react"
import { motion } from "motion/react"
import WavyText from "@/components/wavy-text"

import { Topography } from "@/components/graphics/decoration"
import { ProductDataType } from "@/helpers/types"
import Link from "next/link"

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

export default function Product() {
  // Scroll container refs
  const ourProductContainerRef = useRef(null)

  // States
  const [productDataList, setProductDataList] = useState(productDataListMock)

  return (
    <>
      <section className="px-12 md:px-24 pt-36 pb-12 relative bg-white">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-red-500">Product</h1>
          <h2 className="max-w-md w-full text-neutral-700">Berikut daftar produk yang kami jual untuk memebuhi kebutuhan makanan Anda yang lezat, bergizi, dan praktis.</h2>
        </div>

        {/* Topography Decoration */}
        <div className="absolute top-0 inset-x-0">
          <Topography className="w-full h-auto text-orange-200 mask-radial-gradient" />
        </div>
      </section>

      <section className="px-12 md:px-24 py-16 space-y-8 bg-white">
        {/* <h3 className="text-xl font-medium">Produk Umum</h3> */}
        <div className="grid md:grid-cols-3 gap-8">
          {productDataList.map((row: ProductDataType) => (
            // <MotionLink key={row.id} variants={productAnimationVariants} href={`/product/${row.slug}`} className="space-y-2">
            //   <motion.img variants={productAnimationVariants} whileHover="hover" whileTap="tap" transition={{ type: "spring", visualDuration: .3 }} className="w-full aspect-video rounded-3xl" src={`${process.env.BASE_URL}/${row.cover_image}`} alt={`${row.name} Cover`} />
            //   <div className="px-6 flex items-center justify-between">
            //     <p className="font-medium">{row.name}</p>
            //     <p className="font-medium text-neutral-500 capitalize">Order Now</p>
            //   </div>
            // </MotionLink>
            <motion.a key={row.id} target="_blank" variants={productAnimationVariants} href={`https://wa.me/6285763277736?text=Halo, Saya ingin memesan ${row.name}. Apakah tersedia?`} className="space-y-2">
              <motion.img variants={productAnimationVariants} whileHover="hover" whileTap="tap" transition={{ type: "spring", visualDuration: .3 }} className="w-full aspect-video rounded-3xl" src={`${process.env.BASE_URL}/${row.cover_image}`} alt={`${row.name} Cover`} />
              <div className="px-6 flex items-center justify-between">
                <p className="font-medium">{row.name}</p>
                <p className="font-medium text-neutral-500 capitalize">Order Now</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="px-12 md:px-24 py-16 bg-white">
        <div className="text-4xl font-medium">
          <WavyText />
        </div>
      </section>

      <section className="bg-white rounded-b-[4rem] border-b-12 border-b-orange-100 p-12 md:p-24">
        <div className="p-12 md:p-24 border border-dashed border-neutral-300 rounded-4xl md:rounded-[4rem] aspect-cinema flex items-center justify-center">
          <a href="https://wa.me/6285763277736" target="_blank" className="bg-linear-to-tl from-red-500 to-red-300 text-white rounded-3xl px-8 md:px-24 py-8">
            <span className="text-lg md:text-4xl font-medium">Pesan Sekarang</span>
          </a>
        </div>
      </section>
    </>
  )
}

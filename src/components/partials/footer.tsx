import Link from "next/link";
import { WhatsApp, Mail, Phone } from "@/components/icons/outline"
import Logo from "@/components/graphics/logo"

export default function Footer() {
  console.log("Created with Love by Septia Angelika")

  return (
    <footer className="bg-radial-[at_50%_100%] from-orange-100 via-neutral-100 via-60% to-neutral-100 px-12 md:px-24 pt-16 pb-36 relative overflow-hidden">
      <div className="flex md:flex-row flex-col space-y-8 md:space-y-0 md:space-x-8 justify-between">
        <div className="flex flex-col space-y-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-col text-red-500 font-semibold">
                <p><Logo className="w-24 h-auto" /></p>
                <p>Frozen Food</p>
              </div>
              <p className="text-neutral-500 text-sm max-w-md">
                Penyedia berbagai produk makanan beku berkualitas tinggi yang praktis, lezat, dan siap dinikmati kapan saja.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a className="hover:text-red-500" href="https://wa.me/6285763277736" target="_blank">
                <WhatsApp />
              </a>
              <a className="hover:text-red-500" href="tel:6285763277736" target="_blank">
                <Phone />
              </a>
              {/* <a className="hover:text-red-500" href="mailto:aliceevrasaldio@apps.ipb.ac.id" target="_blank">
                <Mail />
              </a> */}
            </div>
          </div>

          <div className="text-sm text-neutral-500">
            {/* <p>[] is a Trademark of []</p> */}
            <p>Copyright &copy; 2025 Given Frozen Food.</p>
          </div>
        </div>

        <div className="space-y-8 text-sm">
          <p className="font-medium uppercase tracking-widest text-red-500">Links</p>
          <ul className="space-y-4">
            <li>
              <Link className="hover:text-red-500" href="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-red-500" href="/product">Product</Link>
            </li>
            <li>
              <Link className="hover:text-red-500" href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute pointer-events-none inset-0 w-full flex justify-center items-end translate-y-3 md:translate-y-18 whitespace-nowrap">
        <p className="text-5xl md:text-[8rem] font-black text-neutral-50">Given Frozen Food</p>
      </div>
    </footer>
  )
}

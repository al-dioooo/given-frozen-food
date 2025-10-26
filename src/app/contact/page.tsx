import { Topography } from "@/components/graphics/decoration";
import { Clock, Mail, MapPin, Phone } from "@/components/icons/outline";

export default function Contact() {
  return (
    <>
      <section className="px-12 md:px-24 pt-36 pb-12 relative bg-white">
        <div className="space-y-2">
          <h1 className="text-3xl text-red-500 font-semibold">Say Hi!</h1>
          <h2 className="max-w-md w-full text-gray-700">Feel free to reach us.</h2>
        </div>

        {/* Topography Decoration */}
        <div className="absolute pointer-events-none top-0 inset-x-0">
          <Topography className="w-full h-auto text-orange-200 mask-radial-gradient" />
        </div>
      </section>

      <section className="px-12 md:px-24 py-16 flex md:flex-row flex-col md:justify-between space-y-12 md:space-y-0 md:space-x-24 bg-white rounded-b-[4rem] border-b-12 border-b-orange-100">
        <div className="w-full md:w-1/3 space-y-8">
          <div className="flex items-start space-x-4">
            {/* Location */}
            <div className="bg-linear-to-tl from-red-500 to-red-300 text-white rounded-2xl p-4">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium">Alamat</p>
              <p className="text-gray-500">Purwosari, Belitang II, East Ogan Komering Ulu Regency, South Sumatra</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            {/* Time */}
            <div className="bg-linear-to-tl from-red-500 to-red-300 text-white rounded-2xl p-4">
              <Clock className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium">Jam Kantor</p>
              <div>
                <p className="text-gray-500">Senin - Jum&apos;at: 08.00-17.00 WIB</p>
                <p className="text-gray-500">Sabtu - Minggu: 08.00-11.00 WIB</p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            {/* Phone */}
            <div className="bg-linear-to-tl from-red-500 to-red-300 text-white rounded-2xl p-4">
              <Phone className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium">Telepon & WhatsApp</p>
              <p className="text-gray-500">+62 857 6327 7736</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 w-full md:w-2/3">
          <p className="text-xl font-semibold">Lokasi di Maps</p>
          <div className="overflow-hidden rounded-3xl border-4 border-gray-200">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43752.26035138378!2d104.78755793158956!3d-4.109436157015137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e393b4986a30977%3A0xe3f432021e83ae28!2sTOKO%20GIVEN%20FROZEN%20FOOD&#39;S!5e0!3m2!1sen!2sid!4v1761493174826!5m2!1sen!2sid" width="100%" height="300" allowFullScreen={false}></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

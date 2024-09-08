import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex">
        <img
          src={offer}
          width={773}
          height={683}
          className="object-contain w-full"
        />
      </div>
      <div
        className="flex flex-1 flex-col"
      >
        <h2 className="font-palanquin text-4xl capitalize font-semibold lg:max-w-lg">
          <span className="colorCoral">Special</span> Offers
        </h2>
        <p className="mt-4 lg:max-w-lg text-slate-400 text-lg leading-7 mb-4 font-montserrat">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savingsm, we offer unparalleled value that sets us apart
        </p>
        <p className="mt-6 lg:max-w-lg text-slate-400 text-lg leading-7 mb-4 font-montserrat">
          Navigate a realm of possibilities designed to fulfill your unique desires, suspassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button 
            label="View details"
          />
          <Button 
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-gray-400"
            textColor="text-slate-400"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer

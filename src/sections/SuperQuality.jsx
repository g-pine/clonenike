import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div
        className="flex flex-1 flex-col"
      >
        <h2 className="font-palanquin text-4xl capitalize font-semibold lg:max-w-lg">
          We provide you
          <span className="colorCoral"> Super</span>
          <span className="colorCoral"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg text-slate-400 text-lg leading-7 mb-4 font-montserrat">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance
        </p>
        <p className="mt-6 lg:max-w-lg text-slate-400 text-lg leading-7 mb-4 font-montserrat">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button 
            label="Shop now"
            iconURL={arrowRight}
          />
        </div>
      </div>
      <div 
        className="flex-1 flex justify-center items-center"
      >
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality
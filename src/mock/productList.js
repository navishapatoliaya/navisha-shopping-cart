import * as images from "../lib/constants";
export const products = [
    {
      id: 1,
      name: "iwatch",
      image: `${images.iwatch}`,
      description: "Space Grey Aluminium Case with Black Sport Band",
      brand: "Apple",
      price: 43900,
      type: "Watch"
    },
    {

      id: 2,
      name: "iPadpro",
      image: `${images.iPadpro}`,
      description: "Apple iPad Pro with Apple M1 chip ",
      brand: "Apple",
      price: 130890,
      type: "iPad"
    },
    {

      id: 3,
      name: "boatrockerz450 ",
      image: `${images.boatrockerz450}`,
      description: "Rockerz 450 N Wireless Bluetooth Headphone With In-line Mic - Blue",
      brand: "boat",
      price: 1499,
      type: "Headphone"
    },
    {

      id: 4,
      name: "Mitshubishi ",
      image: `${images.Mitshubishi}`,
      description: "Mitshubishi 1.5 Ton Invetor 5 Star Copper",
      brand: "Mitshubishi",
      price: 62998,
      type: "AC"
    }
]
export default products;
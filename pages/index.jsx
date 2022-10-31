import Link from "next/link"
import { Button, BigButton } from "../components/Button"
import Card from "../components/Card"
import { Input, Dropdown } from "../components/Input"



function LandingPage() {
  const dummyData = [
    {
      productsId: 1,
      name: 'Necklace 1',
      detail: 'some good necklace for your wife',
      price: '200',
    },
    {
      productsId: 2,
      name: 'Necklace 2',
      detail: 'some good necklace for your wife',
      price: '200',
    },
    {
      productsId: 3,
      name: 'Necklace 3',
      detail: 'some good necklace for your wife',
      price: '200',
    },
    {
      productsId: 4,
      name: 'Necklace 4',
      detail: 'some good necklace for your wife',
      price: '200',
    },
    {
      productsId: 5,
      name: 'Necklace 5',
      detail: 'some good necklace for your wife',
      price: '200',
    },
    {
      productsId: 6,
      name: 'Necklace 6',
      detail: 'some good necklace for your wife',
      price: '200',
    }
  ]
  return (
    <>
      {/* jumbotron */}
      <section className="w-full h-[70vh] px-10 py-2">
        {/* slider here  */}
        <div className="w-full h-full bg-basic-300"></div>
      </section>
      {/* gallery */}
      <div className="flex-col justify-center items-center w-1/2 gap-4 h-max m-auto">
        <div className="flex gap-4 my-4">
          <Card data={dummyData[0]} />
          <Card data={dummyData[1]} />
          <Card data={dummyData[2]} />
        </div>
        <div className="flex gap-4 my-4">
          <Card data={dummyData[3]} />
          <Card data={dummyData[4]} />
          <Card data={dummyData[5]} />
        </div>
      </div>
    </>
  )
}

export default LandingPage
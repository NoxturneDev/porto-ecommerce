import Link from "next/link"
import { Button, BigButton } from "../components/Button"
import Card from "../components/Card"
import { Input, Dropdown } from "../components/Input"
function LandingPage() {
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <Button>add to cart</Button>
      <Button type="outline">add to cart</Button>
      <BigButton className="mx-7">View more</BigButton>
      <BigButton type="outline">View more</BigButton>
      <br />
      <div className="flex-col">
        <Input className="mx-4"></Input>
        <Input className="mx-4"></Input>
        <Dropdown></Dropdown>
      </div>
      <div className="grid-cols-3 grid-rows-2">
        {arr.map((card, i) => {
          return (
            <Card key={i}></Card>
          )
        })}
      </div>
    </>
  )
}

export default LandingPage
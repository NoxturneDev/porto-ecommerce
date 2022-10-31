import Link from "next/link"
import { Button, BigButton } from "../components/Button"
import { Input, Dropdown } from "../components/Input"

function LandingPage() {
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

    </>
  )
}

export default LandingPage
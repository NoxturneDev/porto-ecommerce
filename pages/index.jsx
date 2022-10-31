import Link from "next/link"
import { Button, BigButton } from "../components/Button"

function LandingPage() {
  return (
    <>
      <Button>add to cart</Button>
      <Button type="outline">add to cart</Button>
      <BigButton className="mx-7">View more</BigButton>
      <BigButton type="outline">View more</BigButton>
    </>
  )
}

export default LandingPage
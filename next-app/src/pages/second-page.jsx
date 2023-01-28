import Link from "next/link";

function SecondPage() {
  return (
    <>
      <div>
        <h1>this is second page</h1>
        <p>thank you</p>
      </div>
      <div>
        <Link href="/">
          go back home
        </Link>
      </div>
    </>
  )
}

export default SecondPage
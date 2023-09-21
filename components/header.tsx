import Link from 'next/link'
import Container from "./container"
import { SITE_TITLE } from "@/lib/consts"

export default function Header() {
  return (
    <header
      className="border-t-8 border-t-neutral-600 border-b border-b-stone-200"
      role="banner"
    >
      <Container>
        <Link href="/" className="text-neutral-600 text-3xl leading-[3.5rem]">
          {SITE_TITLE}
        </Link>
        <nav className="float-right leading-[3.5rem]">
          <Link className="text-neutral-600" href="/about">About</Link>
        </nav>
      </Container>
    </header>
  )
}
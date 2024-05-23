import Link from 'next/link'

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-column items-center justify-between p-10 sm:px-16">
        <div className="">
          <h1 className="font-jacquard text-5xl">H</h1>
        </div>
        <div className="gap-5 font-mono font-thin uppercase text-[0.75rem]">
          <Link href="/blog">blog</Link>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;

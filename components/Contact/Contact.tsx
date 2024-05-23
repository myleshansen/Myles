import Link from 'next/link'

const Contact = () => {
  return (
    <footer className="bg-[#151717] text-[whitesmoke] mt-20 flex flex-col items-center sm:justify-between p-5 sm:p-12">
      <div className="w-full flex justify-between items-end">
        <div className="w-full">
          <p className="font-raleway_bold capitalize text-[7vw] sm:text-[2.5vw] leading-none">Connect with me<span style={{ color: "#3f9af7" }}>.</span></p>
        </div>
      </div>
      <hr className="w-full my-4 sm:my-6 " />
      <div className="w-full flex justify-between font-mono font-thin text-[0.45rem] sm:text-[0.6rem]">
        <div className="flex flex-col justify-between uppercase">
          <Link href="https://www.linkedin.com/in/myleshansen/">linkedin ↗</Link>
          <Link href="https://github.com/myleshansen">github ↗</Link>
          <Link href="mailto:myleshansen@outlook.com">myleshansen@outlook.com ↗</Link>
        </div>
        <div className='flex flex-col gap-1 items-end'>
          <p>
            <span className='font-raleway_e_light mr-1 text-[0.85rem]'>© 2024</span>
            <span className='font-raleway_e_light text-[0.85rem]'>Myles Hansen</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

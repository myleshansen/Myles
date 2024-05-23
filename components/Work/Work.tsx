import Project from "./Project/Project";

const Work = () => {
  return (
    <section className="p-5 sm:p-10">
      <div id="work" className='flex flex-col justify-evenly h-[50%] min-w-full' >
        <Project num={'01'} company={'Deloitte'} position={'Software Engineer'} yearStart={'2023'} yearEnd={'present'} />
        <hr className="bg-blue mt-3 min-w-full" />
        <Project num={'02'} company={'Festo'} position={'Software Engineer'} yearStart={'2022'} yearEnd={'2023'} />
        <hr className="bg-blue mt-3 min-w-full" />
        <Project num={'03'} company={'Leasr'} position={'React Native Developer'} yearStart={'2019'} yearEnd={'2020'} />
        <hr className="bg-black mt-3 min-w-full" />
      </div>
    </section>
  );
};


export default Work;

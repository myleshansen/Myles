import Project from "./Project/Project";

const Work = () => {
  return (
    <section>
      <div id="work" className='grid w-full h-full' >
        <Project num={'01'} logoSrc={'/festo-logo.svg'} width={200} height={200} borderRadius={false} />
        <Project num={'02'} logoSrc={'/deloitte-logo.png'} width={200} height={200} borderRadius={false} />
        <Project num={'03'} logoSrc={'/leasr-logo.png'} width={100} height={100} borderRadius={true} />
        <Project num={'04'} logoSrc={'/logo-line.svg'} width={100} height={100} borderRadius={false} />
      </div>
    </section>
  );
};


export default Work;

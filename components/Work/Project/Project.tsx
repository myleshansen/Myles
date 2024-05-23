const Project = (props: any) => {

  return (
    <div className='flex items-center font-rubik text-[0.5rem] gap-[4vw] p-3 min-w-full'>
      <div className="">
        <h1 className="font-jacquard text-[3rem] sm:text-[2rem]">{props.num}</h1>
        <h1 className="font-mono text-[0.9rem] sm:text-[1rem]">{props.company}</h1>
        <p className="text-[0.65rem] mt-1">{props.position}</p>
      </div>
      <p className="font-mono ml-auto font-thin text-[0.6rem] sm:text-[0.75rem]">{props.yearStart} - {props.yearEnd}</p>

    </div>
  );
};

export default Project;
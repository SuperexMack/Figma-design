function Heading(){
    return(
      <>
      <div className="flex absolute left-[300px] top-[250px] h-screen">
         <div className="text-center">
            <h1 className="text-5xl flex text-white">Empowering Lives Through</h1>
            <div className="mt-4 text-5xl flex text-white">
            <p>Innovative <span className="border-b-[8px] border-blue-400 font-bold"> AI </span> Technologies</p>
            </div>
            <p className="mt-8 flex text-slate-400">Finding new horizons for visionaries to accelerate their innovation and progress.</p>
            
            <div className="gap-6 mt-10 flex ">
            <button className="btn bg-violet-500 p-2 rounded-xl text-white font-bold">Explore Our Services</button>
            <button className="border-2 border-blue-400 h-[50px] rounded-xl w-[200px] text-white">Learn more</button>
            </div>

            <p className="mt-12 "><span className="text-slate-700">From </span><span className="text-slate-700">Ideas </span><span className="text-slate-500">to </span><span className="text-slate-500">Software Solutions</span> 💡✨ <span className="text-white">From Ideas to Software Solutions </span>🌟✨<span className="text-slate-500">From </span><span className="text-slate-700">Ideas</span> <span className="text-slate-700">to</span></p>

         </div>
      </div>
      </>
    )
}

export default Heading
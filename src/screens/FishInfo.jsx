import React from 'react'
import ModelViewer from '../components/ModelViewer'
import { useLocation } from 'react-router-dom'
export default function FishInfo() {
  const location = useLocation();
  const data = location.state?.data;
  console.log("Found data fishinfo:", data);
  
   
 
      

  return (
    <div>

        {/* //3d model of fish + scientific name */}
        <div className='flex flex-col md:flex-row gap-15 p-10'>
            {/* //3d model */}
           <div>    
                
                <ModelViewer data={data.Img}/>
                {/* <img src="/Mock-Model.png" alt="3D Model of Fish" /> */}
           </div>

           <div className='flex flex-col gap-5'>
                {/* //scientific name */}
                <div>
                    <div className='flex gap-2 items-baseline'>
                        <p className='text-3xl font-bold capitalize'>{data.Sname}|</p>
                         <p className='text-3xl font-bold opacity-11 capitalize'>Common name</p>
                    </div>
                    <p className='opacity-12 text-xl capitalize'>{data.Kdom} → {data.Plum} → {data.Cl} → {data.Or} → {data.Fam} → {data.Gen} → {data.Sname}</p>
                </div>
                {/* //general desc */}
                <div>
                    <p className='py-5 text-2xl font-bold'>General Desc</p>
 
                    <p className="text-justify max-w-xl break-words whitespace-normal leading-relaxed capitalize">
                        {data.Desc}
                    </p>

                </div>
           </div>
        </div>
        
        {/* //habitat/Migration +Distribution */}
        <div className='flex justify-around gap-10 p-10 flex-col md:flex-row'>
            {/* //Distribution */}
            <div className='max-w-lg'>
                <p className='font-semibold text-xl'>Distribution</p>
                <ul className="max-w-xl whitespace-normal break-words leading-relaxed list-disc ml-5 space-y-1 capitalize">
                    {data.Dist?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>


                
            </div>

            {/* //Habitat/Migration */}
            <div className='max-w-lg'>
                <p className='font-semibold text-xl '>Habitat/Migration</p>
                    {/* Habitat as a bulleted list */}
                    <div className="max-w-xl whitespace-normal break-words leading-relaxed">
                    <ul className="list-disc ml-5 space-y-1 capitalize">
                        {data.HandM.habitat?.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>

                    {/* Migration as a single string */}
                    <p className="mt-2 capitalize">{'\u2022'} {data.HandM.migration}</p>
            </div>


            </div>

        </div>

        {/* Life cycle |size + Uses */}
        <div className='flex justify-around gap-10 p-10 flex-col md:flex-row'>
            {/* //Life cycle |Size */}
            <div>
                <p className='font-semibold text-xl'>Life Cycle | Size</p>

                <ul className="max-w-[600px] whitespace-normal break-words leading-relaxed list-disc ml-5 space-y-1 capitalize">
                    {data.LCS.lifeCycle?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>


                <ul className="max-w-xl whitespace-normal break-words leading-relaxed list-disc ml-5 space-y-1 capitalize">
                    {data.LCS.size?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>

            {/* //Uses */}
            <div>
                <p className='font-semibold text-xl'>Uses</p>
                <ul className="max-w-xl whitespace-normal break-words leading-relaxed list-disc ml-5 space-y-1 capitalize">
                    {data.using?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>

        </div>

        {/* //Threats | Diseases */}
        <div className='flex justify-around gap-10 p-10 flex-col md:flex-row'>
            <div>
                <p className='font-semibold text-xl'>Threats | Diseases</p>
                
                <ul className="max-w-xl whitespace-normal break-words leading-relaxed list-disc ml-5 space-y-1 capitalize">
                    {data.tad.diseases?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>


                <ul className="max-w-xl whitespace-normal break-words leading-relaxed list-disc ml-5 space-y-1 capitalize">
                    {data.tad.threats?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>

            <div></div>
        </div>

    </div>
  )
}
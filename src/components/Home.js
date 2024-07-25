import React, { useEffect, useState } from 'react';
function Home() {
    const [news, setNews] = useState([])
    const[shottitle,setShorttitle]=useState(false)
    const[shortdiscription,setShortdiscription]=useState(false)
    async function Sasi() {
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7c707480a5a04a2cb20f59c88b1e79be"
        let vr = await fetch(url)
        let vvr = await vr.json()
        setNews(vvr.articles)
    }
    useEffect(() => {
        Sasi()
    }, [])
    return (
        <div>
            <div className='sm:flex sm:flex-row sm:flex-wrap sm:place-content-center grid  text-center '>
                {
                    news.map((value,index)=>{
                        return(<div className='bg-blue-100 rounded-lg space-y-1 px-4 py-5 sm:mx-6 justify-around mt-6 sm:w-80 sm:mt-8 sm:rounded-lg' key={index}>
                        <img src={value.urlToImage}></img>
                        <p><span className='text-red-900'>title : </span> {shottitle ?value.title: value.title.slice(0,20)}<button onClick={()=>setShorttitle(!shottitle)}> { shottitle?null:`......`}</button></p>
                        <p><span className='text-red-900'>Description : </span> {shortdiscription ?value.description:value.description.slice(0,40)}<button onClick={()=>setShortdiscription(!shortdiscription)}> { shortdiscription?null:`......`}</button></p>
                        <p><span className='text-red-900'>Authore : </span>{value.author}</p>
                    </div>)
                    })
                }
                
            </div>
        </div>
    )
}
export default Home;

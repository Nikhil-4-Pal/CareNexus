import React from 'react'
import { Link } from 'react-router-dom'


const articles = [
    {
        articleName : "HOW TO TRAIN YOUR DRAGON",
        articleLink : "https://blog.uclfilm.com/2023/11/14/how-to-train-your-dragon-alternative-masculinity-and-the-universal-yearning-to-be-understood/"
    },
    {
        articleName : "HOW TO TRAIN YOUR DRAGON",
        articleLink : "https://blog.uclfilm.com/2023/11/14/how-to-train-your-dragon-alternative-masculinity-and-the-universal-yearning-to-be-understood/"
    },
    {
        articleName : "HOW TO TRAIN YOUR DRAGON",
        articleLink : "https://blog.uclfilm.com/2023/11/14/how-to-train-your-dragon-alternative-masculinity-and-the-universal-yearning-to-be-understood/"
    },
    {
        articleName : "HOW TO TRAIN YOUR DRAGON",
        articleLink : "https://blog.uclfilm.com/2023/11/14/how-to-train-your-dragon-alternative-masculinity-and-the-universal-yearning-to-be-understood/"
    },
    {
        articleName : "HOW TO TRAIN YOUR DRAGON",
        articleLink : "https://blog.uclfilm.com/2023/11/14/how-to-train-your-dragon-alternative-masculinity-and-the-universal-yearning-to-be-understood/"
    },
]

function RelatedArticle() {
  return (
    <div className=' w-full h-full overflow-scroll no-scrollbar ' >
        { articles.map((item) =>{
            <Link className=' text-xl text-white font-Raleway ' to={`/CareNexus/{item.articleLink}`} >{item.articleName}</Link>
        } ) }
    </div>
  )
}

export default RelatedArticle
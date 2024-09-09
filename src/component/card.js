/* eslint-disable no-unused-vars */  
// eslint-disable-next-line  
import React from 'react';  
import { useSelector } from 'react-redux';  
import moment from 'moment';  
import { Link } from 'react-router-dom';  

const Card = ({ data, trending, index, media_type }) => {  
  const imageURL = useSelector((state) => state.movieo.imageURL);  

  if (!data || !data.poster_path) {  
    return <div className="w-full min-w-[230px] max-w-[230px] h-80 flex items-center justify-center text-gray-500">No image available</div>;  
  }  

  const mediaType = data.media_type ?? media_type;  

  return (  
    <Link to={`/${mediaType}/${data.id}`} className=' container w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded relative hover:scale-110 transition-transform duration-300'>  
      <img  
        className='w-full h-full object-cover'  
        src={`${imageURL}${data.poster_path}`}  
        alt={data.title || 'Movie Poster'}  
        loading="lazy"  
      />   

      <div className='absolute top-1'>  
        {trending && (   
          <div className='py-1 px-8 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden p-2'>#{index} trending</div>  
        )}  
      </div>  

      <div className='absolute bottom-0 h-16 w-full backdrop-blur-1xl bg-black/60 p-2'>  
        <h2 className='text-ellipsis line-clamp-1 text-lg font-bold'>{data.title || data.name}</h2>  
        <div className='text-sm text-neutral-400 flex justify-between items-center'>  
          {/* التأكد من وجود تاريخ الإصدار */}  
          <p>{data.release_date ? moment(data.release_date).format("MMMM Do YYYY") : 'Release date not available'}</p>  
          {/* التأكد من وجود تقييم */}  
          <p className='bg-black text-white px-1 rounded-full text-xs'>  
            Rating: {data.vote_average ? Number(data.vote_average).toFixed(1) : 'N/A'}  
          </p>  
        </div>  
      </div>  
    </Link>  
  );  
};  

export default Card;
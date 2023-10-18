import React, { useState } from 'react'
import { EmojiIcon, GalleryIcon, GifIcon, PlaceIcon, PollIcon, ScheduleIcon } from '../icons/Icon';
// import db from '../firebase';

function TweetArea() {
    const[content,setContent]=useState('')
    

    
  return (
    <div className='flex flex-col flex-1 mt-2 px-2'>

    
    <textarea className='w-full text-xl placeholder-gray-light outline-none overflow-hidden resize-none bg-transparent'
    placeholder='What is happening?!'
    onChange={e=> setContent(e.target.value)}
    value={content}
    ></textarea>
     <div className='flex items-center justify-between'>
    <div className='flex      items-center justify-center -ml-3 '>
        <div className='w-10 h-10  flex items-center justify-center hover:bg-[#E8F5FD] rounded-full transition-colors duration-200'>
        <GalleryIcon />

        </div>
        <div className='w-10 h-10 flex items-center justify-center hover:bg-[#E8F5FD] rounded-full transition-colors duration-200'>
        <GifIcon/>

        </div>
        <div className='w-10 h-10 flex items-center justify-center hover:bg-[#E8F5FD] rounded-full transition-colors duration-200'>
        <PollIcon/>

        </div>
        <div className='w-10 h-10 flex items-center justify-center hover:bg-[#E8F5FD] rounded-full transition-colors duration-200'>
        <EmojiIcon/>

        </div>
        <div className='w-10 h-10 flex items-center justify-center hover:bg-[#E8F5FD] rounded-full transition-colors duration-200'>
        <ScheduleIcon/>
        </div>
        <div className='w-10 h-10 flex items-center justify-center hover:bg-[#E8F5FD] rounded-full transition-colors duration-200'>
        <PlaceIcon/>

        </div>
        
    </div>
    <button className='bg-primary-base text-white rounded-full px-4 py-2'
    
    >Post</button>
  </div>
  </div>
  )}


export default TweetArea
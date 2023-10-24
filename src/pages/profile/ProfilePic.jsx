import React from 'react'
import { useAccount } from '../../store/auth/hooks';

function ProfilePic() {
    const account = useAccount();
  return (
    <>
          <div className="absolute  top-0 max-w-[598px]">
        <img
          className="h-[250px] w-[600px]"
          src="https://wallpaperfx.com/view_image/beautiful-nature-1024x600-wallpaper-4691.jpg"
          alt=""
        />
        <img
          src={account.avatar}
          className="w-[150px] absolute bottom-[-70px] border-[5px] border-black left-5 h-[150px]  rounded-full"
          alt=""
        />
      </div>
      <div className="">
        <p>{account.fullName}</p>
      </div>
    </>
  )
}

export default ProfilePic
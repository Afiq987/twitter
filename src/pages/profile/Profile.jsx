
import Header from "./Header";


import ProfilePic from "./ProfilePic";
import MyPosts from "./MyPosts";

export default function Profile() {

  return (
    <>
      <Header />
    <ProfilePic/>
    <div className="mt-[250px]">
    <MyPosts/>
    </div>

    </>
  );
}

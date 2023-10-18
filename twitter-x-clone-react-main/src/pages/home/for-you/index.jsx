// import { posts as postData } from "~/mock/posts";

import Post from "../../../components/post";
import { WVList } from "virtua";
import { useEffect, useState } from "react";
import {
  EmojiIcon,
  GalleryIcon,
  GifIcon,
  PlaceIcon,
  PollIcon,
  ScheduleIcon,
} from "../postArea/homePostIcons";

export default function ForYou() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  const [img, setImg] = useState("");

  const post = async () => {
    const response = await fetch(
      "https://twitter-cd437-default-rtdb.firebaseio.com/post.json",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ img, value }),
      }
    );
  };

  useEffect(() => {
    fetch("https://twitter-cd437-default-rtdb.firebaseio.com/post.json")
      .then((res) => res.json())
      .then((data) => setPosts(Object.values(data)));
  }, []);

  const handleFileChange = (event) => {
    // const fileInput = document.getElementById("fileInput");
    // fileInput.click();

    // const handleFileChange = (event) => {
      const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        setImg(base64String);
      };

      reader.readAsDataURL(file);
    }
console.log(img);

  };
  return (
    <div className="for-you flex flex-wrap ">
      <div className="flex space-x-4 px-4 py-3">
        <img
          src="https://pbs.twimg.com/profile_images/1706362039935938560/_epNszdP_400x400.jpg"
          alt="profileFoto"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex flex-col flex-1 mt-2 p-2">
        <textarea
          className="w-full text-xl placeholder-gray-light outline-none overflow-hidden resize-none bg-transparent"
          placeholder="What is happening?!"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></textarea>
        <div className="flex items-center justify-between">
          <div className="flex      items-center justify-center -ml-3 ">
            <div
              className="w-10 h-10 flex items-center justify-center   rounded-full transition-all duration-200"
            
            >
              <GalleryIcon />
              <input
                id="fileInput"
                className="w-10 h-10 opacity-0 absolute"
                type="file"
                multiple
                onChange={handleFileChange}
              />
            </div>
            <div className="w-10 h-10 flex items-center justify-center    rounded-full transition-all duration-200">
              <GifIcon />
            </div>
            <div className="w-10 h-10 flex items-center justify-center   text-white   rounded-full transition-colors duration-200">
              <PollIcon />
            </div>
            <div className="w-10 h-10 flex items-center justify-center   text-white rounded-full  transition-colors duration-200">
              <EmojiIcon />
            </div>
            <div className="w-10 h-10 flex items-center justify-center   text-white rounded-full  transition-colors duration-200">
              <ScheduleIcon />
            </div>
            <div className="w-10 h-10 flex items-center justify-center   text-white rounded-full  transition-colors duration-200">
              <PlaceIcon />
            </div>
          </div>
          <button
            className="bg-[color:var(--color-primary)] hover:opacity-90 text-white rounded-full px-4 py-2"
            onClick={post}
          >
            Post
          </button>
        </div>
      </div>
      <WVList>
        {posts.map((post, key) => (
          <Post {...post} key={key} />
        ))}
      </WVList>
      <div className="rounded-md">
        <img src={`data:image/jpeg;base64,${img}`} alt="foto" />
      </div>
    </div>
  );
}
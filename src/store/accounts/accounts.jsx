import { useEffect, useState } from "react";


const [account,setAccount]=useState([])
useEffect(() => {
    fetch("https://twitterlogin-ef68a-default-rtdb.firebaseio.com/users/3ThgF3CV7SduEth1CcqMQyDbc4E3/posts.json")
    .then(res=>res.json())
    .then(data=>setAccount(data))
}, []);

console.log(account,"acountdata");
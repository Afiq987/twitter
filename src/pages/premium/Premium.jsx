// import React from 'react'
// import { XIcon } from '../home/postArea/homePostIcons'
// import { Link } from 'react-router-dom'

// function Premium({visibleForm,setVisibleForm}) {
 
//   console.log(visibleForm);
//   return (
//     <div className='relative top-[-500px] left-0 bg-gray-500/10 w-screen h-screen'>
//  <div className="w-[600px] absolute top-[50%] left-[30%] bg-[var(--background-primary)]">
//   <button >
//     <XIcon/>
//   </button>
//    <h1>Who are you?</h1>
//    <p>Choose the right subscription for you:</p>
//    <div>
//     <button>
//         <p>Premium</p>
//         <p>I am an individual</p>
//         <p>For individuals and creators</p>
    
//     </button>
//     <button>
//         <p>Premium</p>
//         <p>I am an individual</p>
//         <p>For individuals and creators</p>
    
//     </button>
//    </div>
// </div>
//     </div>
   
//   )
// }

// export default Premium


import React from 'react'
import { XIcon } from '../home/postArea/homePostIcons'
import { Link } from 'react-router-dom'

function Premium({ visibleForm, setVisibleForm }) {
  
  
  const handleClose = () => {
    setVisibleForm("");
    console.log(visibleForm);
  };

  return (
    <div className={`relative ${visibleForm === "premium" ? "" : "hidden"} top-[-500px] left-0 bg-gray-500/10 w-screen h-screen`}>
      <div className="w-[600px] absolute top-[50vh] left-[30%] bg-[var(--background-primary)]">
        <button onClick={handleClose} className='p-1' >
          <XIcon />
        </button>
        <h1>Who are you?</h1>
        <p>Choose the right subscription for you:</p>
        <div>
          <button>
            <p>Premium</p>
            <p>I am an individual</p>
            <p>For individuals and creators</p>
          </button>
          <button>
            <p>Premium</p>
            <p>I am an individual</p>
            <p>For individuals and creators</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Premium;

import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

function Buttons() {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState({
    color: "",
    message: "",
  });
  const [modal, setModal] = useState(false)

  const clickHandler = () => {
    const fetchData = async () => {
      setModal(true)
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        if (response.ok) {
          setMessage({color: 'green', message: "SUCCESS"})
          setState(data);
        } else {
          setMessage({color: 'red', message: "ERROR"})
          throw new Error();
        }
        console.log(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
        setTimeout(() => {
          setModal(false)
        }, 500);
      }
    };
    fetchData();
  };

  return (
    <div>

      {modal && <WrapperModal color = {message.color}>
        {isLoading && <h2>Loading...</h2>}
        <h1>{message.message}</h1>
      </WrapperModal>}
      <ButonsStyle onClick={clickHandler}>Click</ButonsStyle>
    </div>
  );
}

export default Buttons;

const WrapperModal = styled.div`
background-color: ${(props) => props.color};
  width: 20%;
  display: flex;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0.1px #adadad;
  justify-content: center;
  margin: auto;
`;

const ButonsStyle = styled.button`
  width: 100px;
  height: 40px;
  background-color: #070bf6;
  font-size:30px;
  border-radius:8px;
  margin-left:40px;
  color:azure;
`











// -----------------------------------------------------------------------


// import React, { useState } from 'react'

// const Buttons = () => {
//     const [name,setName] = useState('')
//     const [color,setColor] = useState('')
//     const [arr,setArr] = useState([])
//     console.log(name);
//     console.log(color);
//     console.log(arr);

//     const nameValue = (e) =>{
//         setName(e.target.value)
//     }
//     const colorValue = (e) =>{
//         setColor(e.target.value)
//     }
//     const clickHandler = () =>{
//         const obj = {
//             name:name,
//             color:color,
//         }
//         setArr((arr)=>[...arr,obj])
//     }

//   return (
//     <div>
//         <input onChange={nameValue} placeholder='NAME' type="text" />
//         <input onChange={colorValue} placeholder='COLOR' type="text" />
//         <button onClick={clickHandler}>click</button>

//         {arr.map((el)=>(
//             <h1 style={{backgroundColor:el.color}}>{el.name}</h1>
//         ))}
//     </div>
//   )
// }

// export default Buttons

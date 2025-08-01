import React, { useRef, useState } from 'react'

const File = ({initialState}) => {
  console.log(initialState)
  const [data, setData] = useState(initialState);

  const dragItem = useRef();
  const dargContainer = useRef();

  const handleDragStart = (e, item, container)=>{
     e.target.style.opacity = "0.5";
     dragItem.current = item;
     dargContainer.current = container;
  }
  
  const handleDragEnd = (e)=>{
    e.target.style.opacity = "1";
  }

  const handleDrop = (e, targetContainer)=>{
      const item = dragItem.current;
      const sourceConatiner = dargContainer.current;
      setData((prev)=>{
        const newData = {...prev};
        newData[sourceConatiner] = newData[sourceConatiner].filter((i) => i !== item);
        newData[targetContainer] = [...newData[targetContainer], item];
        return newData;
      })
  }

  const handleDragOver = (e) =>{
    e.preventDefault();
  }
  
  return (
    <div style={{display:"flex", justifyContent: "center",gap:"3rem", marginTop: "12rem"}}>
     {
      Object.keys(data).map((container, index)=>{
      return <div 
      key={index}
      onDrop={(e)=>handleDrop(e, container)}
      onDragOver={handleDragOver}
      style={{
        background: "#000c66", 
        color:"#edf2f3",
        padding:"1rem",
        width:250, 
        minHeight:300, 
        textAlign: "center",
        letterSpacing:"0.8px",
        textTransform:"uppercase",
        borderRadius: "0.5rem"
        }}>
        <h2>{container}</h2>
        {
          data[container].map((item, idx)=>{
            return <div 
            key={idx} 
            draggable
            onDragStart={(e)=>handleDragStart(e, item, container,)}
            onDragEnd={handleDragEnd}
            style={{
             userSelect:"none",
             padding:16, 
             background:"#fff",
             color:"#212121",
             borderRadius: "0.5rem", 
             textTransform: "capitalize",
             margin:"0 0 8px 0", 
             cursor:"move"
             }}>
            {item}
            </div>
          })
        }
      </div>
     })
    }
</div>
  )
}

export default File



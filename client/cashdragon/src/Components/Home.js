import React, { useEffect , useState } from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CashDragonLogo2 from './CashDragonLogo.png'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import "../App.css"
import { Dustbin } from './Dustbin';



import Picture  from './Picture'
import { useDrop } from "react-dnd";
import { Dustbin2 } from './Scales/Dustbin2';
import { Dustbin3 } from './Scales/Dustbin3';
import { Dustbin4 } from './Scales/Dustinbin4';
import  Ledger  from './Ledger'

const PictureList = [
  {
    id: 1,
    url: "https://media.istockphoto.com/id/182751542/photo/bent-five-dollar-bill.jpg?s=2048x2048&w=is&k=20&c=r3LkyYdRCIHIextldW1g1LQ2Zs9BkdDYxiTA0l9dbGI=",
    value: 5
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/182725442/photo/bent-ten-dollar-bill.jpg?s=2048x2048&w=is&k=20&c=h1rxMC-V9BPyJLVVOpQ38DsDcRcxlJA10U_9SX7A1X4=",
    value: 10
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/471243697/photo/twenty-dollar-bill-united-states-currency-on-white.jpg?s=2048x2048&w=is&k=20&c=-IdnPodDH4Bv37O0LggxwbBAj4h9AeqV4JROmBSf300=",
    value: 20
  },
  {
    id: 4,
    url: "https://media.istockphoto.com/id/184297007/photo/fifty-dollar-bill.jpg?s=2048x2048&w=is&k=20&c=UwKklO27J_juxuXvQuWwdQLBFPXEJPBxRHA8OiTMvQc=",
    value: 50
  },
  {
    id: 5,
    url: "https://media.istockphoto.com/id/182772516/photo/hundred-bucks-waving.jpg?s=2048x2048&w=is&k=20&c=S1dFNvoYCsxBfp5Y7coLhf7rQARgkInBm69YNCbNcXE=",
    value: 100
  },
];




function Home() {
  const [board, setBoard] = useState([]);
  const [dustbin2, setDustbin2] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToDustbin2(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToDustbin2 = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setDustbin2((dustbin2) => [...dustbin2, pictureList[0]]);
  };

  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>


      <Dustbin2 />
      <Dustbin3 />
      <Dustbin4 />

      <Ledger />

    </>
  );
}

export default Home;
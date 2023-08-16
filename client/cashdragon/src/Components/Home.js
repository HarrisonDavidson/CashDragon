import React, { useEffect , useState } from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CashDragonLogo2 from './CashDragonLogo.png'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


import Picture  from './Picture'
import { useDrop } from "react-dnd";

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
    // id: 4,
    url: "https://media.istockphoto.com/id/184297007/photo/fifty-dollar-bill.jpg?s=2048x2048&w=is&k=20&c=UwKklO27J_juxuXvQuWwdQLBFPXEJPBxRHA8OiTMvQc=",
    value: 50
  },
  {
    id: 5,
    url: "https://media.istockphoto.com/id/182772516/photo/hundred-bucks-waving.jpg?s=2048x2048&w=is&k=20&c=S1dFNvoYCsxBfp5Y7coLhf7rQARgkInBm69YNCbNcXE=",
    value: 100
  }
]


export const  Home = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}


// // fake data generator
// const getItems = (count, offset = 0) =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k + offset}-${new Date().getTime()}`,
//     content: `item ${k + offset}`
//   }));

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

// /**
//  * Moves an item from one list to another list.
//  */
// const move = (source, destination, droppableSource, droppableDestination) => {
//   const sourceClone = Array.from(source);
//   const destClone = Array.from(destination);
//   const [removed] = sourceClone.splice(droppableSource.index, 1);

//   destClone.splice(droppableDestination.index, 0, removed);

//   const result = {};
//   result[droppableSource.droppableId] = sourceClone;
//   result[droppableDestination.droppableId] = destClone;

//   return result;
// };
// const grid = 8;

// const getItemStyle = (isDragging, draggableStyle) => ({
//   // some basic styles to make the items look a bit nicer
//   userSelect: "none",
//   padding: grid * 2,
//   margin: `0 0 ${grid}px 0`,

//   // change background colour if dragging
//   background: isDragging ? "lightgreen" : "grey",

//   // styles we need to apply on draggables
//   ...draggableStyle
// });
// const getListStyle = isDraggingOver => ({
//   background: isDraggingOver ? "lightblue" : "lightgrey",
//   padding: grid,
//   width: 250
// });

//   const [state, setState] = useState([getItems(10), getItems(5, 10)]);

//   function onDragEnd(result) {
//     const { source, destination } = result;

//     // dropped outside the list
//     if (!destination) {
//       return;
//     }
//     const sInd = +source.droppableId;
//     const dInd = +destination.droppableId;

//     if (sInd === dInd) {
//       const items = reorder(state[sInd], source.index, destination.index);
//       const newState = [...state];
//       newState[sInd] = items;
//       setState(newState);
//     } else {
//       const result = move(state[sInd], state[dInd], source, destination);
//       const newState = [...state];
//       newState[sInd] = result[sInd];
//       newState[dInd] = result[dInd];

//       setState(newState.filter(group => group.length));
//     }
//   }

//   return (
//     <div style={{ backgroundImage: `url(${CashDragonLogo2})` }}>
//       <>
//       </>
//       <p></p>
//       <button
//         type="button"
//         onClick={() => {
//           setState([...state, []]);
//         }}
//       >
//         Add New Scale
//       </button>
//       <button
//         type="button"
//         onClick={() => {
//           setState([...state, getItems(1)]);
//         }}
//       >
//         Generate Gold
//       </button>
//       <div style={{ display: "flex" }}>
//         <DragDropContext onDragEnd={onDragEnd}>
//           {state.map((el, ind) => (
//             <Droppable key={ind} droppableId={`${ind}`}>
//               {(provided, snapshot) => (
//                 <div
//                   ref={provided.innerRef}
//                   style={getListStyle(snapshot.isDraggingOver)}
//                   {...provided.droppableProps}
//                 >
//                   {el.map((item, index) => (
//                     <Draggable
//                       key={item.id}
//                       draggableId={item.id}
//                       index={index}
//                     >
//                       {(provided, snapshot) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           style={getItemStyle(
//                             snapshot.isDragging,
//                             provided.draggableProps.style
//                           )}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               justifyContent: "space-around"
//                             }}
//                           >
//                             {item.content}
//                             <button
//                               type="button"
//                               onClick={() => {
//                                 const newState = [...state];
//                                 newState[ind].splice(index, 1);
//                                 setState(
//                                   newState.filter(group => group.length)
//                                 );
//                               }}
//                             >
//                               Paid
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           ))}
//         </DragDropContext>
//       </div>
//     </div>
//   );
//                           }

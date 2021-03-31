import React from 'react';
const info = ({text}) =>{
    return (
        <>
          {text.map((txt) => {
            const { title,description,members,warenimg} = txt ;
            return (
              <div id="article" key={description} className='textbox'>
                  <div id="text-box-one">
               <h1 id="txt-title">{title}</h1>
               <img id="warenimg" src={warenimg}></img>
               <div id="who">
                   {description}
               </div>
               <h1 id="opensource-h1">Open Source</h1>
               <img id="githubimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Q92-5JeMg3tibiBXBDijMdMpsRPklFYzfA&usqp=CAU"></img>
               <div id="opensource">
               Open Sourcing has no doubt changed many parts in a life of a developer's journey. While not all are into open source those who have not taken part in it still can't deny that it has somehow affected some parts of their life as a developer.
               </div>
               </div>
              </div>
            );
          })}
        </>
      );
    };
    
export default info;
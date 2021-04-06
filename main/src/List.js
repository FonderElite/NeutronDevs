import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article id="article" key={id} className='person'>
            <img src={image} alt={name} />
            <div id="list">
              <h4>{name}</h4>
              <p id="age">{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
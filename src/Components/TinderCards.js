import React from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"
function TinderCards() {
  //Hooks are fucntions that can be used in React components.
  const [cars]=React.useState([
    {
      name:"Tesla",
      url:"https://techcrunch.com/wp-content/uploads/2020/05/Cybertruck-4.png?w=730&crop=1"   
    },
    {
      name:"BMW",
      url:"https://images.hgmsites.net/hug/bmw-i8_100634676_h.jpg"   
    },
    {
      name:"Lykan",
      url:"https://www.wmotors.ae/img/wmotors_lykanhypersport_overview_img_01.jpg"   
    },
    {
      name:"Porche",
      url:"https://www.cnet.com/a/img/resize/3d64193012acdb130b82798a577f9fbcd60b2b4e/2021/07/08/8ef95488-8255-4dfa-b6fe-9ea1458f1732/2021-porsche-911-carrera-s-cabriolet-2.jpg?auto=webp&fit=crop&height=675&width=1200"   
    }

  ]);
  return (
    <div className='card-container'>
      {cars.map(car =>(
        <TinderCard className='swipe' key={car.name} preventSwipe={['up','down']}>
          <div  style={{backgroundImage:`url(${car.url})`}} className="card">
            <h2>{car.name}</h2>
          </div>
        </TinderCard>
    ))}
    </div>
  )
}

export default TinderCards
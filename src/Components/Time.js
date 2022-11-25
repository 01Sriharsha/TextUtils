import React from 'react'

export default function Time() {

    const date = new Date();
    const currentTime = date.getHours();

    let greeting;

    const customStyle = {
        color : ''
    }

    if(currentTime < 12){
        greeting = "Good Morning"
        customStyle.color = "coral";
    }
    else if(currentTime < 18){
        greeting = "Good Afternoon"
        customStyle.color = "green";
    }
    else{
        greeting = "Good Evening"
        customStyle.color = "blue";
    }

  return (
    <h5 style={customStyle}>{greeting}</h5>
  )
}

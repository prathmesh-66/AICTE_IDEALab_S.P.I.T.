
import tempcardata from "./tempcardata";
import "./photos.css"
import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Photos() {

  const [photo,setPhoto]=useState({})
  const location=useLocation();
 
 useEffect(()=>{
  const path=location.pathname
  console.log(path)
  const id=path.split('/')[2];
  console.log(id)
  const value='/photo/${id}'
  var result = tempcardata.filter(function(card) {
    return card.id==String(id);
  });
  console.log(result)
  setPhoto(result[0]);
 })

  return (
    <div className='photo_space'>
      {photo!=null && photo.photos!=null && photo.photos.map((phot, index) => {
              return (
                
                <div  key={index}>
                  <img className='photo_img' src={phot} alt='im'/>
                  <p></p>
                </div>
              );
            })}

            <hr />
    </div>
  );
}
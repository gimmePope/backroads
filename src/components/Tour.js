import React from 'react'
import Title from './Title'
import { tourInfos } from '../data'


const Tour = () => {
  return (
    <section className="section" id="tours">
    <Title titleP1="featured" titleP2="tours" />

    <div className="section-center featured-center">
      {
          tourInfos.map( tourInfo =>{
            return (
              <article className="tour-card" key={tourInfo.id}>
              <div className="tour-img-container">
                <img src={tourInfo.imgScr} className="tour-img" alt="" />
                <p className="tour-date">{tourInfo.tourDate}</p>
              </div>
              <div className="tour-info">
                <h4>{tourInfo.title}</h4>
                <p>
                  {tourInfo.text}
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {tourInfo.location}
                  </p>
                  <p>{tourInfo.duration} days</p>
                  <p>from ${tourInfo.cost}</p>
                </div>
              </div>
            </article>
            )
          }


          )
      }

    </div>
  </section>
  )
}

export default Tour
import React from 'react'
import './experience.css'
import { Carousel } from 'react-bootstrap'
import Sample from '../../assets/SampleVid.mp4'
import ReactPlayer from 'react-player'

const Experience = () => {
  const videoProperites = [
    {
      id: 1,
      title: "Video 1",
      src: Sample,
      credit: "Video by Shiro",
    } ,
    {
      id: 2,
      title: "Video 2",
      src: Sample,
      credit: "Video by Shiro 2",
    } ,
    {
      id: 3,
      title: "Video 3",
      src: Sample,
      credit: "Video by Shiro 3",
    } ,
  ]

  return (
    <section id='experience'>
      <Carousel>
        {videoProperites.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer 
                url = {videoObj.src}
                width="100%"
                pip={true}
                playing={true}
              />
              <Carousel.Caption>
                  <h3 id = "h3">{videoObj.title}</h3>
                  <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </section>
  )
}

export default Experience
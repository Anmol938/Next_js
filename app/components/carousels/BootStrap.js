"use client"
    //carousels/Bootstrap.js
    import { useState } from "react";
    import { items } from "./../../../public/Items.json";
    import { Carousel } from "react-bootstrap";
    //import "bootstrap/dist/css/bootstrap.min.css";
    //import styles from "../styles/Bootstrap.module.css";
    export default function BootstrapCarousel() {
      const { bootstrap } = items;
      const [index, setIndex] = useState(0);
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
      return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {bootstrap.map((item) => (
            <Carousel.Item key={item.id}  interval={4000}>
              <img src={item.imageUrl} alt="slides" />
              <Carousel.Caption >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <button >Visit Docs</button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      );
    }


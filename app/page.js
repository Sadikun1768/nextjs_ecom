"use client";

import Container from "./components/Container";
import ProductCard from "./components/ProductCard";
import SwiperComponent from "./components/SwiperComponent";
import SwiperTwoComponent from "./components/SwiperTwo";

export default function Home() {
  return (

    <Container className="p-10 bg-shop-light-pink">
    
      {/* <Banner /> */}
      
        <SwiperComponent />

      <div className="py-10"> 

       <ProductCard />
       
      </div>
      <div className="py-10"> 

      <SwiperTwoComponent />
       
      </div>


    </Container>
  );
}

    

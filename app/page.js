"use client";

import Button from "./components/Button";
import Container from "./components/Container";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";


export default function Home() {
  return (

    <Container className="p-10 bg-shop-light-pink">

      <Banner />

      <div className="py-10"> 

       <ProductCard />
       
      </div>


    </Container>
  );
}

    

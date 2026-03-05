"use client";
import Button from "./components/Button";
import Container from "./components/Container";

export default function Home() {
  return (
    <Container className="p-10 bg-shop-light-pink">
 
        <h3 className="mt-3 text-xl font-semibold">  Home Page</h3>
        <p className="mt-5">Dives into the banal horror of Jimmy Fallon, the surprising politics of Texas’s original cowboys, and the hidden history behind a coal mining murder spree. Beyond breathtaking cover art by Myriam Wares, you’ll discover the beauty of monster-hunting comic Bitter Root, and we sit down with Ben & Jerry’s founder Ben Cohen to hear why he pivoted from making ice cream to trying to stop the U.S. war machine. You’ll find an op-ed on the attention crisis from the Academy Award-winning filmmaker Adam McKay.</p>
  
    <Button onClick={() => alert("!!Checked Me")}>Buy Now</Button>

    </Container>
  );
}

    

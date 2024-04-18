import React from "react";
import hotel from "./hotel.jpg";
import food from "./food.jpg";
import delivery from "./NIGHTHAWKS.png"
import "./About.css"
function About(){
    return(
        <div>
            <h1>About</h1>
            <div className="Asub1">
                <div>
                   Nighthawk Delivery is a service that delivers food from local restaurants in Pulivendula, Kadapa and Bangalore. You can order food online on one call. You can pay for your order online or at delivery with cash, credit card, or UPI. Nighthawk Delivery offers a variety of cuisines, such as Dosa, Biriyani, Pizza, Sandwiches, salads, and more. You can also request special dietary options, such as gluten-free, vegan, or vegetarian. Nighthawk Delivery is a convenient and affordable way to enjoy delicious food at home or work.
                </div>  
                <div>
                    <img src={hotel}></img>
                </div>
            </div>
            <div className="Asub1">
                <div>
                    <img src={food}></img>
                </div>
                <div>
                Nighthawk Delivery is a service that delivers food from local restaurants in Pulivendula, Kadapa and Bangalore. You can order food online on one call. You can pay for your order online or at delivery with cash, credit card, or UPI. Nighthawk Delivery offers a variety of cuisines, such as Dosa, Biriyani, Pizza, Sandwiches, salads, and more. You can also request special dietary options, such as gluten-free, vegan, or vegetarian. Nighthawk Delivery is a convenient and affordable way to enjoy delicious food at home or work.
                </div>
            </div>
            <div className="Asub1">
                <div>
                Nighthawk Delivery is a service that delivers food from local restaurants in Pulivendula, Kadapa and Bangalore. You can order food online on one call. You can pay for your order online or at delivery with cash, credit card, or UPI. awk Delivery offers a variety of cuisines, such as Dosa, Biriyani, Pizza, Sandwiches, salads, and more. You can also request special dietary options, such as gluten-free, vegan, or vegetarian. Nighthawk Delivery is a convenient and affordable way to enjoy delicious food at home or work.
                </div>
                <div>
                    <img src={delivery} height={300}></img>
                </div>
            </div>
        </div>
    )
}
export default About;
import { useState } from "react";

import ReviewCard from "./components/Review";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" ">
      <ReviewCard
        username="DoggyToast"
        reviewTitle="Perfect E-Commerce Website"
        reviewText="Perfect for people like me. The prices are very high, but the shopping experience was a blast. The website was very user-friendly, and the customer service is good. The delivery service was also lightning fast! I can't imagine another e-commerce site affecting me as such. I'm a lifetime customer. Very impressed "
        replyText="Thank you so much for leaving a positive review. we appreciate your honest opinion "
        date="16 February, 2024"
      />
      {/* <Navbar /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;

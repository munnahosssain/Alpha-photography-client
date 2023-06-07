import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import image5 from "../../../assets/images/image5.png";

const Banner = () => {
  return (
    <Carousel
      showArrows={true}
      // autoPlay={true}
      useKeyboardArrows={true}
      className="text-center"
    >
      <div>
        <img src={image1} />
        <p className="legend w-2/3 absolute z-10 text-white">
          The sunrise brings a symphony of colors to the sky, as if the universe
          is rejoicing the birth of a new day. The warm golden light bathes
          everything it touches, filling hearts with hope and optimism. With the
          rising sun, dreams are rekindled and the world awakens to endless
          possibilities.
        </p>
      </div>
      <div>
        <img src={image2} />
        <p className="legend">
          The emerald green sea stretches out before me, shimmering under the
          golden rays of the sun. It is a sanctuary of life, teeming with
          vibrant corals, graceful sea turtles, and schools of shimmering fish.
          The green sea reminds us of the delicate balance of our planet and the
          importance of protecting its fragile ecosystems.
        </p>
      </div>
      <div>
        <img src={image3} />
        <p className="legend">
          Beyond the overgrown garden and weathered front porch lies an unused
          home, standing silent amidst the passage of time. It carries the
          whispers of forgotten laughter and the echoes of untold stories. This
          house, with its dormant fireplace and empty bookshelves, waits
          patiently for a new chapter to unfold, eagerly anticipating a family
          to write their own tale within its walls.
        </p>
      </div>
      <div>
        <img src={image4} />
        <p className="legend">
          The Shimul flower has also inspired art, poetry, and literature,
          capturing the hearts and imaginations of many. Its vibrant hue and
          graceful form serve as a muse for artists and writers, symbolizing
          passion, vitality, and the fleeting nature of beauty.
        </p>
      </div>
      <div>
        <img src={image5} />
        <p className="legend">
          With their vintage aesthetic and evocative imagery, old film pictures
          have the power to transport us to a different time and place. They
          capture not only faces and landscapes but also the essence of an era.
          These photographs, with their inherent nostalgia, allow us to
          reconnect with our collective past and reflect on the passage of time.
        </p>
      </div>
    </Carousel>
  );
};

export default Banner;

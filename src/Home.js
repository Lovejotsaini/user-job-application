import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";

const Home = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?limit=100")
      .then((response) => {
        const item = response.data;
        const result = item.map((user) => {
          return (
            <img src={user.download_url} height="550" width="1250" alt="" />
          );
        });
        setImage(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={image}
        responsive={responsive}
        autoPlayInterval={1000}
        autoPlayDirection="ltr"
        autoPlay={true}
        disableAutoPlayOnAction={true}
        disableButtonsControls
        disableDotsControls
        infinite={true}
        autoHeight
        autoWidth
        paddingLeft={50}
        paddingRight={50}
      />
    </div>
  );
};

export default Home;

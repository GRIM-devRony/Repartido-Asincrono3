import { Carousel } from "react-carousel-minimal";

function Carrusel() {
  const data = [
    {
      image:
        "https://imgs.search.brave.com/fHtWOHRSoEv2mTq4epO8AkbXHmYxLMA_n9p5Zwm0q-s/rs:fit:1024:709:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8tN3RZR0pRaUtE/ZDQvVUQxU0ZLVzNN/RkkvQUFBQUFBQUFB/ZEUvcGN3b1o3M1Yy/VEUvczE2MDAvVE9Z/T1RBLVNVUFJBLVRV/TklORy1zcG9ydHMt/Y2Fycy0zMTU4NjAy/My0xMDI0LTcwOS5q/cGc",
      caption: "Toyota Supra MK4 Dorado",
    },
    {
      image:
        "https://imgs.search.brave.com/gD654kOgQB5sd7kozUo6BZpNzDV22AyvfgDWEpFBLIs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/d2FsbHBhcGVydXAu/Y29tL3VwbG9hZHMv/d2FsbHBhcGVycy8y/MDE0LzEwLzI3LzQ5/NjE1NC8xMDU2MmU0/YjU5NGU3ODc3MWQz/ZTgwOTc3NWNlZDY5/ZC5qcGc",
      caption: "Toyota Supra MK4 Verde",
    },
    {
      image:
        "https://imgs.search.brave.com/2sP7YT5-rn1ZkHThZGpbfH2HHvb45hVyBQTqvTlxzAk/rs:fit:1200:1080:1/g:ce/aHR0cDovL3d3dy53/YWxscGFwZXJ1cC5j/b20vdXBsb2Fkcy93/YWxscGFwZXJzLzIw/MTQvMTAvMjcvNDk2/MTQwL2EzNzg5NWVi/ODMzMzhkZTU4ZTkw/MDExMjYwZTQ1ZmM5/LmpwZw",
      caption: "Toyota Supra MK4 Azul",
    },
    {
      image:
        "https://imgs.search.brave.com/gRDRUZPaoiE0vxy3y5ZGSDC9HFpxTpymExVd1J_0EVI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/dXAubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzEwLzQ5/NjE3MS10b3lvdGEt/c3VwcmEtdHVuaW5n/LWNhcnMtY291cGUt/amFwYW4tdHVyYm8u/anBn",
      caption: "Toyota Supra MK4 Azul y Negro",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carrusel;

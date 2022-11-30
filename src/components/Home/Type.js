import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Femme, Vie, Liberté",
          "Woman Life Liberty",
          "زن زندگی آزادی",
          "Woman Life Freedom",
          "Jin Jiyan Azadî",
          "Vrouw Leven Vrijheid",
          "امرأة حياة حرية",
          "Frau Leben Freiheit",
          "Mujer Vida Libertad",
          "Kadın Yaşam Özgürlük",
          "女性、生命、自由",
          "Donna Vita Libertà"


        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        textStyle: {
          color: "#fff",
          fontFamily: "Roboto Mono",
          fontSize: "1.4rem",
          fontWeight: "bold",
        },
      }}

    
    />
  );
}

export default Type;

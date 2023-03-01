import React from "react";
import borabora from "../assests/borabora.jpg";
import borabora2 from "../assests/borabora2.jpg";
import keywest from "../assests/keywest.jpg";
import maldives from "../assests/maldives.jpg";
import maldives2 from "../assests/maldives2.jpg";
import maldives3 from "../assests/maldives3.jpg";
import SelectCards from "./SelectCards";

const Selects = () => {
  return (
    <div className="max-w=[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectCards bg={borabora} text="Bora Bora" />
      < SelectCards bg={borabora2} text='Maldives'/>
      < SelectCards bg={keywest} text='Antigua'/>
      < SelectCards bg={maldives} text='Cozumel'/>
      < SelectCards bg={maldives2} text='Jamaica'/>
      < SelectCards bg={maldives3} text='Key West'/>
    </div>
  );
};

export default Selects;

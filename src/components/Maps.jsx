import React from "react";
import "../App.css";

function Maps() {
  return (
    <div className="maps_new">
      <iframe
        width="430"
        height="565"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=479&amp;height=565&amp;hl=en&amp;q=Eateries%20Nairobi+(Eateries)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>

    </div>
  );
}
export default Maps;

import React from "react";
import Banner from "../components/Homepage/Banner";
import EventList from "../components/Homepage/EventList";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PastEvent from "../components/Homepage/PastEvent";

function Homepage({ events }) {
  return (
    <div className="">
      <Navigation />
      <Banner />
      <EventList events={events} />
      <PastEvent />
      <Footer />
    </div>
  );
}

export default Homepage;

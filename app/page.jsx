import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore Epics Story
        <br />
      </h1>
      <p className="desc text-center mt-3 blue_gradient">
        platform for sharing and discovering captivating stories. Whether you're
        a storyteller or a reader, our platform offers a space to explore a wide
        range of narratives, from personal experiences to imaginative tales.
      </p>
      <Feed />
    </section>
  );
};

export default Home;

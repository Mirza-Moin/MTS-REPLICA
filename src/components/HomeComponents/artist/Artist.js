import React from "react";
import Button from "../../ReuseableComponents/button/Button";
import "./artist.scss";

function Artist() {
  return (
    <main className="artist">
      <aside className="left-content">
        <h1 className="titile">CERKA STUDIOS</h1>
        <p>The Meta Tiger team is dedicated to bringing awareness to and supporting the preservation of the critically endangered tiger. With just a few percent of the world’s tigers left alive, this cause has never been more vital. … </p>
        <p>As our passionate project grows, we plan to create a virtual Conservation Station where members can learn all there is to know about this incredible animal. It will be possible for Meta Tiger Society members to , support tiger organizations doing invaluable work worldwide, and even secure spots on educational trips to glimpse tigers in their natural habitats!</p>
        <p>Together, let’s make a roaring difference…</p>
        <Button title='BUTTON TEXT'/>
      </aside>
      <aside className="right-content">
      </aside>
    </main>
  );
}

export default Artist;

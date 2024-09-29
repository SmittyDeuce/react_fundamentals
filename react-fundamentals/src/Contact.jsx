import React from "react";

function Contact() {
  return (
    <>
      <form action="#" method="post">
        <input type="text" name="name" id="name" required />
        <label htmlFor="name">Name</label>

        <input type="tel" name="phone" id="phone" required/>
        <label htmlFor="number">Number</label>

        <input type="email" name="email" id="email" required />
        <label htmlFor="email">Email</label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contact
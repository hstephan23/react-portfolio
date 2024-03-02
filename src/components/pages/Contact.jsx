export default function Contact() {
  

  return (
    <section>
      <form>
        <label for="name">Name:</label><br/>
        <input type="text" id="name" placeholder="Name"></input>
        <br/>
        <label for="email">Email:</label><br/>
        <input type="email" id="email" placeholder="Email"></input>
        <br/>
        <label for="message">Message:</label><br/>
        <input type="text" id="message" placeholder="Message"></input>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    </section>
  )
};


  
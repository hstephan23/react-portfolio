import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleName = (event) => {
    event.preventDefault();

    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } 
     // Set errors state
     setErrors(errors);
  }


  const handleEmail = (event) => {
    event.preventDefault();

    const errors = {};

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
     // Set errors state
     setErrors(errors);
  }

  const handleMessage = (event) => {
    event.preventDefault();

    const errors = {};

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
     // Set errors state
     setErrors(errors);

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    // Set errors state
    setErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Perform form submission here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label><br/>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        onMouseLeave={handleName}
      />
      {errors.name && <div>{errors.name}</div>}
      <br/>
      <label htmlFor="email">Email:</label><br/>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        onMouseLeave={handleEmail}
      />
      {errors.email && <div>{errors.email}</div>}
      <br/>
      <label htmlFor="message">Message:</label><br/>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        onMouseLeave={handleMessage}
      />
      {errors.message && <div>{errors.message}</div>}
      <br/>
      <input type="submit" value="Submit"/>
    </form>
  </section>
  )
};


  
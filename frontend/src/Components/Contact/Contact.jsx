import React from "react";
import "./Contact.css";
import msg_icon from "../../Assets/msg-icon.png";
import mail_icon from "../../Assets/mail-icon.png";
import phone_icon from "../../Assets/phone-icon.png";
import location_icon from "../../Assets/location-icon.png";
import white_arrow from "../../Assets/white-arrow.png";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ef978532-d372-4c36-9244-1f9a2ad86d2f");
      //this access key and the value must da ok va apo tha ithu mail send agum
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult(`Dear Sir/Medam ${formData.get("name")}, Mail sent Successfully`);
        event.target.reset();
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          magni! Ullam porro non minus dolorum odit ipsa ad tempore ea?
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />sample@gmail.com</li>
            <li><img src={phone_icon} alt="" />123456-7890</li>
            <li><img src={location_icon} alt="" />1,rpa road, steve junction <br /> USA</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name="name"  placeholder="Enter Your Name" required/>

            <label htmlFor="">Phone Number</label>
           <input type="tel" name="phone" placeholder="Enter your mobile number " pattern="[0-9]{10}" maxLength={10} required />  

            <label htmlFor="">Write Your message Here</label>

            <textarea name="message" id="" rows='6' placeholder="Enter Your message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
        </form>
      <span dangerouslySetInnerHTML={{ __html: result }}></span>      </div>
    </div> 
  );
};

export default Contact;




// import React from "react";
// import "./Contact.css";
// import msg_icon from "../../Assets/msg-icon.png";
// import mail_icon from "../../Assets/mail-icon.png";
// import phone_icon from "../../Assets/phone-icon.png";
// import location_icon from "../../Assets/location-icon.png";
// import white_arrow from "../../Assets/white-arrow.png";

// const Contact = () => {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     const data = {
//       name: formData.get("name"),
//       phone: formData.get("phone"),
//       message: formData.get("message"),
//     };

//     try {
//       const response = await fetch("http://localhost:3001/contact/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const resultData = await response.json();

//       if (resultData.success) {
//         setResult("Mail sent successfully");
//         event.target.reset();
//       } else {
//         setResult(resultData.message);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setResult("Error sending mail");
//     }
//   };

//   return (
//     <div className="contact">
//       <div className="contact-col">
//         <h3>Send us a message <img src={msg_icon} alt="" /></h3>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
//           magni! Ullam porro non minus dolorum odit ipsa ad tempore ea?
//         </p>
//         <ul>
//           <li><img src={mail_icon} alt="" />sample@gmail.com</li>
//           <li><img src={phone_icon} alt="" />123456-7890</li>
//           <li><img src={location_icon} alt="" />1,rpa road, steve junction <br /> USA</li>
//         </ul>
//       </div>
//       <div className="contact-col">
//         <form onSubmit={onSubmit}>
//           <label htmlFor="">Your Name</label>
//           <input type="text" name="name" placeholder="Enter Your Name" required />
  
//           <label htmlFor="">Phone Number</label>
//          <input type="tel" name="phone" placeholder="Enter your mobile number " pattern="[0-9]{10}" maxLength={10} required />  
//           <label htmlFor="">Write Your message Here</label>
  
//           <textarea name="message" id="" rows='6' placeholder="Enter Your message" required></textarea>
//           <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
//         </form>
//       <span dangerouslySetInnerHTML={{ __html: result }}></span>
//       </div>
//     </div>
//   );
// };

// export default Contact;

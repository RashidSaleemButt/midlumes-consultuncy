// import React, { useState } from "react";

// const Contact = React.forwardRef((props, ref) => {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "89b07247-ac89-455a-ae54-89912038a87e");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <section className="contact" id="contact" ref={ref}>
//       <div className="contact-col">
//         <h3>SEND US YOUR PROBLEM</h3>
//         <p>
//           Just let us know where you're struggling form, fitness, or just
//           feeling like a newbie! Our new Hero of Gym Sense is here to spot you,
//           guide you, and get you lifting with confidence.
//         </p>
//         <ul>
//           <li>
//             <span className="contact-icon">&#9993;</span>
//             rashidbutt0309@gmail.com
//           </li>
//           <li>
//             <span className="contact-icon">&#128222;</span>
//             +92 309 1982012
//           </li>
//           <li>
//             <span className="contact-icon">&#127968;</span>
//             Lahore, Pakistan
//           </li>
//         </ul>
//       </div>
//       <div className="contact-col contact-form">
//         <form onSubmit={onSubmit}>
//           <input type="text" name="name" placeholder="Your Name" required />
//           <input type="email" name="email" placeholder="Your Email" required />
//           <input type="hidden" name="replyto" value="email" />
//           <textarea
//             name="message"
//             placeholder="Describe your problem..."
//             rows={5}
//             required
//           />
//           <button type="submit">Sumbit Here</button>
//         </form>
//         <span>{result}</span>
//       </div>
//     </section>
//   );
// });

// export default Contact;


import React, { useState } from "react";

const Contact = React.forwardRef((props, ref) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "89b07247-ac89-455a-ae54-89912038a87e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      className="contact flex items-center justify-center min-h-screen p-4 md:p-8 bg-gray-100 dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors duration-300"
      id="contact"
      ref={ref}
    >
      <div className="relative flex flex-col md:flex-row max-w-5xl w-full mx-auto shadow-lg rounded-2xl overflow-hidden p-6 md:p-0 bg-white dark:bg-zinc-800 transition-colors duration-300">
        <div className="contact-col md:w-1/2 p-6 flex flex-col justify-center space-y-6">
          <h3 className="text-3xl font-semibold">SEND US YOUR DETAILS</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Wherever you're starting strategy, operations, or simply navigating new markets  our global experts are here to guide you with confidence.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="contact-icon">&#9993;</span>
              <span>hello123@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="contact-icon">&#128222;</span>
              <span>+123456789</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="contact-icon">&#127968;</span>
              <span>london, United Kingdom</span>
            </li>
          </ul>
        </div>

        <div className="contact-col contact-form md:w-1/2 p-6 flex flex-col justify-center">
          <form onSubmit={onSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-zinc-500 text-zinc-900 dark:text-white dark:border-zinc-500 dark:focus:border-zinc-400 pb-2 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-zinc-500 text-zinc-900 dark:text-white dark:border-zinc-500 dark:focus:border-zinc-400 pb-2 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <input type="hidden" name="replyto" value="email" />
            <textarea
              name="message"
              placeholder="Describe your queries..."
              rows={5}
              required
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-zinc-500 text-zinc-900 dark:text-white dark:border-zinc-500 dark:focus:border-zinc-400 pb-2 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
            />
            <button
              type="submit"
              className="mt-4 w-full py-3 px-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-semibold transition-colors duration-300 hover:bg-zinc-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 dark:focus:ring-white"
            >
              Submit Here
            </button>
          </form>
          <span className="mt-4 text-sm text-green-600 dark:text-green-400">{result}</span>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;

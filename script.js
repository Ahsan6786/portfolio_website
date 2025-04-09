document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true
    });
  
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from("nav", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  
    gsap.from("header h1", {
      x: -200,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: "header h1",
        start: "top 80%"
      }
    });
  
    gsap.from("header p", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: "header p",
        start: "top 80%"
      }
    });
  
    gsap.from(".contact-btn", {
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".contact-btn",
        start: "top 90%"
      }
    });
  
    gsap.utils.toArray(".section").forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
  
    // Contact form handling
    const form = document.getElementById("commentForm");
    const responseMessage = document.createElement("p");
    responseMessage.classList.add("text-green-400", "text-center", "text-lg", "mt-4");
    form?.appendChild(responseMessage);
  
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const formData = new FormData(form);
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
        };
  
        try {
          const res = await fetch("http://localhost:3000/submit-comment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
  
          if (res.ok) {
            responseMessage.textContent = "Thank you for your feedback!";
            form.reset();
          } else {
            alert("Something went wrong. Please try again later.");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Submission failed. Please check your connection.");
        }
      });
    }
  });
  
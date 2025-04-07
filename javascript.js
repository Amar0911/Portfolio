const roles = [
    {
      title: "Backend Developer",
      description: `A passionate <span style="font-weight: 600;">Backend Developer</span> dedicated to crafting robust, secure, and scalable 
      server-side applications. I thrive on solving complex backend challenges, writing clean, efficient code, and optimizing performance to 
      deliver seamless user experiences.`
    },
    {
      title: "YouTuber",
      description: `A passionate <span style="font-weight: 600;">YouTuber</span> who shares exciting movie suggestions and entertainment 
      content to help viewers discover hidden gems, trending hits, and cinematic masterpieces. Dive into the world of films with me on 
      <a href="https://www.youtube.com/@Amar_gupta" target="_blank" style="font-weight: 600; color: #ffcc00; text-decoration: none;">Amar Gupta</a> and make 
      your watchlist truly binge-worthy!`
    },
    {
      title: "SQL Developer",
      description: `A passionate <span style="font-weight: 600;">SQL Developer</span> who thrives on designing efficient and well-structured databases, 
      crafting complex queries, and ensuring data integrity, accuracy, and top-tier performance. I love turning raw data into meaningful insights that drive smart decisions.`
    },
    {
      title: "Full Stack Developer",
      description: `A passionate <span style="font-weight: 600;">Full Stack Developer</span> who seamlessly blends frontend finesse with backend strength to craft dynamic, 
      end-to-end solutions for real-world challenges. I enjoy building responsive, user-friendly interfaces backed by powerful, scalable server logic.`
    }
  ];

  let index = 0;
  const titleEl = document.getElementById("role-title");
  const descEl = document.getElementById("role-description");

  setInterval(() => {
    titleEl.innerHTML = roles[index].title;
    descEl.innerHTML = roles[index].description;
    index = (index + 1) % roles.length;
  }, 3000); 
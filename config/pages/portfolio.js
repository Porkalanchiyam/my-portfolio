import axios from "axios";

const config = {
  title: "Projects 📚",
  subtitle:
    "A selection of projects I've worked on, during my career as a Software Engineer.",
  getProjects: async () => {
    try {
      const repos = await axios.get(
        "https://api.github.com/users/Porkalanchiyam/repos?sort=pushed"
      );
      const projectData = repos.data;
      const projects = [];
      projectData?.forEach(
        ({ name, description, homepage, html_url, fork }) => {
          if (!fork && description) {
            const obj = {
              title: name,
              description: description,
              githubUrl: html_url,
              projectUrl: homepage || "",
            };
            projects.push(obj);
          }
        }
      );
      return projects;
    } catch (err) {
      console.error(err);
      return [];
    }
  },
};

export default config;

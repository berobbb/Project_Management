import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectedSelected from "./Components/NoProjectedSelected";
import Sidebar from "./Components/Sidebar";
import ProjectDetails from "./Components/ProjectDetails"; // New component

function App() {
  const [visible, setVisible] = useState(false);
  const [projects, setProjects] = useState([]);  // State to hold project objects
  const [selectedProject, setSelectedProject] = useState(null); // State for selected project

  function toggle() {
    setVisible((show) => !show);
  }

  function addProject(project) {
    setProjects([...projects, project]);  // Add new project object to the list
    toggle();  // Close the new project form after saving
  }

  function selectProject(index) {
    setSelectedProject(projects[index]);  // Set the clicked project as selected
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* Pass projects and addProject to Sidebar */}
      <Sidebar func1={toggle} projects={projects} selectProject={selectProject} />
      {visible ? (
        <NewProject addProject={addProject} />
      ) : selectedProject ? (
        <ProjectDetails project={selectedProject} /> // Show the selected project's details
      ) : (
        <NoProjectedSelected func1={toggle} />
      )}
    </main>
  );
}

export default App;

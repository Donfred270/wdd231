const courses = [
  { code: "CSE110", name: "CSE 110", credits: 3, completed: true },
  { code: "WDD130", name: "WDD 130", credits: 3, completed: true },
  { code: "CSE111", name: "CSE 111", credits: 3, completed: false },
  { code: "CSE210", name: "CSE 210", credits: 3, completed: false },
  { code: "WDD131", name: "WDD 131", credits: 3, completed: false },
  { code: "WDD231", name: "WDD 231", credits: 3, completed: false },
  
];

function renderCourses(filterType = "all") {
  const container = document.getElementById("course-cards");
  const totalDisplay = document.querySelector("#total-courses strong");
  container.innerHTML = "";

  const filtered = courses.filter(course => {
    if (filterType === "wdd") return course.code.startsWith("WDD");
    if (filterType === "cse") return course.code.startsWith("CSE");
    return true;
  });

  totalDisplay.textContent = filtered.length;

  filtered.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    card.classList.add(course.completed ? "completed" : "not-completed");
    card.innerHTML = course.completed ? `&#10003; ${course.name}` : `${course.name}`;
    container.appendChild(card);
  });
}

document.querySelectorAll("#filters button").forEach(btn => {
  btn.addEventListener("click", () => renderCourses(btn.dataset.type));
});

renderCourses();

const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = new Date().getFullYear();

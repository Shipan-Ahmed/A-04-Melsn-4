let currentFilter = "all";

let jobCards = [
  {
    id: 1,
    companyName: "Brain Station 23",
    position: "Software Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳60,000 – ৳90,000 / month",
    description:
      "Develop and maintain scalable backend services using Node.js and PostgreSQL. Collaborate with frontend teams to build RESTful APIs and optimize performance for high-traffic applications.",
    status: "all",
  },
  {
    id: 2,
    companyName: "Enosis Solutions",
    position: "Junior Software Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳45,000 – ৳70,000 / month",
    description:
      "Work with a cross-functional team to build enterprise-level applications using .NET and SQL Server. Participate in code reviews and follow software development best practices.",
    status: "all",
  },
  {
    id: 3,
    companyName: "Therap BD Ltd",
    position: "Software Engineer (Full Stack)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳70,000 – ৳110,000 / month",
    description:
      "Design and develop full-stack web applications using React and Java Spring Boot. Focus on clean architecture, scalability, and performance optimization.",
    status: "all",
  },
  {
    id: 4,
    companyName: "BJIT",
    position: "Software Engineer (Java)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳55,000 – ৳85,000 / month",
    description:
      "Build and maintain Java-based enterprise systems. Work with international clients and follow agile methodologies for efficient software delivery.",
    status: "all",
  },
  {
    id: 5,
    companyName: "Dream71 Bangladesh Ltd",
    position: "Software Engineer Intern (Frontend)",
    location: "Dhaka, Bangladesh",
    type: "Internship",
    salary: "৳15,000 – ৳25,000 / month",
    description:
      "Assist in building responsive UI components using React.js. Collaborate with senior developers to improve user experience and application performance.",
    status: "all",
  },
  {
    id: 6,
    companyName: "Tiger IT",
    position: "Software Engineer (AI/ML)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳80,000 – ৳130,000 / month",
    description:
      "Develop machine learning models and integrate them into production systems. Work with large datasets and implement data processing pipelines.",
    status: "all",
  },
  {
    id: 7,
    companyName: "Cefalo Bangladesh Ltd",
    position: "Software Engineer (Remote)",
    location: "Dhaka (Remote for Norway Client)",
    type: "Full-time (Remote)",
    salary: "৳100,000 – ৳160,000 / month",
    description:
      "Build scalable web applications for European clients using modern JavaScript frameworks. Ensure high code quality and participate in international agile teams.",
    status: "all",
  },
  {
    id: 8,
    companyName: "DataSoft Systems Bangladesh Ltd",
    position: "Software Engineer (Database)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳50,000 – ৳75,000 / month",
    description:
      "Design, optimize, and maintain relational databases. Write complex queries, improve indexing strategies, and ensure data integrity and security.",
    status: "all",
  },
];

let jobContainer = document.getElementById("jobContainer");
let emptyState = document.getElementById("emptyState");

// update Deshboard

function updateDashboard() {
  let totalJobs = jobCards.length;
  document.getElementById("total").innerText = totalJobs;

  let interviewJobs = jobCards.filter((j) => j.status === "interview").length;
  document.getElementById("interviewCount").innerText = interviewJobs;

  let rejectedJobs = jobCards.filter((j) => j.status === "rejected").length;
  document.getElementById("rejectedCount").innerText = rejectedJobs;
}

// renderFunction

function renderJobs() {
  jobContainer.innerHTML = "";

  let filteredJobs =
    currentFilter === "all"
      ? jobCards
      : jobCards.filter((j) => j.status === currentFilter);

  document.getElementById("tabCount").innerText = filteredJobs.length;

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filteredJobs.forEach((job) => {
    let jobCard = document.createElement("div");
    jobCard.classList.add("bg-white", "relative", "p-5", "rounded-lg", "shadow-md");
    jobCard.innerHTML = `
    
    <button onclick="deleteJob(${job.id})" class=" absolute top-1 right-1"><img class="w-[20px] h-[20px]" src="./imges/delete-btn.png" alt=""></button>
    <h2 class="text-blue-700 font-bold">${job.companyName}</h2>
            <p class="text-black font-medium ">${job.position}</p>
            <p class="text-gray-600">${job.location}</p>
            <p class="space-x-5 mt-4 mb-4"><span class="text-gray-600">${job.type}</span><span class="text-gray-600">•${job.salary}</span> </p>
            <span  class=" inline-block  px-2 py-1 rounded-md ${
              job.status === "interview"
                ? "bg-green-100 text-green-700"
                : job.status === "rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-gray-200 text-gray-600"
            }">${job.status.toUpperCase()}</span>
            <p class="mt-4 text-gray-600">${job.description}</p>
            <div class="mt-5 space-x-2">
                <button onclick="toggleStatus(${job.id}, 'interview')" class="px-4 py-2 rounded-md ${
                  job.status === "interview"
                    ? "bg-green-700 text-white"
                    : "bg-green-200 text-green-700"
                }">Interview</button>
                <button onclick="toggleStatus(${job.id}, 'rejected')" class="px-4 py-2  rounded-md ${
                  job.status === "rejected"
                    ? "bg-red-700 text-white"
                    : "bg-red-200 text-red-700"
                }">Rejected</button>
            </div>
    `;
    jobContainer.appendChild(jobCard);
  });
}

// delete section
function deleteJob(id) {
  jobCards = jobCards.filter((job) => job.id !== id);
  updateDashboard();
  renderJobs();
}


// btn swaping 
  
function btnClick(id) {
  let allBtn = document.querySelectorAll(".tabBtn");
  for (let btn of allBtn) {
    btn.classList.remove("bg-blue-700", "text-white");
    btn.classList.add("bg-gray-200", "text-black");
  }
  document.getElementById(id).classList.remove("bg-gray-200", "text-black");
  document.getElementById(id).classList.add("bg-blue-700", "text-white");
  currentFilter = id;
  renderJobs();
}


// toggle status

function toggleStatus(id, newStatus) {
  let job = jobCards.find((j) => j.id === id);
  if (job.status === newStatus) {
    job.status = "all";
  } else {
    job.status = newStatus;
  }
  updateDashboard();
  renderJobs();
}


//  document.querySelectorAll(".tabBtn").forEach((btn) => {
//    btn.addEventListener("click", () => {
//      document.querySelectorAll(".tabBtn").forEach((b) => {
//        b.classList.remove("bg-blue-700", "text-white");
//        b.classList.add("bg-gray-200");
//      });

//      btn.classList.add("bg-blue-700", "text-white");
//      btn.classList.remove("bg-gray-200");

//      currentFilter = btn.dataset.tab;
//      renderJobs();
//    });
//  });

// updateDashboard();
// renderJobs();

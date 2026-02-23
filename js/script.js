let jobCards = [
  {
    id: 1,
    companyName: "Brain Station 23",
    position: "Software Engineer (Backend)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳60,000 – ৳90,000 / month",
    description:
      "Develop and maintain scalable backend services using Node.js and PostgreSQL. Collaborate with frontend teams to build RESTful APIs and optimize performance for high-traffic applications.",
    status: "active",
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
    status: "active",
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
    status: "active",
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
    status: "active",
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
    status: "active",
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
    status: "active",
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
    status: "active",
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
    status: "active",
  },
];


// update Deshboard

function updateDashboard() {
  let totalJobs = jobCards.length;
  document.getElementById("total").innerText = totalJobs;

  let interviewJobs = jobCards.filter(j => j.status === "INTERVIEW").length;
  document.getElementById("interview").innerText = interviewJobs;

  let rejectedJobs = jobCards.filter(j => j.status === "REJECTED").length;
  document.getElementById("rejected").innerText = rejectedJobs;
}




// console.log(jobCards);

function btnClick(id) {
  let allBtn = document.querySelectorAll(".btn");
  for (let btn of allBtn) {
    btn.classList.remove("bg-blue-500", "text-white");
    btn.classList.add("bg-gray-200", "text-black");
  }
  document.getElementById(id).classList.remove("bg-gray-200", "text-black");
  document.getElementById(id).classList.add("bg-blue-700", "text-white");
  
}

function traggleStatus(id, newStatus) {
  let job = jobCards.find(j => j.id === id);
  if (job.status === newStatus) {
    job.status = "ALL";
  } else {
    job.status = newStatus;
  }
  updateDashboard();
}
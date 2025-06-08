const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Login Page",
        description: "Create a responsive login UI for the app.",
        date: "2025-05-20",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Header Bug",
        description: "Resolve header overlapping issue on mobile.",
        date: "2025-05-18",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy Staging App",
        description: "Deploy latest build to the staging environment.",
        date: "2025-05-17",
        category: "DevOps"
      }
    ],
    taskSummary: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    }
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Migration",
        description: "Migrate user data to the new schema.",
        date: "2025-05-21",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize Queries",
        description: "Reduce load time by optimizing SQL queries.",
        date: "2025-05-15",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create ER Diagram",
        description: "Model entity relationships for the new project.",
        date: "2025-05-10",
        category: "Planning"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Load Testing",
        description: "Test server performance under high load.",
        date: "2025-05-16",
        category: "Testing"
      }
    ],
    taskSummary: {
      active: 1,
      completed: 2,
      failed: 1,
      newTask: 1
    }
  },
  {
    id: 3,
    firstName: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Implement Dark Mode",
        description: "Add theme switcher with dark mode support.",
        date: "2025-05-21",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Timeout Fix",
        description: "Handle API timeout error in frontend.",
        date: "2025-05-14",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Toast Notification",
        description: "Add toast for login/logout success.",
        date: "2025-05-12",
        category: "UI"
      }
    ],
    taskSummary: {
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    }
  },
  {
    id: 4,
    firstName: "Kavya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "User Authentication",
        description: "Implement JWT based login system.",
        date: "2025-05-21",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Session Management",
        description: "Add session expiry and refresh mechanism.",
        date: "2025-05-18",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Setup Redis Cache",
        description: "Improve performance with Redis caching.",
        date: "2025-05-19",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "API Rate Limiting",
        description: "Implement IP-based rate limiting.",
        date: "2025-05-20",
        category: "Security"
      }
    ],
    taskSummary: {
      active: 1,
      completed: 2,
      failed: 1,
      newTask: 1
    }
  },
  {
    id: 5,
    firstName: "Riya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Unit Tests",
        description: "Cover all major modules with Jest tests.",
        date: "2025-05-21",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "CI/CD Setup",
        description: "Set up CI/CD with GitHub Actions.",
        date: "2025-05-17",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Broken Links",
        description: "Audit and fix broken internal links.",
        date: "2025-05-16",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Document API",
        description: "Write OpenAPI spec for REST API.",
        date: "2025-05-14",
        category: "Documentation"
      }
    ],
    taskSummary: {
      active: 1,
      completed: 2,
      failed: 1,
      newTask: 1
    }
  }
]


const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123"
  }
]

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  // console.log(employees, admin)
  return {employees, admin}

}
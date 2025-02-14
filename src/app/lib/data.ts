export const boardData = {
    columns: {
      "pending": {
        id: "Pending",
        title: "pending",
        bgColor:"rgba(255, 193, 7,0.4)",
        bgDotColor:"rgb(255, 193, 7)",
        taskIds: ["task-2","task-3"],
      },
      "in-progress": {
        id: "In-progress",
        title: "In Progress",
        bgColor:"rgba(30, 160, 236,0.4)",
        bgDotColor:"rgb(30, 160, 236)",
        taskIds: ['task-4'] ,
      },
      "Review": {
        id: "Review",
        title: "Review",
        bgColor:"rgba(255, 87, 34,0.4)",
        bgDotColor:"rgb(255, 87, 34)",
        taskIds:['task-1'],
      },
      "done": {
        id: "Done",
        title: "Done",
        bgColor:"rgba(40, 167, 69,0.4)",
        bgDotColor:"rgb(40, 167, 69)",
        taskIds: [],
      },
    },
    tasks: {
      "task-1": { 
        "id": "task-1", 
        "content": "Set up Next.js project", 
        "status": "Review", 
        "assignee": "John Doe", 
        "date": "2025-02-15", 
        "priority": "High", 
        "priorityColor":"rgb(220, 53, 69)",
        "comments": 5, 
        "attachments": 2 
      },
      "task-2": { 
        "id": "task-2", 
        "content": "Install Tailwind CSS", 
        "status": "Pending", 
        "assignee": "Jane Smith", 
        "date": "2025-02-16", 
        "priority": "Medium", 
        "priorityColor":"rgb(255, 153, 51)",
        "comments": 3, 
        "attachments": 1 
      },
      "task-3": { 
        "id": "task-3", 
        "content": "Implement Drag and Drop", 
        "status": "Pending", 
        "assignee": "Alice Johnson", 
        "date": "2025-02-17", 
        "priority": "Low", 
        "priorityColor":"rgb(29 77 45)",
        "comments": 7, 
        "attachments": 3 
      },
      "task-4": { 
        "id": "task-4", 
        "content": "Set up Next.js project", 
        "status": "In Progress", 
        "assignee": "John Doe", 
        "date": "2025-02-15", 
        "priority": "High", 
        "priorityColor":"rgb(220, 53, 69)",
        "comments": 5, 
        "attachments": 2 
      },
    },
    columnOrder: ["pending", "in-progress", "Review","done"],
  };
  
  
  
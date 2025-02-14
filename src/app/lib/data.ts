export const boardData = {
    columns: {
      "pending": {
        id: "pending",
        title: "pending",
        taskIds: ["task-1", "task-2"],
      },
      "in-progress": {
        id: "in-progress",
        title: "In Progress",
        taskIds: ["task-3"],
      },
      "Review": {
        id: "Review",
        title: "Review",
        taskIds: ['task-4'],
      },
      "done": {
        id: "done",
        title: "Done",
        taskIds: [],
      },
    },
    tasks: {
      "task-1": { 
        "id": "task-1", 
        "content": "Set up Next.js project", 
        "status": "In Progress", 
        "assignee": "John Doe", 
        "date": "2025-02-15", 
        "priority": "High", 
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
        "comments": 3, 
        "attachments": 1 
      },
      "task-3": { 
        "id": "task-3", 
        "content": "Implement Drag and Drop", 
        "status": "To Do", 
        "assignee": "Alice Johnson", 
        "date": "2025-02-17", 
        "priority": "Low", 
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
        "comments": 5, 
        "attachments": 2 
      },
    },
    columnOrder: ["pending", "in-progress", "Review","done"],
  };
  
  
  
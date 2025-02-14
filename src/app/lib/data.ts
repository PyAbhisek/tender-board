export const boardData = {
  columns: {
    "pending": {
      id: "Pending",
      title: "Pending",
      bgColor: "rgba(255, 193, 7,0.4)",
      bgDotColor: "rgb(255, 193, 7)",
      taskIds: ["task-2", "task-3"],
    },
    "in-progress": {
      id: "In-progress",
      title: "In Progress",
      bgColor: "rgba(30, 160, 236,0.4)",
      bgDotColor: "rgb(30, 160, 236)",
      taskIds: ['task-4'],
    },
    "Review": {
      id: "Review",
      title: "Review",
      bgColor: "rgba(255, 87, 34,0.4)",
      bgDotColor: "rgb(255, 87, 34)",
      taskIds: ["task-5"],
    },
    "done": {
      id: "Done",
      title: "Done",
      bgColor: "rgba(40, 167, 69,0.4)",
      bgDotColor: "rgb(40, 167, 69)",
      taskIds: ['task-1'],
    },
  },
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Verify Property Documents",
      description: "Review and verify legal documents before finalizing the property listing.",
      status: "Done",
      assignee: "John Doe",
      date: "2025-02-15",
      priority: "High",
      priorityColor: "rgb(220, 53, 69)",
      comments: [
        "Have we confirmed the authenticity of all submitted documents?",
        "Please double-check the legal clauses before final approval.",
        "Are there any missing or outdated documents that need updating?",
        "Should we involve a legal expert for a final review?",
        "Once verified, how do we securely store these documents?"
      ],
      attachments: 2
    },
    "task-2": {
      id: "task-2",
      content: "Schedule Property Photoshoot",
      description: "Arrange for a professional photoshoot for the new property listing.",
      status: "Pending",
      assignee: "Jane Smith",
      date: "2025-02-16",
      priority: "Medium",
      priorityColor: "rgb(255, 153, 51)",
      comments: [
        "Do we have a preferred photographer for this shoot?",
        "What’s the best time for natural lighting at this property?",
        "Should we stage the property before the photoshoot?",
        "Have we confirmed the schedule with the property owner?"
      ],
      attachments: 1
    },
    "task-3": {
      id: "task-3",
      content: "Update Property Listings",
      description: "Add new property details to the website and real estate portals.",
      status: "Pending",
      assignee: "Alice Johnson",
      date: "2025-02-17",
      priority: "Low",
      priorityColor: "rgb(29, 77, 45)",
      comments: [
        "Have we optimized the property descriptions for better visibility?",
        "Are we including high-quality images and virtual tours?"
      ],
      attachments: 3
    },
    "task-4": {
      id: "task-4",
      content: "Coordinate Property Visits",
      description: "Schedule and manage property viewing appointments for potential buyers.",
      status: "In Progress",
      assignee: "Michael Brown",
      date: "2025-02-18",
      priority: "High",
      priorityColor: "rgb(220, 53, 69)",
      comments: [
        "Have all potential buyers confirmed their appointment slots?",
        "Are there any COVID-19 safety guidelines to follow?",
        "Should we collect feedback from visitors after each showing?",
        "Have we coordinated with the property owner for access?"
      ],
      attachments: 2
    },
    "task-5": {
      id: "task-5",
      content: "Finalize Property Pricing",
      description: "Review market trends and finalize the pricing for the property.",
      status: "Review",
      assignee: "David Miller",
      date: "2025-02-19",
      priority: "Medium",
      priorityColor: "rgb(255, 153, 51)",
      comments: [
        "Have we analyzed comparable properties in the area?",
        "Are there any recent sales trends we should consider?",
        "Do we need a second opinion from a market analyst?",
        "Should we prepare a negotiation strategy for potential buyers?"
      ],
      attachments: 1
    },
  },
  columnOrder: ["pending", "in-progress", "Review", "done"],
};

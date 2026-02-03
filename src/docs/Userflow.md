# User Flow Documentation

This document outlines the primary user journeys within the Todo List Application.

## 1. Add Personal Task

The process of a user adding a task for themselves.

```mermaid
sequenceDiagram
    actor User
    participant Frontend as UI (AddTodo)
    participant Data as Data Store (MainPage)
    participant Storage as LocalStorage

    User->>Frontend: Enter Task Title & Content
    User->>Frontend: Click "Add Task"
    Frontend->>Data: Emit 'add-task' event
    Data->>Data: Add new task to 'tasks' array
    Data->>Storage: Save 'tasks' to LocalStorage
    Data-->>Frontend: Update Task List
```

## 2. Assign Task to Friend

The process of assigning a task to a friend.

```mermaid
sequenceDiagram
    actor User
    participant Frontend as UI (AddTodo)
    participant Data as Data Store (MainPage)
    participant Storage as LocalStorage

    User->>Frontend: Enter Task Title & Content
    User->>Frontend: Select Friend from Dropdown
    User->>Frontend: Click "Add Task"
    Frontend->>Data: Emit 'add-task' event with 'assignedTo' field
    Data->>Data: Add new task to 'tasks' array
    Data->>Storage: Save 'tasks' to LocalStorage

    Note over Data, Storage: Task will appear in Friend's "Assigned to Me" list
```

## 3. Add Friend

The process of searching and adding a new friend.

```mermaid
sequenceDiagram
    actor User
    participant Frontend as UI (AddFriend)
    participant Data as Data Store (MainPage)
    participant Storage as LocalStorage

    User->>Frontend: Type Email (must be @gmail.com)
    Frontend->>Data: Filter users by account
    User->>Frontend: Select User from AutoComplete
    Frontend->>Frontend: Validates (Not self, Not already friend)
    Frontend->>Data: Update 'users' array (Add to both users' friend lists)
    Data->>Storage: Save 'users' to LocalStorage
    Frontend-->>User: Clear Search Input
```

## 4. Complete Task & History

How a task moves from active to history.

```mermaid
stateDiagram-v2
    [*] --> Active: Task Created
    Active --> Completed: User clicks Checkbox
    Completed --> History: User re-enters or clicks Archive (reHistory)
    History --> [*]: Stored in 'historyTasks'
```

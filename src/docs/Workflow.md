# System Workflow & Architecture

This document describes the internal data flow and component architecture of the Todo List Application.

## Data Flow Architecture

The application uses a **Unidirectional Data Flow** pattern where `MainPage` acts as the single source of truth.

```mermaid
flowchart TD
    subgraph Storage
        LS[LocalStorage]
    end

    subgraph Parent[MainPage (Container)]
        State[State: Tasks, Users, LoginUser]
        Methods[Methods: addTask, deleteTask, saveTaskUpdate]

        LS <-->|Load/Save| State
    end

    subgraph Children[Components]
        AddTodo[AddTodo Component]
        AssignTodo[AssignTodo Component]
        AddFriend[AddFriend Component]
    end

    State -->|Props (postProps)| AddTodo
    State -->|Props (postProps)| AssignTodo
    State -->|Props (postFriendProps)| AddFriend

    AddTodo -->|Events (add-task, etc.)| Methods
    AssignTodo -->|Events (delete-task, etc.)| Methods
    AddFriend -->|Direct Mutation (Legacy)| State
```

> **Note**: `AddFriend` currently modifies the `users` array locally which is reflected in `MainPage` because objects are passed by reference, but cleaner event-based modification is recommended for future refactoring.

## Component Responsibilities

| Component      | Responsibility                     | Props Received                               | Events Emitted                                |
| -------------- | ---------------------------------- | -------------------------------------------- | --------------------------------------------- |
| **AddTodo**    | Create tasks, List personal tasks  | `tasks`, `loginUser`, `users`, `on*` Methods | `add-task`, `delete-task`, `save-task-update` |
| **AssignTodo** | List tasks assigned to `loginUser` | `tasks`, `loginUser`                         | `delete-task`, `save-task-update`             |
| **AddFriend**  | Search and add friends             | `users`, `loginUser`                         | N/A (Directly updates object)                 |

## Event Bus Pattern (Function as Props)

To reduce template clutter, we utilize the "Function as Props" pattern for event handling:

```mermaid
graph LR
    A[MainPage] -- "postProps { onAddTask: addTask }" --> B[AddTodo]

    subgraph Inside AddTodo
    C[emit('add-task')] -->|Vue Internal Binding| D[onAddTask Prop]
    end

    D -->|Calls| E[MainPage.addTask()]
```

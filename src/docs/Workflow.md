# System Workflow Documentation

## 1. Architecture Overview

This project is a **Vue 3** application built with **Vite** and **TypeScript**. It utilizes **PrimeVue** for UI components and **Tailwind CSS** for styling.

### Key Technologies

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build Tool**: Vite
- **Routing**: Vue Router
- **UI Interaction**: PrimeVue
- **Styling**: Tailwind CSS / PrimeIcons
- **State/Data Persistence**: `localStorage` (No backend API)

---

## 2. Application Initialization

**Entry Point**: `src/main.ts`

1.  **Create App**: `createApp(App)` initializes the root component (`App.vue`).
2.  **Setup Plugins**: `setup(app)` from `src/plugins/setup.ts` installs:
    - `createPinia()`: State management (available but primarily local state used in views).
    - `router`: Vue Router instance.
    - `PrimeVue`: UI library configuration.
3.  **Mount**: The app is mounted to the `#app` DOM element.

**Root Component**: `src/App.vue`

- Check `router.currentRoute.meta.hideNavBar` to conditionally render the `NavBar` component.
- Renders `router-view` to display the active page.

---

## 3. Routing & Navigation Control

**Configuration**: `src/router/index.ts`

### Route Definitions

| Path                      | Name          | Component         | Access      | Notes                                               |
| :------------------------ | :------------ | :---------------- | :---------- | :-------------------------------------------------- |
| `/`                       | -             | -                 | Public      | Redirects to `loginPage`                            |
| `/loginPage`              | `loginPage`   | `loginPage.vue`   | Public      | **Layout** for auth pages. Redirects to `loginUser` |
| `/loginPage/login`        | `loginUser`   | `loginUser.vue`   | Public      | Login form                                          |
| `/loginPage/register`     | `register`    | `regisUser.vue`   | Public      | Registration form                                   |
| `/mainPage`               | `mainPage`    | `mainPage.vue`    | **Private** | Core application dashboard                          |
| `/historyPage`            | `historyPage` | `historyPage.vue` | **Private** | Historical/Completed tasks                          |
| `/accountPage`            | `accountPage` | `accountPage.vue` | **Private** | **Layout**. Redirects to `accManager`               |
| `/accountPage/accManager` | `accManager`  | `accManager.vue`  | **Admin**   | User management (Role `admin` only)                 |

### Navigation Guard (`router.beforeEach`)

1.  **Auth Check**: Checks `localStorage.getItem('user')`.
    - If user is **not** logged in and trying to access a protected page (anything except login/register), redirects to `loginUser`.
2.  **Role Check**:
    - If accessing `accManager`, checks if `user.role === 'admin'`.
    - If check fails, alerts user and redirects to `mainPage`.

---

## 4. Data Persistence & State Management

The application acts as a client-side only app using `localStorage` as a pseudo-database.

### Storage Keys

| Key            | Type              | Description                                              |
| :------------- | :---------------- | :------------------------------------------------------- |
| `user`         | `user`            | Currently logged-in user session object.                 |
| `users`        | `user[]`          | List of all registered users. Used for login validation. |
| `tasks`        | `taskInterface[]` | List of active tasks.                                    |
| `historyTasks` | `taskInterface[]` | List of completed/archived tasks.                        |

### Data Structures (`src/component/type.ts`)

#### Task (`taskInterface`)

```typescript
interface taskInterface {
  id: number
  title: string
  assignedTo?: string // Name of user assigned to task
  isCompleted: boolean
  content?: string
  createUser?: string // Account of creator
}
```

#### User (`user`)

```typescript
interface user {
  id: number
  name: string
  account: string // Used as unique identifier for login
  password: string // Hashed with bcryptjs
  status?: boolean
  role?: string // 'admin' provides extra access
  friends?: friend[]
}
```

---

## 5. Component Hierarchy

- **App.vue**
  - **NavBar.vue** (Navigation Links)
  - **RouterView**
    - **loginPage.vue**
      - `loginUser.vue` (Login Form)
      - `regisUser.vue` (Register Form)
    - **mainPage.vue**
      - `AddTodo.vue` (Create Task)
      - `AssignTodo.vue` (Assign Task to others)
      - `AddFriend.vue` (Manage friends)
    - **historyPage.vue** (View completed tasks)
    - **accountPage.vue**
      - `accManager.vue` (Admin user table)

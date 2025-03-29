# User Management System

A modern React application for managing user data with authentication, built with Vite, React, and TypeScript. This application demonstrates best practices in state management, authentication, and responsive design.

![User Management Dashboard](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=600)

## Features

### Authentication

- Secure login system with email and password
- Token-based authentication
- Persistent login state using localStorage
- Protected routes for authenticated users
- Secure logout functionality

### User Management

- View list of users with pagination
- Edit user information:
  - First name
  - Last name
  - Email
- Delete users
- Persistent data storage using localStorage
- Real-time updates to user data
- Responsive table layout for all screen sizes

### UI/UX Features

- Modern, clean interface using Tailwind CSS
- Responsive design that works on mobile and desktop
- Loading states for better user feedback
- Error handling with user-friendly messages
- Modal dialogs for editing user information
- Intuitive navigation with pagination controls
- Professional icons using Lucide React

## Technical Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context + Hooks
- **Storage**: localStorage for persistence
- **HTTP Client**: Native Fetch API
- **Type Safety**: JavaScript

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

### Login

- Use the following credentials to log in:
  - Email: `eve.holt@reqres.in`
  - Password: `cityslicka`

### Managing Users

1. **View Users**: After logging in, you'll see a list of users with their details
2. **Edit User**: Click the edit (pencil) icon to modify user details
3. **Delete User**: Click the delete (trash) icon to remove a user
4. **Navigate**: Use the pagination controls at the bottom to view more users
5. **Logout**: Click the logout button in the top-right corner to end your session

## Features in Detail

### Authentication System

- Secure token storage in localStorage
- Automatic redirection to login for unauthenticated users
- Clean logout with state cleanup

### User Management Interface

- Paginated user list with 6 users per page
- Editable fields:
  - First Name
  - Last Name
  - Email
- Real-time validation of user inputs
- Persistent storage of changes
- Optimistic updates for better UX

### Data Persistence

- All changes (edits, deletions) are stored in localStorage
- Data persists across page refreshes
- Initial data loaded from API
- Subsequent changes managed locally

## Error Handling

- Network error detection and display
- Input validation
- User-friendly error messages
- Graceful fallbacks for failed operations

## Best Practices

- Component-based architecture
- Custom hooks for reusable logic
- Consistent error handling
- Type safety with Javascript PropTypes
- Responsive design principles
- Clean and maintainable code structure

## Project Structure

```
src/
├── components/          # React components
│   ├── LoginForm.jsx   # Login form component
│   ├── UserList.jsx    # User list and management
│   └── UserEditModal.jsx # Edit user modal
├── context/
│   └── AuthContext.jsx # Authentication context
├── hooks/
│   └── useLocalStorage.js # Local storage hook
└── types/              # Javascript types (if applicable)
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

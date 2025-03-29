import React, { useState, useEffect } from 'react';
import { Edit2, Trash2, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import UserEditModal from './UserEditModal';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAuth } from '../context/AuthContext';

export default function UserList() {
  const { logout } = useAuth();
  const [users, setUsers] = useLocalStorage('users', [
    {
      id: 1,
      email: 'arjun.patel@example.com',
      first_name: 'Arjun',
      last_name: 'Patel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      id: 2,
      email: 'priya.sharma@example.com',
      first_name: 'Priya',
      last_name: 'Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      id: 3,
      email: 'rahul.verma@example.com',
      first_name: 'Rahul',
      last_name: 'Verma',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    {
      id: 4,
      email: 'neha.gupta@example.com',
      first_name: 'Neha',
      last_name: 'Gupta',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    {
      id: 5,
      email: 'vikram.singh@example.com',
      first_name: 'Vikram',
      last_name: 'Singh',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop'
    },
    {
      id: 6,
      email: 'ananya.reddy@example.com',
      first_name: 'Ananya',
      last_name: 'Reddy',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      id: 7,
      email: 'karthik.iyer@example.com',
      first_name: 'Karthik',
      last_name: 'Iyer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    {
      id: 8,
      email: 'meera.kumar@example.com',
      first_name: 'Meera',
      last_name: 'Kumar',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    }
  ]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [initialized, setInitialized] = useState(true);

  const handleDelete = async (id) => {
    try {
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      console.error('Delete error:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete user');
    }
  };

  const handleUpdate = async (updatedUser) => {
    try {
      const updatedUserWithAvatar = {
        ...updatedUser,
        avatar: editingUser?.avatar || updatedUser.avatar
      };
      
      setUsers(users.map(user => 
        user.id === updatedUser.id ? updatedUserWithAvatar : user
      ));
      setEditingUser(null);
    } catch (err) {
      console.error('Update error:', err);
      setError(err instanceof Error ? err.message : 'Failed to update user');
    }
  };

  if (loading && !initialized) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-500 p-4 rounded-md">
        {error}
      </div>
    );
  }

  const paginatedUsers = users.slice((page - 1) * 6, page * 6);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
        <button
          onClick={logout}
          className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avatar</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img 
                    src={user.avatar} 
                    alt={user.first_name} 
                    className="h-16 w-16 rounded-full object-cover border-2 border-gray-200"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.first_name} {user.last_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => setEditingUser(user)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="p-2 rounded-md bg-gray-100 disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="py-2 px-4">
          Page {page} of {Math.ceil(users.length / 6)}
        </span>
        <button
          onClick={() => setPage(p => Math.min(Math.ceil(users.length / 6), p + 1))}
          disabled={page === Math.ceil(users.length / 6)}
          className="p-2 rounded-md bg-gray-100 disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {editingUser && (
        <UserEditModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface UserData {
    id: number;
    username: string;
    email: string;
    phone: string;
    role: string;
}

const headers = {
    Authorization: "Bearer sciflare",
    "Content-Type": "application/json",
};

const UserList: React.FC = () => {
    const URL = "http://localhost:8000/api";

    const [users, setUsers] = useState<UserData[]>([
        { id: 1, username: 'John Doe', email: 'john@example.com', phone: '1234567890', role: 'Tester' },
        { id: 2, username: 'Jane Doe', email: 'jane@example.com', phone: '9876543210', role: 'Developer' },
    ]);

    const [editingUser, setEditingUser] = useState<UserData | null>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [componentKey, setComponentKey] = useState(0);
    const navigate = useNavigate()

    const handleEditUser = useCallback((editedUser: UserData) => {
        axios.put(`${URL}/admin/update`, editedUser, { headers }).then((response: any) => {
            console.log("edit", response.data);
            toast(`${response.data.message}`)
            setComponentKey((prevKey) => prevKey + 1);

            closeEditor();
        })
            .catch((error: Error) => {
                console.error("Error update data:", error);
            });
    }, [])


    const handleDeleteUser = useCallback((userId: number) => {
        console.log("id", userId);

        axios.delete(`${URL}/admin/delete/${userId}`, { headers }).then((response: any) => {
            console.log("delete", response.data);
            toast(`${response.data.message}`)
            setComponentKey((prevKey) => prevKey + 1);
        })
            .catch((error: Error) => {
                console.error("Error delete data:", error);
            });
    }, [])

    const openEditor = (user: UserData) => {
        setEditingUser(user);
        setIsEditorOpen(true);
    };

    const closeEditor = () => {
        setEditingUser(null);
        setIsEditorOpen(false);
    };

    const handleLogout = () => {
        navigate('/')
    };

    useEffect(() => {
        axios.get(`${URL}/admin/list`, { headers }).then((response: any) => {
            setUsers(response.data.data)
        })
            .catch((error: Error) => {
                console.error("Error fetching data:", error);
            });

    }, [componentKey])

    return (
        <div className='bg-slate-50 min-h-screen'>

            <div className="flex items-center justify-between p-4">
                <h2 className='font-bold text-2xl'>Sciflare</h2>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-2 py-2 rounded-md"
                >
                    Logout
                </button>
            </div>
            <div className=" p-4">
                <table className="min-w-full bg-white border border-gray-300 m-4">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border bg-slate-200">Username</th>
                            <th className="py-2 px-4 border bg-slate-200">Email</th>
                            <th className="py-2 px-4 border bg-slate-200">Phone</th>
                            <th className="py-2 px-4 border bg-slate-200">Role</th>
                            <th className="py-2 px-4 border bg-slate-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-cyan-100'>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="py-2 px-4 border">{user.username}</td>
                                <td className="py-2 px-4 border">{user.email}</td>
                                <td className="py-2 px-4 border">{user.phone_number}</td>
                                <td className="py-2 px-4 border">{user.role}</td>
                                <td className="py-2 px-4 border">
                                    <button
                                        onClick={() => openEditor(user)}
                                        className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteUser(user._id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isEditorOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleEditUser(editingUser as UserData);
                            }}
                        >

                            <div className=" flex mb-2 space-evenly">
                                <label htmlFor="editedEmail" className="text-gray-600 px-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="editedEmail"
                                    className="form-input  w-full border"
                                    value={editingUser?.email}
                                    onChange={(e) =>
                                        setEditingUser((prevUser) => ({ ...prevUser, email: e.target.value }))
                                    }
                                    required
                                />
                            </div>
                            <div className=" flex mb-2 space-evenly">
                                <label htmlFor="editedPhone" className="text-gray-600 px-2">
                                    Phone
                                </label>
                                <input
                                    type="phoneNumber"
                                    name="editedPhone"
                                    className="form-input  w-full border"
                                    value={editingUser?.phone_number}
                                    onChange={(e) =>
                                        setEditingUser((prevUser) => ({ ...prevUser, phone_number: e.target.value }))
                                    }
                                    required
                                />
                            </div>
                            <div className=" flex mb-2 space-evenly">
                                <label htmlFor="editedRole" className="text-gray-600 px-2">
                                    Role
                                </label>
                                <input
                                    type="text"
                                    name="editedRole"
                                    className="form-input  w-full border"
                                    value={editingUser?.role}
                                    onChange={(e) =>
                                        setEditingUser((prevUser) => ({ ...prevUser, role: e.target.value }))
                                    }
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-end mt-3">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={closeEditor}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserList;

'use client'

import React, { useEffect, useState } from "react";
import supabase from '../../utils/supabase';

interface User {
  id: number;
  name: string;
  role: string;
  department: string;
}

const MainTask: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUserData() {
      const { data, error } = await supabase.from('users').select('id, name, role, department');
      if (error) {
        console.error("Error fetching user data:", error);
      } else {
        console.log("Found", data);
        setUsers(data as User[]); // Manual type casting
      }
    }

    fetchUserData();
  }, []);

  return (
    <div>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>Role: {user.role}</p>
              <p>Department: {user.department}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainTask;

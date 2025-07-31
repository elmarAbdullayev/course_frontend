import React, { use } from 'react'
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/slice.ts';
import { useEffect } from 'react';
import { fetchAdminData } from '../api/admin/adminApis.ts';
import { fetchAdminDataGetProcess } from '../api/admin/adminApis.ts';
import { useState } from 'react';

 const AdminPanel: React.FC = () => {

        const [allowed, setAllowed] = useState(false);
        const [data, setData] = useState<any[]>();

   const token = useSelector(selectToken)

useEffect(() => {
  try {
    if (token) {
      console.log("Fetching admin data with token:", token);
      fetchAdminData(token)
        .then(response => {
          console.log("Admin data fetched successfully:", response.data);
            setAllowed(true);
        })
        .catch(error => {
          console.error("Error fetching admin data:", error);
        });
    } else {
      console.warn("No token found, cannot fetch admin data.");
    }
  } catch (error) {
    console.error("An error occurred while fetching admin data:", error);
    
  }
  
}, []);


// if(allowed){
//     fetchAdminDataGetProcess(token)
//         .then(response => {
//         console.log("Admin data fetched successfully:", response.data);
//         setData(response.data);
//         })
//         .catch(error => {
//         console.error("Error fetching admin data:", error);
//         });
// }
    
  return (
    <div>
        
        {allowed ? (
            <div>
            <h1>Admin Panel</h1>
            <p>Welcome to the admin panel. You have access to this area.</p>

             {data && (
                   <ul>
                        {data?.map((user, index) => (
                            <li key={index}>{user.name} - {user.email}</li>
                        ))}
                    </ul>    
             )}
            </div>
        ) : (
            <div>
            <h1>Access Denied</h1>
            <p>You do not have permission to access this area.</p>
            </div>
        )}


    </div>


  )
}


export default AdminPanel;

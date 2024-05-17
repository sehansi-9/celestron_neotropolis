import React from 'react';
import styles from './Admin_Dashboard.module.css'; // Import CSS module as an object

export default function Dashboard() {

  
  // Sample data for users and payments
  const users = [
    { id: 1, dtpCode: 'DTP001', firstName: 'John', lastName: 'Doe', mobile: '123-456-7890', email: 'john.doe@example.com', status: 'Active' },
    { id: 2, dtpCode: 'DTP002', firstName: 'Jane', lastName: 'Doe', mobile: '987-654-3210', email: 'jane.doe@example.com', status: 'Inactive' },
    // Add more user data as needed
  ];

  const payments = [
    { id: 1, dtpCode: 'DTP001', userName: 'John Doe', paymentValue: '$100', paymentType: 'Credit Card' },
    { id: 2, dtpCode: 'DTP002', userName: 'Jane Doe', paymentValue: '$50', paymentType: 'PayPal' },
    // Add more payment data as needed
  ];

  const admins = [
    { id: 1, AdminID: 'ABC001', firstName: 'John', lastName: 'Doe', mobile: '123-456-7890', email: 'john.doe@example.com', status: 'Super Admin' },
    { id: 2, AdminID: 'ABC002', firstName: 'Jane', lastName: 'Doe', mobile: '987-654-3210', email: 'jane.doe@example.com', status: 'Admin' },
    // Add more user data as needed
  ];

  const vehicles = [
    { id: 1, dtpCode: 'DTP001',VehicleNo: 'CAC001', userName: 'John Doe',  vehicleType: 'Car' },
    { id: 2, dtpCode: 'DTP002',VehicleNo: 'CAD002', userName: 'Jane Doe', vehicleType: 'Van' },
    // Add more payment data as needed
  ];
  
  

  // Calculate total user count and payment amounts
  const totalUsers = users.length;
  const totalPayments = payments.length;
  const totalAdmins = admins.length

  return (
    
    <div className={styles['admin-dashboard']}>
      <h2>System Information</h2>
      <div className={styles['total-info']}>
        <div className={styles['total-count']}>
          <h2>Total Users</h2>
          <span>{totalUsers}</span>
        </div>
        <div className={styles['total-count']}>
          <h2>Total Payments</h2>
          <span>{totalPayments}</span>
        </div>
      </div>

      <div className={styles['tables-container']}>
        <div className={styles['user-table']}>
          
          <h2>User Information
          <button className={styles['add-button']}>Add User</button>
          </h2>
          <table className={styles['table']}>
            <thead>
              <tr>
                <th>DTP Code</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.dtpCode}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.mobile}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>

        <div className={styles['payment-table']}>
          <h2>Payment Information</h2>
          <table className={styles['table']}>
            <thead>
              <tr>
                <th>DTP Code</th>
                <th>User Name</th>
                <th>Payment Value</th>
                <th>Payment Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment => (
                <tr key={payment.id}>
                  <td>{payment.dtpCode}</td>
                  <td>{payment.userName}</td>
                  <td>{payment.paymentValue}</td>
                  <td>{payment.paymentType}</td>
                  <td><button>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>


          <div className={styles['payment-table']}>
          <h2>Vehicle Information</h2>
          <table className={styles['table']}>
            <thead>
              <tr>
                <th>Vehicle Code</th>
                <th>DTP Code</th>
                <th>Vehicle No</th>
                <th>User Name</th>
                <th>Vehicle Type</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map( vehicle=> (
                <tr key={vehicle.id}>
                   <td>{vehicle.id}</td>
                  <td>{vehicle.dtpCode}</td>
                  <td>{vehicle.VehicleNo}</td>
                  <td>{vehicle.userName}</td>
                  <td>{vehicle.vehicleType}</td>
                  
    
                </tr>
              ))}
            </tbody>
          </table>
          </div>          
          

      <div className={styles['total-info']}>
        <div className={styles['total-count']}>
          <h2>Total Admins</h2>
          <span>{totalAdmins}</span>
        </div>
      </div>
          
          <h2>Admin Information
          
          </h2>
          <table className={styles['table']}>
            <thead>
              <tr>
                <th>Admin ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {admins.map(admin => (
                <tr key={admin.id}>
                  <td>{admin.AdminID}</td>
                  <td>{admin.firstName}</td>
                  <td>{admin.lastName}</td>
                  <td>{admin.mobile}</td>
                  <td>{admin.email}</td>
                  <td>{admin.status}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          

        </div>

        



        
</div>
    
  );
}
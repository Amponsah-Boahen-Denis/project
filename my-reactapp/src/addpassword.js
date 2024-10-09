

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './css/add.css';

// function AddPassword() {
//   const [description, setDescription] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [url, setUrl] = useState('');
//   const [notes, setNotes] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // Create a new account object
//     const newAccount = {
//       Description: description,
//       Username: username,
//       Password: password,
//       URL: url,
//       Notes: notes
//     };

//     // Send POST request to the server to add a new password entry
//     axios.post('http://localhost:5000/account', newAccount)
//       .then(response => {
//         setMessage('Password added successfully!');
//         // Clear form fields after successful submission
//         setDescription('');
//         setUsername('');
//         setPassword('');
//         setUrl('');
//         setNotes('');
//       })
//       .catch(error => {
//         console.error('There was an error adding the password!', error);
//         setMessage('Failed to add password. Please try again.');
//       });
//   };

//   return (
//     <div>
//       <div className="div2">
//         <h1 className="h1">ADD NEW ACCOUNT</h1>
//         <div className="div">
//           <button className="button1">
//             <Link to={'/edit'} className="link">Go Back</Link>
//           </button>
//           <form onSubmit={handleSubmit} className="flex2">
//             <div className="flex1">
//               <label className="button2">Account name</label>
//               <input 
//                 className="b" 
//                 type="text" 
//                 value={description} 
//                 onChange={(e) => setDescription(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="flex1">
//               <label className="button2">Username</label>
//               <input 
//                 className="b" 
//                 type="text" 
//                 value={username} 
//                 onChange={(e) => setUsername(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="flex1">
//               <label className="button2">Password</label>
//               <input 
//                 className="b" 
//                 type="password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="flex1">
//               <label className="button2">Url</label>
//               <input 
//                 className="b" 
//                 type="url" 
//                 value={url} 
//                 onChange={(e) => setUrl(e.target.value)} 
//               />
//             </div>
//             <div className="flex1">
//               <label className="button2">Notes</label>
//               <input 
//                 className="b" 
//                 type="text" 
//                 value={notes} 
//                 onChange={(e) => setNotes(e.target.value)} 
//               />
//             </div>
//             <button type="submit" className="button1">Add Information</button>
//           </form>
//           {message && <p>{message}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddPassword;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './password.css';
// function ViewRecords() {
//   const [accounts, setAccounts] = useState([]);
//   const [selectedAccount, setSelectedAccount] = useState(null);
//   axios.defaults.withCredentials=true;
//   useEffect(() => {
//     axios.get('https://fullstack-mern-api.vercel.app/account')
//       .then(response => {
//         setAccounts(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   }, []);

//   const handlePlatformChange = (event) => {
//     const account = accounts.find(account => account.Description === event.target.value);
//     setSelectedAccount(account);
//   };

//   return (
//     <div>
//       <div className="div2">
//         <h1 className="h1">PASSWORD MANAGEMENT APP</h1>
//         <div className="div">
//           <div>
//             <button className="button">Password Manager</button>
//             <button className="button1">
//               <Link to={'/edit'} className='link'>Edit Password</Link>
//             </button>
//           </div>
//           <div>
//             <button className="button2">Description</button>
//             <select className='select' onChange={handlePlatformChange}>
//               <option value="">Select a platform</option>
//               {Array.isArray(accounts) && accounts.length > 0 && (
//                 accounts.map(account => (
//                   <option key={account._id} value={account.Description}>{account.Description}</option>
//                 ))
//               )}
//             </select>
//             <img className='img' src={require("./image.png")} alt="Password Manager" />
//           </div>
//           <div className="flex1">
//             <div className="flex2">
//               <div className="flex1">
//                 <button className="button2">Username</button>
//                 <b className="b">{selectedAccount ? selectedAccount.Username : ''}</b>
//               </div>
//               <div className="flex1">
//                 <button className="button2">Password</button>
//                 <b className="b">{selectedAccount ? selectedAccount.Password : ''}</b>
//               </div>
//             </div>
//             <div className="flex2">
//               <div className="flex1">
//                 <button className="button2">Url</button>
//                 <b className="b">{selectedAccount ? selectedAccount.URL : ''}</b>
//               </div>
//               <div className="flex1">
//                 <button className="button2">Notes</button>
//                 <b className="b">{selectedAccount ? selectedAccount.Notes : ''}</b>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ViewRecords;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './password.css';

// function ViewRecords() {
//   const [accounts, setAccounts] = useState([]);
//   const [selectedAccount, setSelectedAccount] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/account')
//       .then(response => {
//         setAccounts(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   }, []);

//   const handlePlatformChange = (event) => {
//     const account = accounts.find(account => account.Description === event.target.value);
//     setSelectedAccount(account);
//   };

//   return (
//     <div>
//       <div className="div2">
//         <h1 className="h1">PASSWORD MANAGEMENT APP</h1>
//         <div className="div">
//           {/* <div className='flex1'>
//             <button className="button">Password Manager</button>
//             <button className="button1">
//               <Link to={'/edit'} className='link'>View & Edit-list</Link>
//             </button>
//           </div> */}
//             <button className="button1">
//               <Link to={'/edit'} className='link'>View & Edit-list</Link>
//             </button>
//             <button className="button1">
//               <Link to={'/addpassword'} className='link'>View & Edit-list</Link>
//             </button>
//           <div className='flex1'>
//             <button className="button2">Description</button>
//             <select className='select' onChange={handlePlatformChange}>
//               <option value="">Select a platform</option>
//               {Array.isArray(accounts) && accounts.length > 0 && (
//                 accounts.map(account => (
//                   <option key={account._id} value={account.Description}>{account.Description}</option>
//                 ))
//               )}
//             </select>
//             <img className='img' src={require("./image.png")} alt="Password Manager" />
//           </div>
//           <div className="flex1">
//             <div className="flex2">
//               <div className="flex1">
//                 <button className="button2">Username</button>
//                 <b className="b">{selectedAccount ? selectedAccount.Username : ''}</b>
//               </div>
//               <div className="flex1">
//                 <button className="button2">Password</button>
//                 <b className="b">{selectedAccount ? selectedAccount.Password : ''}</b>
//               </div>
//             </div>
//             <div className="flex2">
//               <div className="flex1">
//                 <button className="button2">Url</button>
//                 <b className="b">{selectedAccount ? selectedAccount.URL : ''}</b>
//               </div>
//               <div className="flex1">
//                 <button className="button2">Notes</button>
//                 <b className="b">{selectedAccount ? selectedAccount.Notes : ''}</b>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default ViewRecords;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import './password.css';

// // function AddPassword() {
// //   const [description, setDescription] = useState('');
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [url, setUrl] = useState('');
// //   const [notes, setNotes] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
    
// //     // Create a new account object
// //     const newAccount = {
// //       Description: description,
// //       Username: username,
// //       Password: password,
// //       URL: url,
// //       Notes: notes
// //     };

// //     // Send POST request to the server to add a new password entry
// //     axios.post('http://localhost:5000/account', newAccount)
// //       .then(response => {
// //         setMessage('Password added successfully!');
// //         // Clear form fields after successful submission
// //         setDescription('');
// //         setUsername('');
// //         setPassword('');
// //         setUrl('');
// //         setNotes('');
// //       })
// //       .catch(error => {
// //         console.error('There was an error adding the password!', error);
// //         setMessage('Failed to add password. Please try again.');
// //       });
// //   };

// //   return (
// //     <div>
// //       <div className="div2">
// //         <h1 className="h1">ADD NEW PASSWORD</h1>
// //         <div className="div">
// //           <button className="button1">
// //             <Link to={'/'} className="link">Go Back</Link>
// //           </button>
// //           <form onSubmit={handleSubmit} className="flex2">
// //             <div className="flex1">
// //               <label className="button2">Description</label>
// //               <input 
// //                 className="b" 
// //                 type="text" 
// //                 value={description} 
// //                 onChange={(e) => setDescription(e.target.value)} 
// //                 required 
// //               />
// //             </div>
// //             <div className="flex1">
// //               <label className="button2">Username</label>
// //               <input 
// //                 className="b" 
// //                 type="text" 
// //                 value={username} 
// //                 onChange={(e) => setUsername(e.target.value)} 
// //                 required 
// //               />
// //             </div>
// //             <div className="flex1">
// //               <label className="button2">Password</label>
// //               <input 
// //                 className="b" 
// //                 type="password" 
// //                 value={password} 
// //                 onChange={(e) => setPassword(e.target.value)} 
// //                 required 
// //               />
// //             </div>
// //             <div className="flex1">
// //               <label className="button2">Url</label>
// //               <input 
// //                 className="b" 
// //                 type="url" 
// //                 value={url} 
// //                 onChange={(e) => setUrl(e.target.value)} 
// //               />
// //             </div>
// //             <div className="flex1">
// //               <label className="button2">Notes</label>
// //               <input 
// //                 className="b" 
// //                 type="text" 
// //                 value={notes} 
// //                 onChange={(e) => setNotes(e.target.value)} 
// //               />
// //             </div>
// //             <button type="submit" className="button1">Add Password</button>
// //           </form>
// //           {message && <p>{message}</p>}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// export default ViewRecords;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import './css/edit.css';
// function EditRecord() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [accounts, setAccounts] = useState([]);
//   const [selectedAccountId, setSelectedAccountId] = useState(id);
//   const [formData, setFormData] = useState({
//     Username: '',
//     Password: '',
//     Notes: '',
//     URL: ''
//   });
//   axios.defaults.withCredentials = true;

//   useEffect(() => {
//     axios.get('https://fullstack-mern-api.vercel.app/account')
//       .then(response => {
//         setAccounts(response.data);
//         const account = response.data.find(acc => acc._id === selectedAccountId);
//         if (account) {
//           setFormData({
//             Username: account.Username,
//             Password: account.Password,
//             Notes: account.Notes,
//             URL: account.URL
//           });
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   }, [selectedAccountId]);

//   const handleAccountChange = (event) => {
//     setSelectedAccountId(event.target.value);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Submitting form with data:', formData);
//     axios.put(`https://fullstack-mern-api.vercel.app/account/${selectedAccountId}`, formData)
//       .then(response => {
//         console.log('Successfully updated account:', response.data);
//         navigate('/'); // Navigate back to the home page
//       })
//       .catch(error => {
//         console.error('There was an error updating the data!', error);
//       });
//   };

//   return (
//     <div className='container'>
//       <h1 className='h2'>Edit Social Media Account</h1>
//       <div>
//         <select className='sel' value={selectedAccountId} onChange={handleAccountChange}>
//           <option value="">Select an account</option>
//           {accounts.map(account => (
//             <option key={account._id} value={account._id}>{account.Description}</option>
//           ))}
//         </select>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label className='label'>Username:</label>
//           <input className='input'
//             type="text"
//             name="Username"
//             value={formData.Username}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className='label'>Password:</label>
//           <input className='input'
//             type="text"
//             name="Password"
//             value={formData.Password}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className='label'>Notes:</label>
//           <input className='input'
//             type="text"
//             name="Notes"
//             value={formData.Notes}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className='label'>URL:</label>
//           <input className='input'
//             type="text"
//             name="URL"
//             value={formData.URL}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className='butt'> Update & Exit</button>
//       </form>
//     </div>
//   );
// }

// export default EditRecord;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './password.css';

// function ViewRecords() {
//   const [accounts, setAccounts] = useState([]);
//   const [selectedAccount, setSelectedAccount] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/account')
//       .then(response => {
//         setAccounts(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   }, []);

//   const handlePlatformChange = (event) => {
//     const account = accounts.find(account => account.Description === event.target.value);
//     setSelectedAccount(account);
//   };

//   return (
//     <div>
//       <div className="div2">
//         <h1 className="h1">PASSWORD MANAGEMENT APP</h1>
//         <div className="div">
//           {/* <div className='flex1'>
//             <button className="button">Password Manager</button>
//             <button className="button1">
//               <Link to={'/edit'} className='link'>View & Edit-list</Link>
//             </button>
//           </div> */}
//             <button className="button1">
//               <Link to={'/edit'} className='link'>View & Edit-list</Link>
//             </button>
//             <button className="button1">
//               <Link to={'/addpassword'} className='link'>View & Edit-list</Link>
//             </button>
//           <div className='flex1'>
//             <button className="button2">Description</button>
//             <select className='select' onChange={handlePlatformChange}>
//               <option value="">Select a platform</option>
//               {Array.isArray(accounts) && accounts.length > 0 && (
//                 accounts.map(account => (
//                   <option key={account._id} value={account.Description}>{account.Description}</option>
//                 ))
//               )}
//             </select>
//             <img className='img' src={require("./image.png")} alt="Password Manager" />
//           </div>
//           <div className="flex1">
//             <div className="flex2">
//               <div className="flex1">
//                 <button className="button2">Username</button>
//                 <b className="b">{selectedAccount ? selectedAccount.Username : ''}</b>
//               </div>
//               <div className="flex1">
//                 <button className="button2">Password</button>
//                 <b className="b">{selectedAccount ? selectedAccount.Password : ''}</b>
//               </div>
//             </div>
//             <div className="flex2">
//               <div className="flex1">
//                 <button className="button2">Url</button>
//                 <b className="b">{selectedAccount ? selectedAccount.URL : ''}</b>
//               </div>
//               <div className="flex1">
//                 <button className="button2">Notes</button>
//                 <b className="b">{selectedAccount ? selectedAccount.Notes : ''}</b>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default ViewRecords;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import './password.css';

// // function AddPassword() {
// //   const [description, setDescription] = useState('');
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [url, setUrl] = useState('');
// //   const [notes, setNotes] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
    
// //     // Create a new account object
// //     const newAccount = {
// //       Description: description,
// //       Username: username,
// //       Password: password,
// //       URL: url,
// //       Notes: notes
// //     };

// //     // Send POST request to the server to add a new password entry
// //     axios.post('http://localhost:5000/account', newAccount)
// //       .then(response => {
// //         setMessage('Password added successfully!');
// //         // Clear form fields after successful submission
// //         setDescription('');
// //         setUsername('');
// //         setPassword('');
// //         setUrl('');
// //         setNotes('');
// //       })
// //       .catch(error => {
// //         console.error('There was an error adding the password!', error);
// //         setMessage('Failed to add password. Please try again.');
// //       });
// //   };

// //   return (
// //     <div>
// //       <div className="div2">
// //         <h1 className="h1">ADD NEW PASSWORD</h1>
// //         <div className="div">
// //           <button className="button1">
// //             <Link to={'/'} className="link">Go Back</Link>
// //           </button>
// //           <form onSubmit={handleSubmit} className="flex2">
// //             <div className="flex1">
// //               <label className="button2">Description</label>
// //               <input 
// //                 className="b" 
// //                 type="text" 
// //                 value={description} 
// //                 onChange={(e) => setDescription(e.target.value)} 
// //                 required 
// //               />
// //             </div>
// //             <div className="flex1">
// //               <label className="button2">Username</label>
// //               <input 
// //                 className="b" 
// //                 type="text" 
// //                 value={username} 
// //                 onChange={(e) => setUsername(e.target.value)} 
// //                 required 
// //               />
// //             </div>
// //             <div className="flex1">
// //               <label className="button2">Password</label>
// //               <input 
// //                 className="b" 
// //                 type="password" 
// //                 value={password} 
// //                 onChange={(e) => setPassword(e.target.value)} 
// //                 required 
// //               />
// //             </div>
// //             <div className="flex1">
// //               <label className="button2">Url</label>
// //               <input 
// //                 className="b" 
// //                 type="url" 
// //                 value={url} 
// //                 onChange={(e) => setUrl(e.target.value)} 
// //               />
// //             </div>
// //             <div className="flex1">
// //               <label className="button2">Notes</label>
// //               <input 
// //                 className="b" 
// //                 type="text" 
// //                 value={notes} 
// //                 onChange={(e) => setNotes(e.target.value)} 
// //               />
// //             </div>
// //             <button type="submit" className="button1">Add Password</button>
// //           </form>
// //           {message && <p>{message}</p>}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// export default ViewRecords;



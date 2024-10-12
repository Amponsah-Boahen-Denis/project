// import React, { useState } from 'react';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const { username, email, password } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert('Registration successful! Redirecting to login...');
//         window.location.href = '/login'; // Redirect to login after successful registration
//       } else {
//         alert(data.message || 'Registration failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.header}>Register</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="username"
//           value={username}
//           onChange={handleChange}
//           placeholder="Username"
//           required
//           style={styles.input}
//         />
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           style={styles.input}
//         />
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//           placeholder="Password"
//           required
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Register</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     backgroundColor: '#eafaf1', // Light greenish background
//   },
//   header: {
//     color: '#2d6a4f', // Darker green text
//     fontSize: '24px',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '300px',
//   },
//   input: {
//     padding: '10px',
//     margin: '10px 0',
//     borderRadius: '5px',
//     border: '1px solid #6ba583', // Greenish border
//   },
//   button: {
//     padding: '10px',
//     backgroundColor: '#2d6a4f', // Green button
//     color: '#ffffff', // White text
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   },
//   buttonHover: {
//     backgroundColor: '#1b4d3e',
//   },
// };

// export default Register;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('https://projectback.vercel.app/register', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response) {
        // Store the token in sessionStorage
        sessionStorage.setItem('token', response.data.token);
        alert('Registration successful! Redirecting to login...');
        return navigate('/'); // Redirect to login after successful registration
      } else {
        alert(response.data.message || 'Registration failed or account already exists!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed or account already exists!');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#eafaf1', // Light greenish background
  },
  header: {
    color: '#2d6a4f', // Darker green text
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #6ba583', // Greenish border
  },
  button: {
    padding: '10px',
    backgroundColor: '#2d6a4f', // Green button
    color: '#ffffff', // White text
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '10px',
  },
};

export default Register;

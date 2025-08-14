// import React, { useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { StoreContext } from '../context/StoreContext';
// // import AdminDashboard from './AdminDashboard';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Logo = () => (
//   <img 
//     src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Vignan_logo.png" 
//     alt="Vignan's Logo" 
//     style={{ width: '150px', height: '150px' }} 
//   />
// );

// const AdminLogin = () => {
//   // This single, clean useEffect block injects all dynamic and responsive styles.
//   useEffect(() => {
//     const styleId = 'admin-login-final-styles';
//     if (document.getElementById(styleId)) return;

//     const styleSheet = document.createElement("style");
//     styleSheet.id = styleId;
//     styleSheet.innerHTML = `
//       /* --- 1. CSS Variables for a Clean, Maintainable Theme --- */
//       :root {
//         --brand-red: #D50000;
//         --brand-yellow: #0755ffff;
//         --brand-blue: #007bff;
//         --text-primary: #212529;
//         --text-secondary: #6c757d;
//         --background-white: #ffffff;
//         --border-color: #dee2e6;
//         --gradient-start: #141e30;
//         --gradient-end: #243b55;
//       }

//       /* --- 2. Animated Background Keyframes --- */
//       @keyframes gradient-animation {
//         0% { background-position: 0% 50%; }
//         50% { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }

//       /* --- 3. Professional Hover & Focus Effects --- */
//       .final-input::placeholder {
//         color: #9fa6b2;
//       }

//       .final-input:focus {
//         border-color: var(--brand-blue);
//         box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
//         outline: none;
//       }
      
//       .final-button {
//         transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, background-color 0.2s ease-out, color 0.2s ease-out;
//       }
      
//       .final-button-primary:hover {
//         transform: scale(1.05);
//         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//         background-color: #ffca2c;
//       }

//       .final-button-secondary:hover {
//         transform: scale(1.05);
//         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//         background-color: var(--brand-blue);
//         color: var(--background-white);
//         border-color: var(--brand-blue);
//       }

//       /* --- 4. Flawless Mobile Responsiveness --- */
//       @media (max-width: 850px) {
//         .final-container {
//           flex-direction: column;
//           width: 95%;
//           max-width: 420px;
//           margin-top: 20px;
//           margin-bottom: 20px;
//         }
//         .final-left-panel {
//           border-right: none;
//           border-bottom: 1px solid var(--border-color);
//           padding: 30px;
//         }
//         .final-right-panel {
//           padding: 35px 30px;
//         }
//       }
//     `;
//     document.head.appendChild(styleSheet);
//   }, []);

//    const { setToken, url, token, render, setRender } = useContext(StoreContext);
//    const navigate = useNavigate(); // Add this inside AdminLogin component


//     const [data, setData] = useState({
//         email: "",
//         password: ""
//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name
//         const value = event.target.value
//         console.log(name,value);
//         setData(data => ({ ...data, [name]: value }))
//     }

//     const onLogin = async (e) => {
//   e.preventDefault();

//   const new_url = url + '/api/user/login';

//   try {
//     const response = await axios.post(new_url, data);
//       console.log("hello");
//     if (response.data.success) {
//       setToken(response.data.token);
//       localStorage.setItem("token", response.data.token);
//       setRender(true);
//       // { render ? navigate('/admin/dashboard') : null };
//       console.log(render);
//       navigate('/admin/dashboard');

//       console.log(token);
//     } else {
//       toast.error(response.data.message || "Login failed");
//     }

//   } catch (error) {
//     console.error("Login Error:");
//     const msg = error.response?.data?.message || "Something went wrong";
//     toast.error(msg);
//   }
// }


//   const goToHome = () => {
//     alert("Navigating to the home page!");
//   };

//   return (
//     <>
//     <div className="gradient-bg" style={styles.page}>
//       <div style={styles.container} className="final-container">
//         {/* Left Panel */}
//         <div style={styles.leftPanel} className="final-left-panel">
//           <Logo />
//           <h1 style={styles.title}>Vignan's</h1>
//           <p style={styles.subtitle}>Institute of Information Technology</p>
//           <p style={styles.autonomous}>(Autonomous)</p>
//         </div>

//         {/* Right Panel */}
//         <div style={styles.rightPanel} className="final-right-panel">
//           <h2 style={styles.loginHeader}>Admin Login</h2>
//           <form style={styles.form} onSubmit={onLogin}>
//             <div style={styles.inputGroup}>
//               <input type="email" id="email" placeholder="Email Address" style={styles.input} className="final-input" name='email' onChange={onChangeHandler} value={data.email} />
//             </div>
//             <div style={styles.inputGroup}>
//               <input type="password" id="password" placeholder="Password" style={styles.input} className="final-input" name='password' onChange={onChangeHandler} value={data.password} />
//             </div>
//             <button type="submit" style={styles.primaryButton} className="final-button final-button-primary" >
//               Login
//             </button>
//             <button type="button" onClick={goToHome} style={styles.secondaryButton} className="final-button final-button-secondary">
//               Go to Home
//             </button>
//           </form>
//         </div>
//       </div>
//       {/* {render ? <AdminDashboard/> : null} */}
//     </div>
//   </>
//   );
// };

// const styles = {
//   page: {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   minHeight: '100vh',
//   fontFamily: `'Poppins', 'Segoe UI', 'Roboto', sans-serif'`,
//   padding: '20px',
//   boxSizing: 'border-box',
// } as React.CSSProperties,


//   container: {
//     display: 'flex',
//     width: '100%',
//     maxWidth: '850px',
//     minHeight: '500px',
//     borderRadius: '12px',
//     backgroundColor: 'var(--background-white)',
//     boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)',
//     overflow: 'hidden',
//   } as React.CSSProperties,
//   leftPanel: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px',
//     textAlign: 'center',
//     borderRight: '1px solid var(--border-color)',
//   } as React.CSSProperties,
//   title: {
//     color: 'var(--brand-red)',
//     margin: '15px 0 5px',
//     fontSize: 'clamp(2.5rem, 5vw, 2.8rem)',
//     fontWeight: 700,
//   } as React.CSSProperties,
//   subtitle: {
//     color: 'var(--text-primary)',
//     margin: '0',
//     fontSize: 'clamp(1rem, 2vw, 1.05rem)',
//     fontWeight: 500,
//   } as React.CSSProperties,
//   autonomous: {
//     color: 'var(--text-secondary)',
//     margin: '5px 0 0',
//     fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
//   } as React.CSSProperties,
//   rightPanel: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: '40px 50px',
//   } as React.CSSProperties,
//   loginHeader: {
//     fontSize: 'clamp(1.7rem, 3vw, 1.8rem)',
//     fontWeight: 600,
//     color: 'var(--text-primary)',
//     marginBottom: '30px',
//     textAlign: 'center',
//   } as React.CSSProperties,
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     alignItems: 'center', // Center the buttons
//   } as React.CSSProperties,
//   inputGroup: {
//     marginBottom: '18px',
//     width: '100%', // Ensure input groups take full width
//   } as React.CSSProperties,
//   input: {
//     width: '100%',
//     padding: '12px 16px',
//     backgroundColor: '#f3f4f6', // A very light gray for input background
//     border: '1px solid var(--border-color)',
//     borderRadius: '8px',
//     color: 'var(--text-primary)',
//     fontSize: '1rem',
//     boxSizing: 'border-box',
//     transition: 'all 0.2s ease',
//   } as React.CSSProperties,
//   primaryButton: {
//     padding: '10px 45px', // Vertical and horizontal padding
//     width: 'auto', // Auto width based on content
//     border: 'none',
//     borderRadius: '8px',
//     backgroundColor: 'var(--brand-yellow)',
//     // color: 'var(--text-primary)',
//     color: 'white',
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginBottom: '12px', // Space between buttons
//   } as React.CSSProperties,
//   secondaryButton: {
//     padding: '9px 35px', // Slightly less padding for secondary action
//     width: 'auto',
//     backgroundColor: 'transparent',
//     color: 'var(--brand-blue)',
//     border: '1px solid var(--brand-blue)',
//     borderRadius: '8px',
//     fontSize: '0.9rem',
//     fontWeight: 500,
//     cursor: 'pointer',
//     textAlign: 'center',
//   } as React.CSSProperties,
// };

// export default AdminLogin;



import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
// import AdminDashboard from './AdminDashboard';
import { toast } from 'react-toastify';
import axios from 'axios';

const Logo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Vignan_logo.png" 
    alt="Vignan's Logo" 
    style={{ width: '150px', height: '150px' }} 
  />
);

const AdminLogin = () => {
  // This single, clean useEffect block injects all dynamic and responsive styles.
  useEffect(() => {
    const styleId = 'admin-login-final-styles';
    if (document.getElementById(styleId)) return;

    const styleSheet = document.createElement("style");
    styleSheet.id = styleId;
    styleSheet.innerHTML = `
      /* --- 1. CSS Variables for a Clean, Maintainable Theme --- */
      :root {
        --brand-red: #D50000;
        --brand-yellow: #0755ffff;
        --brand-blue: #007bff;
        --text-primary: #212529;
        --text-secondary: #6c757d;
        --background-white: #ffffff;
        --border-color: #dee2e6;
        --gradient-start: #141e30;
        --gradient-end: #243b55;
      }

      /* --- 2. Animated Background Keyframes --- */
      @keyframes gradient-animation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      /* --- 3. Professional Hover & Focus Effects --- */
      .final-input::placeholder {
        color: #9fa6b2;
      }

      .final-input:focus {
        border-color: var(--brand-blue);
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        outline: none;
      }
      
      .final-button {
        transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, background-color 0.2s ease-out, color 0.2s ease-out;
      }
      
      .final-button-primary:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        background-color: #ffca2c;
      }

      .final-button-secondary:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        background-color: var(--brand-blue);
        color: var(--background-white);
        border-color: var(--brand-blue);
      }

      /* --- 4. Flawless Mobile Responsiveness --- */
      @media (max-width: 850px) {
        .final-container {
          flex-direction: column;
          width: 95%;
          max-width: 420px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .final-left-panel {
          border-right: none;
          border-bottom: 1px solid var(--border-color);
          padding: 30px;
        }
        .final-right-panel {
          padding: 35px 30px;
        }
      }
    `;
    document.head.appendChild(styleSheet);
  }, []);

   const context = useContext(StoreContext);
   const navigate = useNavigate(); // Add this inside AdminLogin component

   if (!context) {
     return <div>Loading...</div>;
   }

   const { setToken, url, token, render, setRender } = context;

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value
        console.log(name,value);
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const new_url = url + '/api/user/login';

  try {
    const response = await axios.post(new_url, data);
      console.log("hello");
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setRender(true);
      // { render ? navigate('/admin/dashboard') : null };
      console.log(render);
      navigate('/admin/dashboard');

      console.log(token);
    } else {
      toast.error(response.data.message || "Login failed");
    }

  } catch (error) {
    console.error("Login Error:");
    const msg = (error as any).response?.data?.message || "Something went wrong";
    toast.error(msg);
  }
}


  const goToHome = () => {
    alert("Navigating to the home page!");
  };

  return (
    <>
    <div className="gradient-bg" style={styles.page}>
      <div style={styles.container} className="final-container">
        {/* Left Panel */}
        <div style={styles.leftPanel} className="final-left-panel">
          <Logo />
          <h1 style={styles.title}>Vignan's</h1>
          <p style={styles.subtitle}>Institute of Information Technology</p>
          <p style={styles.autonomous}>(Autonomous)</p>
        </div>

        {/* Right Panel */}
        <div style={styles.rightPanel} className="final-right-panel">
          <h2 style={styles.loginHeader}>Admin Login</h2>
          <form style={styles.form} onSubmit={onLogin}>
            <div style={styles.inputGroup}>
              <input type="email" id="email" placeholder="Email Address" style={styles.input} className="final-input" name='email' onChange={onChangeHandler} value={data.email} />
            </div>
            <div style={styles.inputGroup}>
              <input type="password" id="password" placeholder="Password" style={styles.input} className="final-input" name='password' onChange={onChangeHandler} value={data.password} />
            </div>
            <button type="submit" style={styles.primaryButton} className="final-button final-button-primary" >
              Login
            </button>
            <button type="button" onClick={goToHome} style={styles.secondaryButton} className="final-button final-button-secondary">
              Go to Home
            </button>
          </form>
        </div>
      </div>
      {/* {render ? <AdminDashboard/> : null} */}
    </div>
  </>
  );
};

const styles = {
  page: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  fontFamily: `'Poppins', 'Segoe UI', 'Roboto', sans-serif'`,
  padding: '20px',
  boxSizing: 'border-box',
} as React.CSSProperties,


  container: {
    display: 'flex',
    width: '100%',
    maxWidth: '850px',
    minHeight: '500px',
    borderRadius: '12px',
    backgroundColor: 'var(--background-white)',
    boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  } as React.CSSProperties,
  leftPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    textAlign: 'center',
    borderRight: '1px solid var(--border-color)',
  } as React.CSSProperties,
  title: {
    color: 'var(--brand-red)',
    margin: '15px 0 5px',
    fontSize: 'clamp(2.5rem, 5vw, 2.8rem)',
    fontWeight: 700,
  } as React.CSSProperties,
  subtitle: {
    color: 'var(--text-primary)',
    margin: '0',
    fontSize: 'clamp(1rem, 2vw, 1.05rem)',
    fontWeight: 500,
  } as React.CSSProperties,
  autonomous: {
    color: 'var(--text-secondary)',
    margin: '5px 0 0',
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
  } as React.CSSProperties,
  rightPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '40px 50px',
  } as React.CSSProperties,
  loginHeader: {
    fontSize: 'clamp(1.7rem, 3vw, 1.8rem)',
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: '30px',
    textAlign: 'center',
  } as React.CSSProperties,
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center', // Center the buttons
  } as React.CSSProperties,
  inputGroup: {
    marginBottom: '18px',
    width: '100%', // Ensure input groups take full width
  } as React.CSSProperties,
  input: {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: '#f3f4f6', // A very light gray for input background
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease',
  } as React.CSSProperties,
  primaryButton: {
    padding: '10px 45px', // Vertical and horizontal padding
    width: 'auto', // Auto width based on content
    border: 'none',
    borderRadius: '8px',
    backgroundColor: 'var(--brand-yellow)',
    // color: 'var(--text-primary)',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '12px', // Space between buttons
  } as React.CSSProperties,
  secondaryButton: {
    padding: '9px 35px', // Slightly less padding for secondary action
    width: 'auto',
    backgroundColor: 'transparent',
    color: 'var(--brand-blue)',
    border: '1px solid var(--brand-blue)',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 500,
    cursor: 'pointer',
    textAlign: 'center',
  } as React.CSSProperties,
};

export default AdminLogin;










// import React, { useEffect, useState } from 'react';

// const Logo = () => (
//   <img
//     src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Vignan_logo.png"
//     alt="Vignan's Logo"
//     style={{ width: '150px', height: '150px' }}
//   />
// );

// const EyeIcon = ({ size = 20 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     style={{ width: size, height: size }}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M2.036 12.322a1.012 1.012 0 010-.639l4.43-7.086a1 1 0 011.558 0l4.43 7.086a1 1 0 010 .639l-4.43 7.086a1 1 0 01-1.558 0l-4.43-7.086z"
//     />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//   </svg>
// );

// const EyeSlashIcon = ({ size = 20 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     style={{ width: size, height: size }}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.774 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.572M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243"
//     />
//   </svg>
// );


// const AdminLogin = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   // This single, clean useEffect block injects all dynamic and responsive styles.
//   useEffect(() => {
//     const styleId = 'admin-login-final-styles';
//     if (document.getElementById(styleId)) return;

//     const styleSheet = document.createElement("style");
//     styleSheet.id = styleId;
//     styleSheet.innerHTML = `
//       /* --- 1. CSS Variables for a Clean, Maintainable Theme --- */
//       :root {
//         --brand-red: #D50000;
//         --brand-yellow: #0755ffff;
//         --brand-blue: #007bff;
//         --text-primary: #212529;
//         --text-secondary: #6c757d;
//         --background-white: #ffffff;
//         --border-color: #dee2e6;
//         --gradient-start: #141e30;
//         --gradient-end: #243b55;
//       }

//       /* --- 2. Animated Background Keyframes --- */
//       @keyframes gradient-animation {
//         0% { background-position: 0% 50%; }
//         50% { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }

//       /* --- 3. Professional Hover & Focus Effects --- */
//       .final-input::placeholder {
//         color: #9fa6b2;
//       }

//       .final-input:focus {
//         border-color: var(--brand-blue);
//         box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
//         outline: none;
//       }

//       .final-button {
//         transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, background-color 0.2s ease-out, color 0.2s ease-out;
//       }

//       .final-button-primary:hover {
//         transform: scale(1.05);
//         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//         background-color: #ffca2c;
//       }

//       .final-button-secondary:hover {
//         transform: scale(1.05);
//         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//         background-color: var(--brand-blue);
//         color: var(--background-white);
//         border-color: var(--brand-blue);
//       }
      
//       .final-password-toggle-button:hover {
//         opacity: 0.7;
//       }

//       /* --- 4. Flawless Mobile Responsiveness --- */
//       @media (max-width: 850px) {
//         .final-container {
//           flex-direction: column;
//           width: 95%;
//           max-width: 420px;
//           margin-top: 20px;
//           margin-bottom: 20px;
//         }
//         .final-left-panel {
//           border-right: none;
//           border-bottom: 1px solid var(--border-color);
//           padding: 30px;
//         }
//         .final-right-panel {
//           padding: 35px 30px;
//         }
//       }
//     `;
//     document.head.appendChild(styleSheet);
//   }, []);

//   const goToHome = () => {
//     alert("Navigating to the home page!");
//   };

//   const handleForgotPassword = (e: React.MouseEvent) => {
//     e.preventDefault();
//     alert("Forgot Password clicked! Implement your logic here.");
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.container} className="final-container">
//         {/* Left Panel */}
//         <div style={styles.leftPanel} className="final-left-panel">
//           <Logo />
//           <h1 style={styles.title}>Vignan's</h1>
//           <p style={styles.subtitle}>Institute of Information Technology</p>
//           <p style={styles.autonomous}>(Autonomous)</p>
//         </div>

//         {/* Right Panel */}
//         <div style={styles.rightPanel} className="final-right-panel">
//           <h2 style={styles.loginHeader}>Admin Login</h2>
//           <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
//             <div style={styles.inputGroup}>
//               <input type="email" id="email" placeholder="Email Address" style={styles.input} className="final-input" />
//             </div>
//             <div style={styles.inputGroup}>
//               <input
//                 type={passwordVisible ? 'text' : 'password'}
//                 id="password"
//                 placeholder="Password"
//                 style={{ ...styles.input, ...styles.passwordInput }}
//                 className="final-input"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 style={styles.passwordToggle}
//                 className="final-password-toggle-button"
//                 aria-label={passwordVisible ? "Hide password" : "Show password"}
//               >
//                 {passwordVisible ? <EyeSlashIcon /> : <EyeIcon />}
//               </button>
//             </div>
//             <button type="submit" style={styles.primaryButton} className="final-button final-button-primary">
//               Login
//             </button>
//             <button type="button" onClick={goToHome} style={styles.secondaryButton} className="final-button final-button-secondary">
//               Go to Home
//             </button>
//             <a href="@components/ForgotPass.tsx" onClick={handleForgotPassword} style={styles.forgotPassword}>
//               Forgot Password?
//             </a>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//   page: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     background: 'linear-gradient(-45deg, var(--gradient-start), var(--gradient-end))',
//     backgroundSize: '400% 400%',
//     animation: 'gradient-animation 15s ease infinite',
//     fontFamily: "'Poppins', 'Segoe UI', 'Roboto', sans-serif",
//     padding: '20px',
//     boxSizing: 'border-box',
//   },
//   container: {
//     display: 'flex',
//     width: '100%',
//     maxWidth: '850px',
//     minHeight: '500px',
//     borderRadius: '12px',
//     backgroundColor: 'var(--background-white)',
//     boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)',
//     overflow: 'hidden',
//   },
//   leftPanel: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px',
//     textAlign: 'center',
//     borderRight: '1px solid var(--border-color)',
//   },
//   title: {
//     color: 'var(--brand-red)',
//     margin: '15px 0 5px',
//     fontSize: 'clamp(2.5rem, 5vw, 2.8rem)',
//     fontWeight: 700,
//   },
//   subtitle: {
//     color: 'var(--text-primary)',
//     margin: '0',
//     fontSize: 'clamp(1rem, 2vw, 1.05rem)',
//     fontWeight: 500,
//   },
//   autonomous: {
//     color: 'var(--text-secondary)',
//     margin: '5px 0 0',
//     fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
//   },
//   rightPanel: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: '40px 50px',
//   },
//   loginHeader: {
//     fontSize: 'clamp(1.7rem, 3vw, 1.8rem)',
//     fontWeight: 600,
//     color: 'var(--text-primary)',
//     marginBottom: '30px',
//     textAlign: 'center',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     alignItems: 'center',
//   },
//   inputGroup: {
//     marginBottom: '18px',
//     width: '100%',
//     position: 'relative',
//   },
//   input: {
//     width: '100%',
//     padding: '12px 16px',
//     backgroundColor: '#f3f4f6',
//     border: '1px solid var(--border-color)',
//     borderRadius: '8px',
//     color: 'var(--text-primary)',
//     fontSize: '1rem',
//     boxSizing: 'border-box',
//     transition: 'all 0.2s ease',
//   },
//   passwordInput: {
//     paddingRight: '45px', // Make space for the icon
//   },
//   passwordToggle: {
//     position: 'absolute',
//     top: '50%',
//     right: '10px',
//     transform: 'translateY(-50%)',
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     color: 'var(--text-secondary)',
//     padding: '5px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'opacity 0.2s ease-out'
//   },
//   primaryButton: {
//     padding: '10px 45px',
//     width: 'auto',
//     border: 'none',
//     borderRadius: '8px',
//     backgroundColor: 'var(--brand-yellow)',
//     color: 'var(--text-primary)',
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginBottom: '12px',
//   },
//   secondaryButton: {
//     padding: '9px 35px',
//     width: 'auto',
//     backgroundColor: 'transparent',
//     color: 'var(--brand-blue)',
//     border: '1px solid var(--brand-blue)',
//     borderRadius: '8px',
//     fontSize: '0.9rem',
//     fontWeight: 500,
//     cursor: 'pointer',
//     textAlign: 'center',
//     marginBottom: '15px',
//   },
//   forgotPassword: {
//     color: 'var(--brand-blue)',
//     textDecoration: 'none',
//     fontSize: '0.9rem',
//     fontWeight: 500,
//   },
// };

// export default AdminLogin;    
//                           








// // import React, { useEffect, useState } from 'react';
// import React, { useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { StoreContext } from '../context/StoreContext';
// // import AdminDashboard from './AdminDashboard';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Logo = () => (
//   <img 
//     src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Vignan_logo.png" 
//     alt="Vignan's Logo" 
//     style={{ width: '150px', height: '150px' }} 
//   />
// );

// const EyeIcon = ({ size = 20 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     style={{ width: size, height: size }}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
//     />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//   </svg>
// );

// const EyeSlashIcon = ({ size = 20 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     style={{ width: size, height: size }}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.774 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.572M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243"
//     />
//   </svg>
// );

// const AdminLogin = () => {
//   // Mock context values for demonstration
//   // const url = 'http://localhost:5000';
//   // const setToken = (token) => console.log('Setting token:', token);
//   // const setRender = (value) => console.log('Setting render:', value);
//   const { setToken, url, token, render, setRender } = useContext(StoreContext);
//   const navigate = useNavigate();
  
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   // const [render, setRender] =useState(false);
//   // const [token, setToken] = useState(null);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [forgotPasswordStep, setForgotPasswordStep] = useState('email');
//   const [otpTimer, setOtpTimer] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
  
//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   });

//   const [forgotPasswordData, setForgotPasswordData] = useState({
//     email: "",
//     otp: "",
//     newPassword: "",
//     confirmPassword: ""
//   });

//   // Timer effect for OTP countdown
//   useEffect(() => {
//     let interval;
//     if (otpTimer > 0) {
//       interval = setInterval(() => {
//         setOtpTimer(timer => timer - 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [otpTimer]);

//   // Inject styles
//   useEffect(() => {
//     const styleId = 'admin-login-final-styles';
//     if (document.getElementById(styleId)) return;

//     const styleSheet = document.createElement("style");
//     styleSheet.id = styleId;
//     styleSheet.innerHTML = `
//       :root {
//         --brand-red: #D50000;
//         --brand-yellow: #0755ffff;
//         --brand-blue: #007bff;
//         --text-primary: #212529;
//         --text-secondary: #6c757d;
//         --background-white: #ffffff;
//         --border-color: #dee2e6;
//         --gradient-start: #141e30;
//         --gradient-end: #243b55;
//         --success-color: #28a745;
//         --danger-color: #dc3545;
//         --warning-color: #ffc107;
//       }

//       @keyframes gradient-animation {
//         0% { background-position: 0% 50%; }
//         50% { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }

//       @keyframes fadeIn {
//         from { opacity: 0; transform: translateY(20px); }
//         to { opacity: 1; transform: translateY(0); }
//       }

//       .final-input::placeholder {
//         color: #9fa6b2;
//       }

//       .final-input:focus {
//         border-color: var(--brand-blue);
//         box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
//         outline: none;
//       }

//       .final-button {
//         transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, background-color 0.2s ease-out, color 0.2s ease-out;
//       }

//       .final-button-primary:hover {
//         transform: scale(1.05);
//         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//         background-color: #ffca2c;
//       }

//       .final-button-secondary:hover {
//         transform: scale(1.05);
//         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//         background-color: var(--brand-blue);
//         color: var(--background-white);
//         border-color: var(--brand-blue);
//       }
      
//       .final-password-toggle-button:hover {
//         opacity: 0.7;
//       }

//       .forgot-password-modal {
//         animation: fadeIn 0.3s ease-out;
//       }

//       .otp-input {
//         text-align: center;
//         font-size: 1.2rem;
//         letter-spacing: 0.5rem;
//         font-weight: bold;
//       }

//       .timer-text {
//         color: var(--brand-blue);
//         font-weight: 500;
//         margin-top: 10px;
//       }

//       .toast {
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         padding: 12px 20px;
//         border-radius: 8px;
//         color: white;
//         font-weight: 500;
//         z-index: 10000;
//         animation: fadeIn 0.3s ease-out;
//       }

//       .toast-success {
//         background-color: var(--success-color);
//       }

//       .toast-error {
//         background-color: var(--danger-color);
//       }

//       @media (max-width: 850px) {
//         .final-container {
//           flex-direction: column;
//           width: 95%;
//           max-width: 420px;
//           margin-top: 20px;
//           margin-bottom: 20px;
//         }
//         .final-left-panel {
//           border-right: none;
//           border-bottom: 1px solid var(--border-color);
//           padding: 30px;
//         }
//         .final-right-panel {
//           padding: 35px 30px;
//         }
//       }
//     `;
//     document.head.appendChild(styleSheet);
//   }, []);

//   const showToast = (message, type = 'success') => {
//     const toast = document.createElement('div');
//     toast.className = `toast toast-${type}`;
//     toast.textContent = message;
//     document.body.appendChild(toast);
    
//     setTimeout(() => {
//       toast.remove();
//     }, 3000);
//   };

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData(data => ({ ...data, [name]: value }));
//   };

//   const onForgotPasswordChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setForgotPasswordData(data => ({ ...data, [name]: value }));
//   };

//   // const onLogin = async (e) => {
//   //   e.preventDefault();
//   //   setIsLoading(true);
    
//   //   // Mock API call - replace with actual axios call in your project
//   //   try {
//   //     console.log('Login attempt with:', data);
      
//   //     // Simulate API response delay
//   //     await new Promise(resolve => setTimeout(resolve, 1500));
      
//   //     if (data.email && data.password) {
//   //       const mockToken = 'mock-jwt-token-' + Date.now();
//   //       setToken(mockToken);
//   //       localStorage.setItem("token", mockToken);
//   //       setRender(true);
        
//   //       showToast("Login successful! Redirecting to dashboard...", 'success');
        
//   //       // In your actual implementation, use navigate('/admin/dashboard');
//   //       setTimeout(() => {
//   //         console.log('Would navigate to /admin/dashboard');
//   //       }, 1000);
//   //     } else {
//   //       showToast("Please fill in all fields", 'error');
//   //     }
//   //   } catch (error) {
//   //     console.error("Login Error:", error);
//   //     showToast("Login failed. Please try again.", 'error');
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };


//   const onLogin = async (e) => {
//   e.preventDefault();
//   setIsLoading(true);
//   try {
//     const res = await axios.post(`${url}/api/user/login`, data);
//     setToken(res.data.token);
//     localStorage.setItem("token", res.data.token);
//     setRender(true);
//     showToast("Login successful! Redirecting to dashboard...", 'success');
//     setTimeout(() => { console.log('Would navigate to /admin/dashboard'); }, 800);
//   } catch (error) {
//     showToast(error.response?.data?.message || "Login failed", 'error');
//   } finally {
//     setIsLoading(false);
//   }
// };

//  const sendOTP = async (email:string) => {
//   try {
//     await axios.post(`${url}/api/user/send-otp`, {email});
//     showToast("OTP sent to your email!", 'success');
//     setForgotPasswordStep('otp');
//     setOtpTimer(300);
//     return true;
//   } catch (error) {
//     showToast(error.response?.data?.message || "Failed to send OTP", 'error');
//     return false;
//   }
// };

// const verifyOTP = async (email, otp) => {
//   try {
//     await axios.post(`${url}/api/user/verify-otp`, { email, otp });
//     showToast("OTP verified successfully!", 'success');
//     setForgotPasswordStep('reset');
//     return true;
//   } catch (error) {
//     showToast(error.response?.data?.message || "Invalid OTP", 'error');
//     return false;
//   }
// };

// const resetPassword = async (email, otp, newPassword) => {
//   try {
//     await axios.post(`${url}/api/user/reset-password`, { email, otp, newPassword });
//     showToast("Password reset successfully!", 'success');
//     setShowForgotPassword(false);
//     setForgotPasswordStep('email');
//     setForgotPasswordData({ email: "", otp: "", newPassword: "", confirmPassword: "" });
//     return true;
//   } catch (error) {
//     showToast(error.response?.data?.message || "Password reset failed", 'error');
//     return false;
//   }
// };

//   const handleForgotPasswordSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       if (forgotPasswordStep === 'email') {
//         if (!forgotPasswordData.email) {
//           showToast("Please enter your email address", 'error');
//           return;
//         }
//         await sendOTP(forgotPasswordData.email);
//       } else if (forgotPasswordStep === 'otp') {
//         if (!forgotPasswordData.otp) {
//           showToast("Please enter the OTP", 'error');
//           return;
//         }
//         await verifyOTP(forgotPasswordData.email, forgotPasswordData.otp);
//       } else if (forgotPasswordStep === 'reset') {
//         if (!forgotPasswordData.newPassword || !forgotPasswordData.confirmPassword) {
//           showToast("Please fill in both password fields", 'error');
//           return;
//         }
//         if (forgotPasswordData.newPassword !== forgotPasswordData.confirmPassword) {
//           showToast("Passwords do not match", 'error');
//           return;
//         }
//         if (forgotPasswordData.newPassword.length < 6) {
//           showToast("Password must be at least 6 characters long", 'error');
//           return;
//         }
//         await resetPassword(forgotPasswordData.email, forgotPasswordData.otp, forgotPasswordData.newPassword);
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleForgotPassword = (e) => {
//     e.preventDefault();
//     setShowForgotPassword(true);
//   };

//   const closeForgotPassword = () => {
//     setShowForgotPassword(false);
//     setForgotPasswordStep('email');
//     setForgotPasswordData({ email: "", otp: "", newPassword: "", confirmPassword: "" });
//     setOtpTimer(0);
//   };

//   const goToHome = () => {
//     console.log('Navigating to home page');
//     showToast("Navigating to home page!", 'success');
//   };

//   const resendOTP = async () => {
//     if (otpTimer > 0) return;
//     await sendOTP(forgotPasswordData.email);
//   };

//   return (
//     <div className="gradient-bg" style={styles.page}>
//       <div style={styles.container} className="final-container">
//         {/* Left Panel */}
//         <div style={styles.leftPanel} className="final-left-panel">
//           <Logo />
//           <h1 style={styles.title}>Vignan's</h1>
//           <p style={styles.subtitle}>Institute of Information Technology</p>
//           <p style={styles.autonomous}>(Autonomous)</p>
//         </div>

//         {/* Right Panel */}
//         <div style={styles.rightPanel} className="final-right-panel">
//           <h2 style={styles.loginHeader}>Admin Login</h2>
//           <div style={styles.form}>
//             <div style={styles.inputGroup}>
//               <input 
//                 type="email" 
//                 id="email" 
//                 placeholder="Email Address" 
//                 style={styles.input} 
//                 className="final-input" 
//                 name='email' 
//                 onChange={onChangeHandler} 
//                 value={data.email}
//                 disabled={isLoading}
//               />
//             </div>
//             <div style={styles.inputGroup}>
//               <input 
//                 type={passwordVisible ? 'text' : 'password'} 
//                 id="password" 
//                 placeholder="Password" 
//                 style={{ ...styles.input, ...styles.passwordInput }} 
//                 className="final-input" 
//                 name='password' 
//                 onChange={onChangeHandler} 
//                 value={data.password}
//                 disabled={isLoading}
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 style={styles.passwordToggle}
//                 className="final-password-toggle-button"
//                 aria-label={passwordVisible ? "Hide password" : "Show password"}
//                 disabled={isLoading}
//               >
//                 {passwordVisible ? <EyeSlashIcon /> : <EyeIcon />}
//               </button>
//             </div>
//             <button 
//               type="submit" 
//               onClick={onLogin}
//               style={{...styles.primaryButton, opacity: isLoading ? 0.7 : 1}} 
//               className="final-button final-button-primary"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Logging in...' : 'Login'}
//             </button>
//             <button 
//               type="button" 
//               onClick={goToHome} 
//               style={styles.secondaryButton} 
//               className="final-button final-button-secondary"
//               disabled={isLoading}
//             >
//               Go to Home
//             </button>
//             <a 
//               href="#" 
//               onClick={handleForgotPassword} 
//               style={{...styles.forgotPassword, pointerEvents: isLoading ? 'none' : 'auto'}}
//             >
//               Forgot Password?
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Forgot Password Modal */}
//       {showForgotPassword && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modal} className="forgot-password-modal">
//             <div style={styles.modalHeader}>
//               <h3 style={styles.modalTitle}>
//                 {forgotPasswordStep === 'email' && 'Reset Password'}
//                 {forgotPasswordStep === 'otp' && 'Verify OTP'}
//                 {forgotPasswordStep === 'reset' && 'Set New Password'}
//               </h3>
//               <button onClick={closeForgotPassword} style={styles.closeButton} disabled={isLoading}>×</button>
//             </div>
            
//             <div style={styles.modalForm}>
//               {forgotPasswordStep === 'email' && (
//                 <>
//                   <p style={styles.modalDescription}>
//                     Enter your email address and we'll send you an OTP to reset your password.
//                   </p>
//                   <div style={styles.inputGroup}>
//                     <input
//                       type="email"
//                       placeholder="Email Address"
//                       style={styles.input}
//                       className="final-input"
//                       name="email"
//                       value={forgotPasswordData.email}
//                       onChange={onForgotPasswordChangeHandler}
//                       disabled={isLoading}
//                     />
//                   </div>
//                 </>
//               )}

//               {forgotPasswordStep === 'otp' && (
//                 <>
//                   <p style={styles.modalDescription}>
//                     Enter the 6-digit OTP sent to {forgotPasswordData.email}
//                     <br /><small style={{color: '#666', fontSize: '0.85rem'}}>Demo OTP: 123456</small>
//                   </p>
//                   <div style={styles.inputGroup}>
//                     <input
//                       type="text"
//                       placeholder="Enter OTP"
//                       style={{ ...styles.input, ...styles.otpInput }}
//                       className="final-input otp-input"
//                       name="otp"
//                       value={forgotPasswordData.otp}
//                       onChange={onForgotPasswordChangeHandler}
//                       maxLength="6"
//                       disabled={isLoading}
//                     />
//                   </div>
//                   {otpTimer > 0 ? (
//                     <p className="timer-text" style={styles.timerText}>
//                       Resend OTP in {Math.floor(otpTimer / 60)}:{(otpTimer % 60).toString().padStart(2, '0')}
//                     </p>
//                   ) : (
//                     <button 
//                       type="button" 
//                       onClick={resendOTP} 
//                       style={styles.resendButton}
//                       disabled={isLoading}
//                     >
//                       Resend OTP
//                     </button>
//                   )}
//                 </>
//               )}

//               {forgotPasswordStep === 'reset' && (
//                 <>
//                   <p style={styles.modalDescription}>
//                     Enter your new password
//                   </p>
//                   <div style={styles.inputGroup}>
//                     <input
//                       type="password"
//                       placeholder="New Password"
//                       style={styles.input}
//                       className="final-input"
//                       name="newPassword"
//                       value={forgotPasswordData.newPassword}
//                       onChange={onForgotPasswordChangeHandler}
//                       disabled={isLoading}
//                     />
//                   </div>
//                   <div style={styles.inputGroup}>
//                     <input
//                       type="password"
//                       placeholder="Confirm New Password"
//                       style={styles.input}
//                       className="final-input"
//                       name="confirmPassword"
//                       value={forgotPasswordData.confirmPassword}
//                       onChange={onForgotPasswordChangeHandler}
//                       disabled={isLoading}
//                     />
//                   </div>
//                 </>
//               )}

//               <button 
//                 type="submit" 
//                 onClick={handleForgotPasswordSubmit}
//                 style={{...styles.modalSubmitButton, opacity: isLoading ? 0.7 : 1}} 
//                 className="final-button final-button-primary"
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Processing...' : 
//                   forgotPasswordStep === 'email' ? 'Send OTP' :
//                   forgotPasswordStep === 'otp' ? 'Verify OTP' : 'Reset Password'
//                 }
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   page: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     background: 'linear-gradient(-45deg, var(--gradient-start), var(--gradient-end))',
//     backgroundSize: '400% 400%',
//     animation: 'gradient-animation 15s ease infinite',
//     fontFamily: `'Poppins', 'Segoe UI', 'Roboto', sans-serif`,
//     padding: '20px',
//     boxSizing: 'border-box',
//   } as React.CSSProperties,

//   container: {
//     display: 'flex',
//     width: '100%',
//     maxWidth: '850px',
//     minHeight: '500px',
//     borderRadius: '12px',
//     backgroundColor: 'var(--background-white)',
//     boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)',
//     overflow: 'hidden',
//   } as React.CSSProperties,

//   leftPanel: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px',
//     textAlign: 'center',
//     borderRight: '1px solid var(--border-color)',
//   } as React.CSSProperties,

//   title: {
//     color: 'var(--brand-red)',
//     margin: '15px 0 5px',
//     fontSize: 'clamp(2.5rem, 5vw, 2.8rem)',
//     fontWeight: 700,
//   } as React.CSSProperties,

//   subtitle: {
//     color: 'var(--text-primary)',
//     margin: '0',
//     fontSize: 'clamp(1rem, 2vw, 1.05rem)',
//     fontWeight: 500,
//   } as React.CSSProperties,

//   autonomous: {
//     color: 'var(--text-secondary)',
//     margin: '5px 0 0',
//     fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
//   } as React.CSSProperties,

//   rightPanel: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: '40px 50px',
//   } as React.CSSProperties,

//   loginHeader: {
//     fontSize: 'clamp(1.7rem, 3vw, 1.8rem)',
//     fontWeight: 600,
//     color: 'var(--text-primary)',
//     marginBottom: '30px',
//     textAlign: 'center',
//   } as React.CSSProperties,

//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     alignItems: 'center',
//   } as React.CSSProperties,

//   inputGroup: {
//     marginBottom: '18px',
//     width: '100%',
//     position: 'relative',
//   } as React.CSSProperties,

//   input: {
//     width: '100%',
//     padding: '12px 16px',
//     backgroundColor: '#f3f4f6',
//     border: '1px solid var(--border-color)',
//     borderRadius: '8px',
//     color: 'var(--text-primary)',
//     fontSize: '1rem',
//     boxSizing: 'border-box',
//     transition: 'all 0.2s ease',
//   } as React.CSSProperties,

//   passwordInput: {
//     paddingRight: '45px',
//   } as React.CSSProperties,

//   passwordToggle: {
//     position: 'absolute',
//     top: '50%',
//     right: '10px',
//     transform: 'translateY(-50%)',
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     color: 'var(--text-secondary)',
//     padding: '5px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'opacity 0.2s ease-out'
//   } as React.CSSProperties,

//   primaryButton: {
//     padding: '10px 45px',
//     width: 'auto',
//     border: 'none',
//     borderRadius: '8px',
//     backgroundColor: 'var(--brand-yellow)',
//     color: 'white',
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginBottom: '12px',
//   } as React.CSSProperties,

//   secondaryButton: {
//     padding: '9px 35px',
//     width: 'auto',
//     backgroundColor: 'transparent',
//     color: 'var(--brand-blue)',
//     border: '1px solid var(--brand-blue)',
//     borderRadius: '8px',
//     fontSize: '0.9rem',
//     fontWeight: 500,
//     cursor: 'pointer',
//     textAlign: 'center',
//     marginBottom: '15px',
//   } as React.CSSProperties,

//   forgotPassword: {
//     color: 'var(--brand-blue)',
//     textDecoration: 'none',
//     fontSize: '0.9rem',
//     fontWeight: 500,
//     cursor: 'pointer',
//   } as React.CSSProperties,

//   // Modal styles
//   modalOverlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   } as React.CSSProperties,

//   modal: {
//     backgroundColor: 'var(--background-white)',
//     borderRadius: '12px',
//     padding: '0',
//     width: '90%',
//     maxWidth: '450px',
//     maxHeight: '90vh',
//     overflow: 'auto',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
//   } as React.CSSProperties,

//   modalHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '20px 30px',
//     borderBottom: '1px solid var(--border-color)',
//   } as React.CSSProperties,

//   modalTitle: {
//     margin: 0,
//     fontSize: '1.5rem',
//     fontWeight: 600,
//     color: 'var(--text-primary)',
//   } as React.CSSProperties,

//   closeButton: {
//     background: 'none',
//     border: 'none',
//     fontSize: '2rem',
//     cursor: 'pointer',
//     color: 'var(--text-secondary)',
//     padding: '0',
//     width: '30px',
//     height: '30px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   } as React.CSSProperties,

//   modalForm: {
//     padding: '30px',
//   } as React.CSSProperties,

//   modalDescription: {
//     color: 'var(--text-secondary)',
//     marginBottom: '20px',
//     fontSize: '0.95rem',
//     lineHeight: 1.5,
//   } as React.CSSProperties,

//   modalSubmitButton: {
//     padding: '12px 0',
//     width: '100%',
//     border: 'none',
//     borderRadius: '8px',
//     backgroundColor: 'var(--brand-yellow)',
//     color: 'white',
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginTop: '10px',
//   } as React.CSSProperties,

//   otpInput: {
//     textAlign: 'center',
//     fontSize: '1.2rem',
//     letterSpacing: '0.5rem',
//     fontWeight: 'bold',
//   } as React.CSSProperties,

//   timerText: {
//     color: 'var(--brand-blue)',
//     fontWeight: 500,
//     marginTop: '10px',
//     textAlign: 'center',
//     fontSize: '0.9rem',
//   } as React.CSSProperties,

//   resendButton: {
//     background: 'none',
//     border: 'none',
//     color: 'var(--brand-blue)',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: 500,
//     textDecoration: 'underline',
//     marginTop: '10px',
//     display: 'block',
//     width: '100%',
//     textAlign: 'center',
//   } as React.CSSProperties,
// };

// export default AdminLogin;
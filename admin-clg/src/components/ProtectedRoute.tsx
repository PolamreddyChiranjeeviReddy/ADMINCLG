// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { StoreContext } from '../context/StoreContext';

// const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//   const { token } = useContext(StoreContext);

//   if (!token) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;



import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(StoreContext);

  if (!context) {
    return <Navigate to="/" replace />;
  }

  const { token } = context;

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
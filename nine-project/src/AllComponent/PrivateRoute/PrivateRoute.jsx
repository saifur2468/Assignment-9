











// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../../AllComponent/AuthSection/AuthoProvider';

// const PrivateRoute = ({ children }) => {
//   const { user } = useAuth();
//   const location = useLocation();

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default PrivateRoute;











import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthSection/AuthoProvider';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
 
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;


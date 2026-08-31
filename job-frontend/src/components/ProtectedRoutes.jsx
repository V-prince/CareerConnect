
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../store/UserContext'
import { LoadingPage } from './Loadings/LoadingPage';

export const ProtectedRoutes = ({ allowedRoles = [] }) => {

  const { user, loading } = useAuth();
  if (loading) {
    return <LoadingPage/>
  }

  if (!user) {
    return <Navigate to={'/login'} replace />
  }

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to={"/"} replace />
  }

  return <Outlet />
}

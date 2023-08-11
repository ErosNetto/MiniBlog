import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

import styles from './Navbar.module.css';

const NavBar = () => {
  const { user } = useAuthValue();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        <li>
        {!user && (
          <>
            <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : '')}>Entrar</NavLink>
            <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : '')}>Cadastrar</NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active : '')}>Novo post</NavLink>
            <NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active : '')}>Dashboard</NavLink>
          </>
        )}
        <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
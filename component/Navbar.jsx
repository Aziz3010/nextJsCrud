import React from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <h1>CRUD System</h1>
        <ul className={styles.nav_ul}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/addPost">Add Post</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;
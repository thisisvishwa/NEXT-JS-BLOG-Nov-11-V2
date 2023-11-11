import React from 'react';
import Link from 'next/link';
import styles from '../styles/components.scss';

const Navbar = () => {
    return (
        <nav id="navbar" className={styles.navbar}>
            <div className={styles.navbarBrand}>
                <Link href="/">
                    <a>Tech Blog</a>
                </Link>
            </div>
            <div className={styles.navbarMenu}>
                <ul>
                    <li>
                        <Link href="/articles">
                            <a>Articles</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/categories">
                            <a>Categories</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/authors">
                            <a>Authors</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/search">
                            <a>Search</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.navbarUser}>
                <Link href="/profile">
                    <a>Profile</a>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
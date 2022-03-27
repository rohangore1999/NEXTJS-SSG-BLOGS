import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


function Nav() {
    return (
        <nav className={styles.mainnav}>
            <ul>
                <Link href={'/'}>
                    <a>
                        <li>Home</li>
                    </a>
                </Link>

                <Link href={'/'}>
                    <a>
                        <li>About</li>
                    </a>
                </Link>

                <Link href={'/blogs'}>
                    <a>
                        <li>Blogs</li>
                    </a>
                </Link>

                <Link href={'/'}>
                    <a>
                        <li>Contact</li>
                    </a>
                </Link>

            </ul>
        </nav>
    )
}

export default Nav
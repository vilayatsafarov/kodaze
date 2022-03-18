import Link from 'next/link'
import React from 'react';
import styles from "../styles/Top.module.css";

const Top = ({url}) => {
    return (
        <div>
            <p>
                <Link href={`#${url}`}  >
                    <i className={`fas fa-arrow-up ${styles.arrow}`}></i>
                </Link>
            </p>
        </div>
    )
}

export default Top

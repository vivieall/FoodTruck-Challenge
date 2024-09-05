import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>Created by: <strong>Viviana Angeles </strong> - </p>
            <div className={styles.socialLinks}>
                <a href="https://github.com/vivieall" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/angeleslviviana" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://x.com/vivieal" target="_blank" rel="noopener noreferrer">X</a>
            </div>
        </footer>
    );
};

export default Footer;
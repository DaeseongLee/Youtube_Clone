import React, { useRef } from 'react';
import styles from './headerSearch.module.css';
const HeaderSearch = ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter')
            handleSearch()
    };
    const handleClick = () => { handleSearch() };
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <i className={`fab fa-youtube ${styles.logoImg}`}></i>
                <span className={styles.logoTitle}>Youtube</span>
            </div>
            <input ref={inputRef} type="search" className={styles.input} onKeyPress={handleKeyPress} />
            <button className={styles.button}><i className={`fas fa-search ${styles.searchImg}`} onClick={handleClick}></i></button>
        </header>
    );
};

export default HeaderSearch;
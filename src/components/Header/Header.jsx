import styles from './Header.module.css'
import searchIcon from './loupe.png'

function Header({handleInput, value, handleSearch, handleRefresh, handleKeySearch}) {

    return (
        <div className={styles.HeaderContainer}>
            <h1 onClick={handleRefresh}>User Search App</h1>
            <input type="text" placeholder="Search users by Name or Company" value={value} onChange={handleInput} onKeyDown={handleKeySearch}/>
            <img src={searchIcon} alt="" width="30px" height="30px" onClick={handleSearch} />
        </div>
    )
}

export default Header

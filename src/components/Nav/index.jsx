/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styles from './index.module.scss'

const Nav = ({ search, setSearch}) => {
    return (
        <nav>
            <form htmlFor="search" className={styles.search__form} onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text"
                    id="search"
                    required
                    placeholder="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul className={styles.list__item}>
                <li><Link className={styles.list__link} >Home</Link></li>
                <li><Link className={styles.list__link} >Posts</Link></li>
            </ul>
        </nav>
    )
}

export default Nav

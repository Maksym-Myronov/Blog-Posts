/* eslint-disable react/prop-types */
import styles from './index.module.scss'

const Header = ({ title }) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.header__components}>{title}</h1>
        </div>
    )
}

export default Header

import styles from './styles.module.scss'
import {ReactNode} from "react";

const Card = ({children}: {children: ReactNode}) => {
    return <div className={styles.test}>{children}</div>
}

export default Card
import Container from '../../Container'
import styles from './styles.module.css'
import logo from '../../../assets/logo.png'

function NavBar() {
    return (
        <div className={styles.navbar}>
            <Container>
                <Link>
                    <img src={logo} alt='Logo da todo list'/>
                </Link>
            </Container>
        </div>
    )
}

export default NavBar
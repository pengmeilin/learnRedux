import {Link, NavLink} from 'react-router-dom';
import moment from 'moment';

const Navbar = (props) =>{
    // console.log(props)
    //  setTimeout(() =>{
    //     props.history.push('/todo');
    // },2000)
    return (
        <nav className="nav-wrapper red darken-3">
            <div className='container'>
                <a href="/" className='brand-logo'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</a>
                <ul className='right'>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/todo">ToDo</NavLink></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;
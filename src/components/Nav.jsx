import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <hr />
            <Link to='/Create'>Create</Link>
            <hr />
            <Link to='/Show'>Show</Link>
            <hr />
            {/* <Link to='/Filter'>Filter</Link> */}

        </div>
    )
}

export default Nav
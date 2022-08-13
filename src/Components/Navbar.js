import logo from './../Assets/Images/logo.png';
import './Navbar.css';


const Navbar = ({ web3Handler, account }) => {
    return (
        <nav className="flex-between">
            <a
                className='flex'
                target="./"
                rel="noopener noreferrer"
            >
                <img src={logo} className="App-logo" alt="logo" />
                Samsara
            </a>

            {account ? (
                <a
                    href={`${""}/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button">
                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                </a>
            ) : (
                <button onClick={web3Handler} className="button">Connect Wallet</button>
            )}
        </nav>
    )
}

export default Navbar;
import withAuthenticationOnly from "./withAuthenticationOnly";

const Advertising = (props) => {
    return <div className='advertising'>
        <img src="https://via.placeholder.com/150" />
    </div>;
};

export default withAuthenticationOnly(Advertising);
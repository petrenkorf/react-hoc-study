const withAuthenticationOnly = (Component) => {
    return function (props) {
        return props.loginStatus
            ? <Component {...props}></Component>
            : <p>You are not authenticated</p>;
    };
}

export default withAuthenticationOnly;
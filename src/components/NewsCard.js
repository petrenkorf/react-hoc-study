import './NewsCard.css';
import withAuthenticationOnly from "./withAuthenticationOnly";

const NewsCard = (props) => {
    return <div className='card'>
        <p>News Card</p>
    </div>
};

export default withAuthenticationOnly(NewsCard);
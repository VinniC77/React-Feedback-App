import { FaTimes } from 'react-icons/fa' // fa stans for Font Awesome
import PropTypes from 'prop-types'
import Card from './shared/Card'
// Instead of creating a div and design it, we could grab the Card component (which is already design) and nest the content inside of it

const FeedbackItem = ({ item, handleDelete }) => {

    // This is an example on how things work with useState:
    // const handleClick = () => {
    //     setRating((prev) => {
    //         console.log(prev)
    //         return prev + 1;
    //     });
    // }

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={handleClick}>Click</button> */}
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem
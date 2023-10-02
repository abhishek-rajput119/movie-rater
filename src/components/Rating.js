import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Rating = (props) => {
    const mov = props.mov
  return (
    <>
      <FontAwesomeIcon
        icon={faStar}
        className={mov.avg_rating > 0 ? 'orange' : ''}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={mov.avg_rating > 1 ? 'orange' : ''}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={mov.avg_rating > 2 ? 'orange' : ''}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={mov.avg_rating > 3 ? 'orange' : ''}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={mov.avg_rating > 4 ? 'orange' : ''}
      />
    </>
  )
}
export default Rating

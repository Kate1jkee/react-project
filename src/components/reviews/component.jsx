import Review from '../review/component';

const Reviews = ({reviews}) => {
  return (
    <div>
      <h3>Отзывы</h3>
        <ul>
          {reviews.map((review) => (
            <li><Review review={review}/></li>
         ))}
       </ul>
    </div>
  )
}
          
export default Reviews
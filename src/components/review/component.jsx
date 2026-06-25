     const Review = ({reviews}) => {
            return (
            <div>
            <h3>Отзывы</h3>
             <ul>
             {reviews.map((review) => (
              <li>{review.text}</li>
              ))}
             </ul>
           </div>
            )
          }
          
          export default Review
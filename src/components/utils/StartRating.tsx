export const StarRating = ({ rating }: { rating: number }) => {
  const getStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-yellow-400">
            &#9733;
          </span>,
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400">
            &#9734;
          </span>,
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex items-center justify-between">{getStars(rating)}</div>
  );
};

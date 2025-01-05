

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
            <p className="absolute right-0 mr-12  -mt-40 px-2 text-white bg-slate-900">${price}</p>
          <img
            src={image}
            alt="Food"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;

import SectionTitle from '../../Components/SectionTitle'
import img from '../../assets/home/slide1.jpg'
const Card = () => {
    return (
        <div>
            <div>
                <SectionTitle 
                heading="CHEF RECOMMENDS"
                subHeading="---Should Try---"
                >
</SectionTitle>

<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-10 '>
    {/* card 1 */}
<div className="card bg-base-100 w-72 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl w-52 h-52" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
{/* card 2  */}
<div className="card bg-base-100 w-72 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl w-52 h-52" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
{/* card 3  */}
<div className="card bg-base-100 w-72 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl w-52 h-52" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>

</div>
            </div>
        </div>
    );
};

export default Card;
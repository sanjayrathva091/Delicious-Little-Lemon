import HeroImage from "../assets/restauranfood.jpg";
import GreekSalad from "../assets/greek salad.jpg";
import Recipes from "../Recipes";

const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            aliquam dicta voluptates excepturi et facere delectus molestias
            velit eaque quos deleniti sit iure doloremque asperiores natus,
            autem recusandae fugit illum.
          </p>
          <button>Reserve a table</button>
        </div>

        <div>
          <div className="HeroImage-box">
            <img src={HeroImage} alt="hero-img" />
          </div>
        </div>
      </section>

      <section className="specials-section">
        <div className="sub-heading">
          <h1>This Week's Specials</h1>
          <button>Online Menu</button>
        </div>

        <div className="card-container">
          {Recipes.map(({ id, title, price, image, description }) => (
            <div key={id} className="card">
              <img src={image} alt={title} />
              <h3>
                <span className="dish-name">{title}</span>
                <span className="dish-price">{`$ ${price}`}</span>
              </h3>
              <p>{description}</p>
              <div>
                <button>Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;

import styled from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <section className={styled.AboutPage}>
      <div>
        <h2>
          Welcome <br /> <small>to</small> <br /> Little Lemon Restaurent
        </h2>
      </div>

      <div>
        <button>About</button>
        <p>
          At Little Lemon Restaurant, we believe that great food has the power
          to bring people together, create cherished memories, and brighten even
          the dullest of days. We are thrilled to invite you to our corner of
          culinary delight, where we blend passion, creativity, and the freshest
          ingredients to serve you a dining experience like no other.
        </p>
      </div>

      <div>
        <button>Out Story</button>
        <div className={styled.OurStory}>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2017/07/31/11/22/man-2557408_1280.jpg"
              alt="our_story"
            />
          </div>
          <p>
            Little Lemon Restaurant
            <br /> was born out of a shared love for food and <br />a dream of
            creating a welcoming space where friends and family
            <br /> could savor delicious, thoughtfully prepared meals. Founded
            in 2020, our restaurant has quickly become a cherished culinary{" "}
            <br />
            destination in the heart of Bengaluru.
          </p>
        </div>
      </div>

      <div>
        <button>Our Philosophy</button>
        <div className={styled.PhilosophyContainer}>
          <div className={styled.PhilosophyCard}>
            <p>
              <strong>Quality</strong> <br /> We believe that quality should
              never be compromised. That's why we source the finest,
              locally-sourced ingredients to craft our dishes, ensuring that
              every bite is a burst of flavor and freshness.
            </p>
          </div>

          <div className={styled.PhilosophyCard}>
            <p>
              <strong>Creativity</strong> <br /> Our talented chefs are
              dedicated to pushing the boundaries of culinary artistry. You'll
              find a menu that's a delightful fusion of traditional and
              innovative flavors, designed to tantalize your taste buds.
            </p>
          </div>

          <div className={styled.PhilosophyCard}>
            <p>
              <strong>Hospitality</strong> <br /> At Little Lemon, we pride
              ourselves on creating a warm and inviting atmosphere. Our
              attentive staff is here to make your dining experience
              exceptional, from the moment you walk through our doors to the
              time you leave with a satisfied smile.
            </p>
          </div>
        </div>
      </div>

      <div>
        <button>Our Menu</button>
        <div className={styled.OurMenu}>
          <p>
            Discover a menu that celebrates diversity and caters to various
            palates. Whether you're a fan of hearty comfort food or crave exotic
            culinary adventures, our extensive selection of appetizers, entrees,
            and desserts has something for everyone. Don't forget to explore our
            carefully curated wine and cocktail list to complement your meal.
          </p>
          <img
            src="https://cdn.pixabay.com/photo/2016/02/18/11/17/background-1206941_640.jpg"
            alt="our_menu"
          />
        </div>
      </div>

      <div>
        <button>Special Events</button>
        <p>
          Little Lemon Restaurant is not just a place to dine; it's a place to
          celebrate life's special moments. Join us for{" "}
          <strong>birthdays, anniversaries, and other occasions</strong>, and
          allow us to create memorable experiences for you and your loved ones.
        </p>
      </div>

      <div>
        <button>Private Dining</button>
        <div className={styled.PrivateDining}>
          <img
            src="https://media.istockphoto.com/id/187980241/photo/private-dining-on-the-water.webp?b=1&s=612x612&w=0&k=20&c=OruOcoymTC_gg7K8kJXYkn9A40smdeT1y_lZIvcPGeo="
            alt="private_dining"
          />
          <p>
            Looking for <br /> an intimate setting for your next event?
            <br /> Our private dining room is perfect for gatherings of all
            sizes, whether it's a family reunion, corporate meeting, or a
            romantic dinner <br /> for two.
          </p>
        </div>
      </div>

      <div>
        <button>Visit Us</button>
        <p>
          We're located at Kempegauda, in the heart of Bengalore. Reservations
          can be made online or by calling +91-623-432-1234. Join us for a
          culinary journey that will leave you craving for more.
        </p>
        <p>
          Thank you for choosing Little Lemon Restaurant. We look forward to
          serving you and making your dining experience truly exceptional. Your
          satisfaction is our highest priority, and we can't wait to share our
          love for food with you.
        </p>
        <p>
          <em>Come hungry, leave happy!</em>
        </p>
      </div>
    </section>
  );
};

export default AboutPage;

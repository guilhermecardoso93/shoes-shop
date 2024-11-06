import "../App.css";

export function Main() {
  const Product = ({
    backgroundColor,
    title,
    titleColor,
    description,
    buttonText,
    buttonClass,
    imageSrc,
    altText,
  }) => {
    return (
      <div className="product-container">
        <div className="product" style={{ backgroundColor }}>
          <div className="product-left">
            <img alt={altText} className="block" src={imageSrc} />
          </div>
          <div className="product-right">
            <div
              className="product-title"
              style={{
                fontSize: "48px",
                marginTop: "20px",
                color: titleColor,
              }}
            >
              {title}
            </div>
            <div className="product-description">{description}</div>
            <div
              className={`product-button ${buttonClass}`}
              style={{ marginTop: "10px" }}
            >
              {buttonText}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <main className="container">
      <div className="product-container">
        <div className="product">
          <div className="product-left">
            <img
              alt="Starbucks products with gold stars featured on a pink and purple gradient background."
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78735.jpg"
            />
          </div>
          <div className="product-right">
            <div className="product-title">
              Summer is brighter with free treats.*
            </div>
            <div className="product-button product-button-white">
              Join Starbucks Rewards
            </div>
          </div>
        </div>
        <div>
          <Product
            backgroundColor="#fa91aa"
            title="Summer’s brightest new drinks"
            titleColor="#1e3932"
            description="Introducing the Pineapple Passionfruit Starbucks Refreshers® beverage and the Starbucks® Paradise Drink with creamy coconutmilk."
            buttonText="Learn more"
            buttonClass="product-button-black"
            imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78796.jpg"
            altText="Two yellow iced drinks with pineapple inclusions in tall glasses."
          />

          <Product
            backgroundColor="#f06464"
            title="Cold brew for two"
            titleColor="white"
            description="Try the new Chocolate Cream Cold Brew with silky, chocolaty cold foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made vanilla-flavored sweet cream."
            buttonText="Learn more"
            buttonClass="product-button-white"
            imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78943.jpg"
            altText="Two marbled iced coffee drinks in tall glasses."
          />

          <Product
            backgroundColor="#faaa5a"
            title="Back-to-school smiles"
            titleColor="#1e3932"
            description="A Starbucks eGift makes an A+ treat for students, teachers and school support staff."
            buttonText="Send an eGift"
            buttonClass="product-button-black"
            imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79187.jpg"
            altText="Gift card with an illustrated backpack and “BACK AT IT!” message."
          />

          <Product
            backgroundColor="#9bf5b4"
            title="Anytime protein"
            titleColor="#1e3932"
            description="Try the new Chocolate Cream Cold Brew with silky, chocolaty cold foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made vanilla-flavored sweet cream."
            buttonText="Order now"
            buttonClass="product-button-black"
            imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78943.jpg"
            altText="Two marbled iced coffee drinks in tall glasses."
          />

          <footer>
            <div>
              *Starbucks Rewards is available at participating stores. Some
              restrictions apply. For full program details, visit
              starbucks.com/rewards
            </div>
            <div style={{ marginTop: "50px" }}>
              **Impossible is a registered trademark of Impossible Foods Inc.
              Used under license.
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
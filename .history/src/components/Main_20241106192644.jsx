import "../App.css";

export function Main() {
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
            <button className="product-button product-button-white">
              Join Starbucks Rewards
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

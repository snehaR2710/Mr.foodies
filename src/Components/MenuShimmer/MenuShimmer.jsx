function MenuCardSimmer() {
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary lg:w-[1050px] md:w-[694px] md:ml-[50px] lg:ml-[10px] stroke-color animate ">
        <img className="shimmer-img stroke animate" />
        <div className="restaurant-summary-details lg:w-[785px] md:w-[429px] md:ml-[3px] animate">
          <p className="name lg:ml-[30px] stroke animate"></p>
          <div className="cuisin lg:ml-[30px] stroke animate"></div>
          <p className="shimmer-w60 lg:ml-[30px] lg:w-[400px] cosfortwo stroke animate"></p>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-items-list  lg:ml-[24px] lg:w-[1030px]">
            {Array(7)
              .fill("")
              .map((element, index) => (
                <div className=" mt-[15px] m-auto shimmer-menu-card lg:w-[1000px] lg:ml-[20px]" key={index}>
                  <div className="shimmer-item-details ">
                    <h3 className="shimmer-w40 lg:w-[997px] lg:ml-[-147px] stroke animate"></h3>
                  </div>
                  <div className="shimmer-img-wrapper">
                  </div>
                </div>
               ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export {MenuCardSimmer}
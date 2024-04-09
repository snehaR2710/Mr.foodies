function CardShimmer() {
  return (
    <div className="shimmer-card boder border-red-600">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate"></div>
      <div className="shimmer-details stroke animate"></div>
    </div>   
  )  
}

function Shimmer() {
  return(
    <div>
      <div className="shimmer-container">
        {new Array(20).fill(0).map((e, index) => {
          return <CardShimmer key={index}/>
        })}
      </div>
    </div>
  )
}

export { Shimmer }

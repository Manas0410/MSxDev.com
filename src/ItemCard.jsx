function ItemCard({img="", heading,content}){
    return (<div className="card">
                <div className="card-header">
                    <img src={img}/>
                    <div className="card-heading">{heading}</div>
                </div>
                <div className="card-body">{content}</div>
    </div>)
}

export default ItemCard;
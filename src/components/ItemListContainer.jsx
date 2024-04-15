const ItemListContainer = ({mensaje} ) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col text-center">
                    <h4 style={{color:"#D96704", fontWeight:"bold" } }>{mensaje}</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;

function ShowCourseComponent({ courses, filterCourseFunction, addCourseToCartFunction }) {
    return (
        <div className="product-list">
            {filterCourseFunction.length === 0 ? (
                <p className="no-results">
                    Sorry, No matching Product found
                </p>
            ) : (
                filterCourseFunction.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img
                            className="product-image"
                            src={product.image}
                            alt={`${product.name} image`}
                        />

                        <div className="product-details">
                            <h2 className="product-title">{product.name}</h2>
                            <p className="product-price">Price:{product.price}</p>
                            <button
                                className="add-to-cart-button"
                                onClick={() => addCourseToCartFunction(product)}
                            >
                                Add to Shopping Cart 🛒
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default ShowCourseComponent;
import logo from '/public/images/logo.png';
function ProductTemplate() {
    return (
        <div className="display">
            <div className="card">
                <h2>Product Title</h2>
                <img src={logo} alt="Product Image" />
                <p> {"Featching Products From API"}</p>
                <p><b>Price: Rs.{"XXXXX"}</b></p>
            </div>
        </div>
    );
}
export default ProductTemplate;
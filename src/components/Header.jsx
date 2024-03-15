
function Header() {
  return (
    <header className="bg-success d-flex justify-content-between p-4">
        <div className="logo">
            <span>Logo</span>
        </div>
        <div className="count-cart">
            <h3>{0}</h3>
        </div>
    </header>
    )
}

export default Header
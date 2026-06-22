function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-header">
                <span className="logo">💬 ChatBox</span>
            </div>

            <div className="search-box">
                <input type="text" placeholder="Search contacts..." />
            </div>

            <div className="contact-list">

                <div className="contact-card active">
                    <h4>John Doe</h4>
                    <p>Hey, what's up?</p>
                </div>

                <div className="contact-card">
                    <h4>Jane Smith</h4>
                    <p>See you tomorrow!</p>
                </div>

            </div>

        </aside>
    )
}
export default Sidebar
import { useAuth } from "../context/AuthContext"

function Sidebar() {

    const { user } = useAuth();


    return (
        <aside className="sidebar">
            <div className="sidebar-header" style={headerLayoutStyles}>
                <div className="brand-logo" style={brandContainerStyles}>
                    <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#111b21"}}>
                        💬 ChatBox
                    </span>
                </div>
            
            <div className="user-profile-badge" style={profileBadgeStyles}>
                {user?.photoURL ? (
                    <img 
                    src={user.photoURL} 
                    alt="User"
                    referrerPolicy="no-referrer"
                    style={avatarImageStyles}
                    />
                ):(
                    <span style={{ fontSize: "1.3rem"}}>👤</span>
                )}


                <div style={textContainerStyles}>
                <span className="luser-name-display" style={userNameStyles}>
                    {user?.displayName ? user.displayName.split(' ')[0] : "Me"}</span>
                <p style={statusTextStyles}>Online</p>
            </div>
            </div>
            </div>


            <div className="search-box" style={searchBoxWrapperStyles}>
                <div style={searchFieldStyles}>
                    <svg style={searchIconStyles} viewBox="0 0 24 24" fill="none" stroke="#667781" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2='16.65'></line>
                    </svg>
                <input type="text" placeholder="Search contacts..." style={searchInputOverrideStyles} />
            </div>
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
    );
}

const headerLayoutStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent:"space-between",
  padding: "12px 15px",
  borderBottom: "1px solid #f0f0f0",
  backgroundColor: "#f0f2f5"
};

const brandContainerStyles = {
  display: "flex",
  alignItems: "center"
};

const profileBadgeStyles = {
  display: "flex",
  alignItems: "center",
  gap: "8px"
};

const avatarImageStyles = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "2px solid #00a884" 
};

const textContainerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems :"flex-start"
};

const userNameStyles = {
  fontSize: "0.85rem",
  fontWeight: "bold",
  color: "#111b21"
};

const statusTextStyles = {
  fontSize: "0.7rem",
  color: "#00a884", 
  margin: "0",
  fontWeight: "500"
};
const searchBoxWrapperStyles = {
    padding: "10px 15px",
  backgroundColor: "#f0f2f5",
  display: "flex",
  alignItems: "center"
};

const searchFieldStyles = {
    display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "100%",
  backgroundColor: "#ffffff",
  padding: "6px 12px",
  borderRadius: "8px"
};

const searchIconStyles = {
    width: "16px",
  height: "16px",
  flexShrink: 0
};

const searchInputOverrideStyles = {
     width: "100%",
  border: "none",
  outline: "none",
  fontSize: "0.9rem",
  backgroundColor: "transparent",
  color: "#000000"
};

export default Sidebar
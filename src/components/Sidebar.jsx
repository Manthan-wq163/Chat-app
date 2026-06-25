import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Sidebar() {
    
    const { user } = useAuth();

    return (
        <aside className="sidebar">
            

            <div className="sidebar-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 15px", borderBottom: "1px solid #e0e0e0", backgroundColor: "#f0f2f5" }}>
                
                <div>
                    <h3 style={{ fontSize: "1.1rem", color: "#111b21" }}>💬 ChatBox</h3>
                </div>


                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    

                    {user?.photoURL ? (
                        <img 
                            src={user.photoURL} 
                            alt="profile"
                            referrerPolicy="no-referrer" /* Vital browser fix to fetch the graphic file over localhost */
                            width="40"
                            style={{ borderRadius: "50%", height: "40px", objectFit: "cover" }}
                        />
                    ) : (
                        <span style={{ fontSize: "1.2rem" }}>👤</span>
                    )}


                    <h3 style={{ fontSize: "0.9rem", color: "#111b21", margin: "0" }}>
                        {user?.displayName}
                    </h3>



                    <button 
                        onClick={() => signOut(auth)}
                        style={{ padding: "4px 8px", backgroundColor: "#EA4335", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "0.75rem", fontWeight: "bold" }}
                    >
                        Logout
                    </button>
                </div>

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
    );
}

export default Sidebar;
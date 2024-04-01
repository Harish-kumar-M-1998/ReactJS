import React from "react";

function Footer() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1' }}>
        {/* Your main content here */}
      </div>
      <footer className="bg-dark text-light text-center py-3">
        <div className="container">
          <p>&copy; 2024 LIBRARY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
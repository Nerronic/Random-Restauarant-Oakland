import React from "react";

function Footer() {
  const links = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
  ];
  return (
    <div className="footer">
      <h3> Navigation</h3>
      <ul>
        {links.map((link,index) =>(
        
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
  ))}
      </ul>
    </div>
  );
}

export default Footer;

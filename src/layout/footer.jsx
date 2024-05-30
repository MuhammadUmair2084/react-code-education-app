import React from 'react'
import Logo from'../assets/Book store logo.png'
const Footer = () => {
  return (
    <footer>
          <div className="inner-footer">
            <div className="Book-store">
              <img src={Logo} alt="imag" width="185px" height="50px" />
              <br /><br /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi assumenda eos similique, at magni conseqihil?</p></div>
            <div className="Companey"><b>Companey</b> <br /><br /> <p>About Us </p> <br /><p>How to Work?</p><br /><p>Popular Courses</p><br /><p>Services</p></div>
            <div className="Courses"><b>Courses </b><br /><br /> <p>Categories</p> <br /><p>Offline Courses</p><br /><p>Video Courses</p><br /></div>
            <div className="Suport"><b>Support</b><br /><br /> <p>FAQ </p> <br /><p>Help Center</p><br /><p>Career</p><br /><p>Privacy</p> </div>
            <div className="Contact-info"><b>Contct Info</b> <br /> <br /> <p> +0913-705-3875 </p> <br /><p>ElizabethJ@jourrapide.com</p><br /><p>4808 Skinner Hollow Road Days Creek, OR 97429</p><br /><p /></div>
          </div>
          <hr />
          <p style={{textAlign: 'center', margin: '3px', padding: '2px'}}>Book Store all Right Reserved,2022</p>
        </footer>
  )
}

export default Footer
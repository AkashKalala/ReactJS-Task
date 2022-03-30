import '../CSS/Lastinfo.css'
import email from '../IMG/email.svg'
import location from '../IMG/location.svg'
import phone from '../IMG/phone.svg'
import Facebook from '../IMG/Facebook.svg'
import Github from '../IMG/Github.svg'
import Linkedin from '../IMG/Linkedin.svg'
import Twitter from '../IMG/Twitter.svg'


function Lastinfo(){
    return(
    <div className="b-div-8">    
        <div className="info-last">
          <div className="info-1">
            <div className="info-1-1">
              <div className="info-1-1-t">
                <p>Contact Information</p>
              </div>
              <div className="info-1-1-c">
                  <div>
                      <img src={email} className="logo-img"/>
                      <p>contact@coursepro.com</p>
                  </div>
                  <div>
                      <img src={phone} className="logo-img"/>
                      <p>1800-562-895, 1800-869-877</p>
                  </div>
                  <div>
                      <img src={location} className="logo-img"/>
                      <p>102 Street, India</p>
                  </div>
              </div>
            </div>
            <div className="info-1-2">
              <div className="info-1-2-t">
                <p>Social Media Channel</p>
              </div>
              <div className="info-icons">
                  <img src={Facebook} className="social-img fb"/>
                  <img src={Twitter} className="social-img"/>
                  <img src={Github} className="social-img"/>
                  <img src={Linkedin} className="social-img"/>
              </div>
            </div>
          </div>
          <div className='info-2'>
            <div className='form1'>
              <div className='form-t'>
                <p>Fill up the form and our team will get back to you within 24 hours</p>
              </div>
              <form className='form-main'>
                <div className='form-div-1'>
                  <input type="text" placeholder='Name'></input>
                  <input type='email' placeholder='Email'></input>
                </div>
                <div className='form-div-2'>
                <input type='number' placeholder='Phone'></input>
                <input type='text' placeholder='Subject'></input>
                </div>
                <div className='form-div-3'>
                  <textarea placeholder='Message'></textarea>
                </div>
                <div className='form-div-4'>
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
    );
}

export default Lastinfo;
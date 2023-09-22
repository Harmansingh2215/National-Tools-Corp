import React from 'react'
import Layout from './../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi'
const Contact = () => {
  return (
    <Layout title={'Contact us'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <div className="container box-1">
            <div className="row">
              <h5 style={{ color: 'red' }}>Get in Touch</h5>
            </div>
            <div className="row">
              <h4 style={{ textAlign: 'start' }}>Write Us A Message</h4>
            </div>
            <div className="row input-container">
              <div className="col-md-6 col-sm-12">
                <div className="styled-input">
                  Name
                  <input type="text" required />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="styled-input" style={{ float: 'right' }}>
                  Your Subject
                  <input type="text" required />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="styled-input">
                  Your Email
                  <input type="text" required />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="styled-input" style={{ float: 'right' }}>
                  Your Phone
                  <input type="text" required />
                </div>
              </div>
              <div className="col-xs-12">
                <div className="styled-input wide">
                  Message
                  <textarea required defaultValue={''} />
                </div>
              </div>
              <div className="col-xs-12">
                <div className="btn-lrg submit-btn">Send Message</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3  box-2">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Raja Garden Colony, Village Gadaipur Jalandhar Punjab 144008
          </p>
          <p className="mt-3">
            <BiMailSend color="red" /> : nationaltoolsvices@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall color="red" /> : 9417125527
          </p>
          <p className="mt-3">
            <BiSupport color="red" /> : 9646325527 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

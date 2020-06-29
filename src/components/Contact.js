import React from 'react'

import fb from './Assets/SVG/fbContact.svg'
import insta from './Assets/SVG/instaContact.svg'
import loc from './Assets/SVG/locContact.svg'
import mail from './Assets/SVG/mailContact.svg'
import phone from './Assets/SVG/phoneContact.svg'
import wa from './Assets/SVG/waContact.svg'


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: '', email: '' };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (

            <div className="contactContainer">

            <div className="textContact">
                <div className="section1Contact">
                <h1>Información de contacto</h1>

                <div className="contactInfoContainer">
                    <div className="contactTag">
                        <img className="contactIcon" src={loc} alt=""/>
                        <p>Carlos Salazar 2420. Col. Obrera. Monterrey, N.L</p>
                    </div>

                    <div className="contactTag">
                        <img className="contactIcon" src={phone} alt=""/>
                        <p>Recepción: 81 1845-1884</p>
                    </div>

                    <div className="contactTag">
                        <img className="contactIcon" src={phone} alt=""/>
                        <p>Reservaciones: 81- 2676-0305</p>
                    </div>

                    <div className="contactTag">
                        <img className="contactIcon" src={mail} alt=""/>
                        <p>reservaciones@smarthotel.com.mx</p>
                    </div>

                    <div className="contactTag">
                        <img className="contactIcon" src={wa} alt=""/>
                        <p>Whats App 81 2437-8751</p>
                    </div>

                    <div className="contactTag">
                        <img className="contactIcon" src={fb} alt=""/>
                        <p>SMART HOTEL CINTERMEX</p>
                    </div>


                    <div className="contactTag">
                        <img className="contactIcon" src={insta} alt=""/>
                        <p>smart_hotel_monterrey</p>
                    </div>
                </div>
                </div>

                <div className="sendMail">
                    <h1>Contáctanos</h1>

                    <form className="test-mailing">
                        <div>
                        <label>Nombre:</label>
                        <input 
                            placeholder="Nombre"
                            onChange = {this.handleChange2}
                            value = {this.state.name}
                            type="text"
                            required
                        />

                        <label>Correo Electrónico:</label>
                        <input 
                            placeholder="Correo"
                            onChange = {this.handleChange3}
                            value = {this.state.email}
                            type="email"
                            required
                        />
                
                        <textarea
                            id="test-mailing"
                            name="test-mailing"
                            onChange={this.handleChange1}
                            placeholder="Escríbenos tu duda o sugerencia"
                            required
                            value={this.state.feedback}
                            style={{width: '100%', height: '150px'}}
                        />
                        </div>
                        <input type="submit" value="Enviar" className="btn-contact" onClick={this.handleSubmit} />
                    </form>

                </div>

            </div>

        </div>
        )
      }

      handleChange1(event) {
        this.setState({feedback: event.target.value})
      }

      handleChange2(event) {
        this.setState({name: event.target.value})
      }

      handleChange3(event) {
        this.setState({email: event.target.value})
      }
    
      handleSubmit (event) {
        const templateId = 'template_ypfnvOx0';

        if(this.state.feedback =='' && this.state.email == '' && this.state.name =='' ){

        }else{
            this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})

            this.setState({feedback: ''})
            this.setState({name: ''})
            this.setState({email: ''})
        }
    

      }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }
}
import MotionHoc from "../higher order components/MotionHoc"
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import "./contact.scss"
import 'react-toastify/dist/ReactToastify.min.css'

import github from "../../images/svg icons/github.svg"
import linkedIn from "../../images/svg icons/linkedin.svg"
import mail from "../../images/svg icons/gmail-logo.svg"
import resume from "../../images/svg icons/document.svg"

require('dotenv').config()

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm()
      
      const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };

      const onSubmit = async (data) => {
        const { name, email, subject, message } = data

        try {

            const templateParams = {
              name,
              email,
              subject,
              message
            }
            
            await emailjs.send(
              process.env.REACT_APP_SERVICE_ID,
              process.env.REACT_APP_TEMPLATE_ID,
              templateParams,
              process.env.REACT_APP_USER_ID
            )

            reset()
            toastifySuccess()
          } catch (e) {
            console.log(e)
          }
      }

    return (

    <section className="contact">
    <h1>Contact</h1>

    <h4>Feel free to send me a message &nbsp; ☻</h4>

    <div className='contactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>

                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>

                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <button className='submit-btn' type='submit'>
                  S U B M I T
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>

    <h4>Or connect with me here</h4>
    
    <div className='contact-icons'>
    <a href="https://www.linkedin.com/in/farzana-moury/" ><img src={linkedIn} alt="linkedIn icon"></img></a>
      <a href="mailto:farzm.business@gmail.com" ><img src={mail} alt="gmail icon"></img></a>
      <a href="https://github.com/farzana-moury" ><img src={github} alt="github icon"></img></a>
      <a href="https://farzanamoury.netlify.app/resume_farzana.pdf"><img src={resume} alt="resume icon"></img></a>
    </div>
    
    <br/><br/><br/>

    <footer>
    <p>Copyright &copy; 2022 Farzana Moury<br/>Made with React</p>
    </footer>
    </section>
    
    )
}

const ContactComponent = MotionHoc(Contact)

export default ContactComponent
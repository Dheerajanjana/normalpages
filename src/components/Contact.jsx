import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" required placeholder='abc' />
                </div>

                <div>
                    <label htmlFor="">E-mail</label>
                    <input type="text" required placeholder='abc@xyz.com' />
                </div>
                <div>
                    <label htmlFor="">Massage</label>
                    <input type="text" required placeholder='Tell us about your query...' />
                </div>
                <button className='btn' type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact;
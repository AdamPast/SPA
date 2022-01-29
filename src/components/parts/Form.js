import React from 'react'

const Form = () => {
    return (
        <div class="container py-4">
            <form id="contactForm">
            <div className="row">
                <div className="col-md-6">
                    <div class="mb-3">
                        <label class="form-label" for="name">Imię</label>
                        <input class="form-control" id="name" type="text" placeholder="Name" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="mb-3">
                        <label class="form-label" for="emailAddress">E-mail</label>
                        <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                    </div> 
                </div>
                
            </div>
           
           <div class="mb-3">
                <label class="form-label" for="message">Wiadomość</label>
                <textarea class="form-control" id="message" type="text" placeholder="Wiadomość" style={{height: 10 + 'em'}}></textarea>
                </div>
                <div class="d-grid">
                <button class="btn btn-primary btn-lg" type="submit">Wyślij</button>
                </div>

            </form>
        </div>
    )
}

export default Form

import React from 'react'

const Form = (props) => {
    console.log(props);
    return (
        <div className="container py-4">
            <form id="contactForm">
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Imię</label>
                        <input className="form-control" id="name" type="text" placeholder="Name" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="emailAddress">E-mail</label>
                        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                    </div> 
                </div>
                <div>
                    {props.isPricing ?  
                    <div className="mb-3">
                    <label htmlFor="select" className="form-label">Wybierz usługę</label>
                    <select id="select" className="form-select">
                      {props.Data.map((option, i) => {
                        return <option key={i}>{option.service}</option>
                      })}
                    </select>
                  </div>
                    : null}
                </div>
            </div>
           
           <div className="mb-3">
                <label className="form-label" htmlFor="message">Wiadomość</label>
                <textarea className="form-control" id="message" type="text" placeholder="Wiadomość" style={{height: 10 + 'em'}}></textarea>
                </div>
                <div className="d-grid">
                <button className="btn btn-primary btn-lg" type="submit">Wyślij</button>
                </div>

            </form>
        </div>
    )
}

export default Form

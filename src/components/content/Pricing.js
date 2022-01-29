import React from 'react'
import {Data} from '../../assets/Data'
import Form from '../parts/Form'

const Pricing = () => {
    return (
        <div className="row">
            <h1 className="mt-3 text-center">Cennik</h1>
            <div className="d-flex justify-content-center align-items-center">
            <table className="mt-5 table table-light table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Usługa</th>
                <th scope="col">Cena</th>
                <th scope="col">Czas wykonania</th>
                </tr>
            </thead>
            <tbody>
                {Data.map((data, i) => {
                   return(
                    <tr key={i}>
                    <th scope="row">{i+1}</th>
                    <td>{data.service}</td>
                    <td>{data.price + "zł"}</td>
                    <td>{data.time}</td>
                    </tr>
                   ) 
                })}
            </tbody>
            </table>
            
            </div>
            <Form isPricing={true} Data={Data}/>
        </div>
    )
}

export default Pricing

import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Header } from '../components/Header';

export const LoginPage = () => {
  return (
    <>
    <Header/>
    <div style={{width:'70%' , margin:"10% auto"}}>

        <h1>login page </h1>


        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter username"/>
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div><br/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </>
  )
}

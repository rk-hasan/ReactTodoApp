import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button } from 'react-bootstrap';
import { FaBeer,FaJsSquare } from 'react-icons/fa';

export default function Card(props) {
  const data = "Hello this is first data";
  props.onData(data)
 
  return (
    <div>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" palceholder="Enter Name"/>
        </div>
        <br/>
        <div>
          <label>Email:</label>
          <input type="email" name="email" palceholder="Enter Email"/>
        </div>
        <br/>
        <div>
          <label>Password:</label>
          <input type="password" name="password" palceholder="Enter password"/>
        </div>
        <br/>
        <div>
          <input type="submit" name="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}




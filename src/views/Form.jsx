import React, { useState } from "react";
import { sendForm } from "../features/actions";
import "./Form.css";

const countries = [
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "mexico",
    "Perú",
    "uruguay",
    "Venezuela",
]

const Form = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
    terms_and_conditions: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendForm(formData)
  
  };

  return (
    <form onSubmit={handleSubmit} className="form-container form-group">
      <div className="user-box">
        <input
          type="text"
          name="full_name"
          id="full_name"
          required
          value={formData.full_name}
          onChange={handleChange}
        />
        <label>Username</label>
      </div>
      <div className="user-box">
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <label>Email</label>
      </div>
      <div className="user-box-2">
      <label>
        Fecha de nacimiento
      </label>
      <input
          type="date"
          name="birth_date"
          id="birth_date"
          required
          value={formData.birth_date}
          onChange={handleChange}
        />
      </div>
      <div className="user-box-2">
      <label>
        Pais de origen
      </label>
      <select
          name="country_of_origin"
          id="country_of_origin"
          required
          value={formData.country_of_origin}
          onChange={handleChange}
        >
          <option value="">-- Seleccione --</option>
          {countries?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>


      <label className="terms_and_conditions" htmlFor="terms_and_conditions">
        <input
          type="checkbox"
          name="terms_and_conditions"
          id="terms_and_conditions"
          required
          checked={formData.terms_and_conditions}
          onChange={handleChange}
        />
        Acepta los términos y condiciones
      </label>

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          ></path>
        </svg>
        <span>Enviar</span>
      </button>
    </form>
  );
};

export default Form;

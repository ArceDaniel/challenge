import { useEffect, useState } from "react";
import { getAllForm } from "../features/actions";
import "./Form.css";

const Card = ({ date }) => (
  <div className="page">
    <div className="margin"></div>
    <p>
      name:{date.full_name}
      <br />
      emial:{date.email}
      <br />
      country:{date.country_of_origin}
      <br />
      birth date:{date.birth_date}
    </p>
  </div>
);

export default function Data() {
  const [forms, setForms] = useState(null);

  useEffect(() => {
    getAllForm(setForms);
  }, []);
  return (
    <div className="main">
      <div className="container-card">
        {forms?.map((form) => (
          <Card date={form.form} />
        ))}
      </div>
      ;
    </div>
  );
}

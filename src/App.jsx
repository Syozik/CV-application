import { useState } from "react";
import "./App.css";
import { CVFields } from "./data.js";

function Input({ field, fieldState, sectionName }) {
  const [fieldValues, setFieldValues] = fieldState;

  function handleChanges(e) {
    let newFieldValues = { ...fieldValues };
    newFieldValues[sectionName][field.title] = e.target.value;
    setFieldValues({ ...newFieldValues });
  }

  return (
    <div className="field">
      <label
        for={field.title}
        style={{
          fontSize: field.title.length < 30 ? "1rem" : "0.9rem",
          display: "block",
          maxWidth: "300px",
        }}
      >
        {field.title}
      </label>
      <input
        value={fieldValues[sectionName][field.title]}
        type={field.type}
        onChange={handleChanges}
        style={{ display: "inline-block", maxWidth: "300px" }}
        id={field.title}
      ></input>
    </div>
  );
}

function CVSection({ section, fieldState }) {
  return (
    <div className="section">
      <h3>{section.name}</h3>
      <hr />
      <div className="fields">
        {section.fields.map((field) => (
          <Input
            key={field.title}
            field={field}
            sectionName={section.name}
            fieldState={fieldState}
          />
        ))}
      </div>
    </div>
  );
}

function CV({ fieldState }) {
  return (
    <div className="CV">
      {CVFields.map((section) => (
        <CVSection
          fieldState={fieldState}
          key={section.name}
          section={section}
        />
      ))}
    </div>
  );
}

function getValues(obj) {
  let result = {};
  for (let section of obj) {
    result[section.name] = {};
    for (let field of section.fields) {
      result[section.name][field.title] = "";
    }
  }
  return result;
}

function Experience({ fieldValues }) {
  return (
    <div
      className="CVSection"
      style={{
        marginTop: "60px",
        textAlign: "left",
        alignItems: "flex-end",
      }}
    >
      <h4 style={{ margin: "0" }}>Experience</h4>
      <hr style={{ margin: "0" }} />
      {/* {fieldValues.filter((section)=>{section.name == "Experience"})} */}
      <div
        style={{
          marginTop: "15px",
          marginLeft: "20px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px" }}>
          {fieldValues["Experience"]["Start date"].slice(0, 7) + " "}—
          {" " +
            (fieldValues["Experience"]["Start date"] != "" &&
            fieldValues["Experience"]["End date"] == ""
              ? "Now"
              : fieldValues["Experience"]["End date"].slice(0, 7))}
        </div>
        <div style={{}}>
          {fieldValues["Experience"]["Position"] +
            " at " +
            fieldValues["Experience"]["Company Name"]}
        </div>
      </div>
      <div
        style={{
          overflowWrap: "break-word",
          marginLeft: "50px",
          marginTop: "5px",
          fontSize: "15px",
        }}
      >
        {fieldValues["Experience"]["Short description / main responsibilities"]}{" "}
      </div>
    </div>
  );
}
function App() {
  const [fieldValues, setFieldValues] = useState(getValues(CVFields));
  console.log(fieldValues);
  return (
    <>
      <header>CV Application</header>
      <div className="instructions">
        Please fill in all necessary fields and proceed to the next page to get
        a PDF file
      </div>
      <div className="content">
        <CV fieldState={[fieldValues, setFieldValues]} />
        <div className="sheet">
          <h3 className="Name" style={{ marginBottom: "0" }}>
            {fieldValues["General Information"]["First Name"] +
              " " +
              fieldValues["General Information"]["Last Name"]}
          </h3>
          <div
            className="Contact"
            style={{
              fontSize: "0.6rem",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <div>{fieldValues["General Information"]["Email"]}</div>{" "}
            <div>{fieldValues["General Information"]["Phone Number"]}</div>
          </div>
          <div
            className="CVSection"
            style={{
              marginTop: "60px",
              textAlign: "left",
              alignItems: "flex-end",
            }}
          >
            <h4 style={{ margin: "0" }}>Education</h4>
            <hr style={{ margin: "0" }} />
            <div
              style={{
                paddingTop: "5px",
                marginLeft: "20px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "14px", width: "150px" }}>
                {fieldValues["Education"]["Start date"].slice(0, 7) + " "}—
                {" " +
                  (fieldValues["Education"]["Start date"] != "" &&
                  fieldValues["Education"]["End date"] == ""
                    ? "Now"
                    : fieldValues["Education"]["End date"].slice(0, 7))}
              </div>
              <div>
                <div style={{ alignSelf: "flex-start" }}>
                  {fieldValues["Education"]["School Name"]},
                </div>
                <div style={{fontSize: "14px", marginLeft: "5px", color: "rgb(93, 95, 97)"}}>
                  {fieldValues["Education"]["Degree level"]} in{" "}
                  {fieldValues["Education"]["Major"]}
                </div>
              </div>
            </div>
          </div>

          <Experience fieldValues={fieldValues} />
        </div>
      </div>
    </>
  );
}

export default App;

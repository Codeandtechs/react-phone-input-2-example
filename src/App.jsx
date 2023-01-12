import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function App() {
  const [phone, setPhone] = React.useState("");

  return (
    <form
      onSubmit={() => {
        console.log(phone);
      }}
    >
      <div
        style={{
          margin: "10px",
        }}
      >
        <label htmlFor="phone">Phone</label>
        <PhoneInput
          country={"us"}
          id="phone"
          value={phone}
          onChange={(phone, country, _, formattedNumber) => {
            console.log(phone, country, formattedNumber);
            setPhone(phone);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

import React, { createContext, useContext, useState } from "react";

const AddressContext = createContext();

const AddressContextProvider = ({ children }) => {
  const [address, setAddress] = useState([
    {
      id: 1,
      address:
        "202/B wing, Shreeji Apartment, Near Shreeji Hospital, Kandivali East, Mumbai, Maharashtra 400101, India",
      label: "Home",
    },
    {
      id: 2,
      address:
        "28-29, 6th Main, Gandhi Nagar, Bangalore, Karnataka, 560009 ,India",
      label: "Work",
    },
    {
      id: 3,
      address:
        "819, No 6, 8th Floor, B-wing, Mittal Towers, M G Road, Bangalore, Karnataka, 56000, India",
      label: "Other",
    },
  ]);
  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddressContext = () => useContext(AddressContext);

export { AddressContextProvider, useAddressContext };

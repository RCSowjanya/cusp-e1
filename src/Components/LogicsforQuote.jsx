import React, { useState } from "react";

const LogicsforQuote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    customerType: "",
    name: "",
    address: {
      houseNumber: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
    typeofRoof: {
      concrete: "",
      tinshade: "",
      others: "",
    },
    typeofOrganization: {
      schools: "",
      factories: "",
      petrolpumps: "",
      hospitals: "",
      others: "",
    },
    load: "",
    phone: "",
    email: "",
    length: "",
    breadth: "",
    sft: "",
    connectionType: "",
    subsidy: "",
    sanctionLoad: "",
    consumption: "",
    loadname: "",
    operation: "",
    capacity: "",
    equipmentname: "",
    equipments: "",
    electricityConnectivity: "",
    roofLength: "",
    roofBreadth: "",
    file: null,
    floorNumber: "",
    rooflayout: null,
    video: null,
    image: null,
    electricitybill: null,
    location: "",
  });
  const handleBack = () => {
    if (formData.customerType === "Commercial" && step > 0 && step <= 9) {
      setStep((prevStep) => prevStep - 1);
    } else if (
      formData.customerType === "Residential" &&
      step > 10 &&
      step <= 42
    ) {
      setStep((prevStep) => prevStep - 1);
    } else if (step > 14 && step <= 33) {
      setStep((prevStep) => prevStep - 1);
    } else if (step > 34 && step <= 42) {
      setStep((prevStep) => prevStep - 1);
    } else {
      setStep(0);
    }
  };

  const validateStep = () => {
    switch (step) {
      case 1:
      case 10:
        return formData.name.trim() !== "";
      case 2:
      case 11:
        return (
          formData.address.houseNumber.trim() !== "" &&
          formData.address.street.trim() !== "" &&
          formData.address.city.trim() !== "" &&
          formData.address.state.trim() !== "" &&
          formData.address.pincode.trim() !== ""
        );
      case 3:
      case 12:
        return (
          formData.phone &&
          formData.phone.trim() !== "" &&
          formData.email &&
          formData.email.trim() !== ""
        );
      case 4:
        return Object.values(formData.typeofOrganization).some(
          (value) => value.trim() !== ""
        );
      case 5:
      case 15:
      case 24:
        return (
          formData.load.trim() !== "" && formData.consumption.trim() !== ""
        );
      case 6:
        return (
          (formData.typeofRoof.concrete ||
            formData.typeofRoof.tinshade ||
            formData.typeofRoof.others) &&
          formData.length.trim() !== "" &&
          formData.breadth.trim() !== "" &&
          formData.sft.trim() !== ""
        );
      case 7:
      case 18:
      case 21:
      case 27:
      case 30:
      case 36:
      case 40:
        return formData.video && formData.image && formData.electricitybill;
      case 8:
      case 19:
      case 22:
      case 28:
      case 31:
      case 37:
      case 41:
        return formData.capacity.trim() !== "";
      case 9:
      case 20:
      case 23:
      case 29:
      case 32:
      case 38:
      case 42:
        return formData.location.trim() !== "";
      case 16:
      case 25:
      case 35:
      case 39:
        return (
          formData.length &&
          formData.length !== "" &&
          formData.breadth &&
          formData.breadth !== "" &&
          formData.sft &&
          formData.sft !== "" &&
          formData.file
        );
      case 17:
      case 26:
        return formData.floorNumber !== "";
      case 33:
        return (
          formData.equipmentname.trim() !== "" &&
          formData.capacity.trim() !== "" &&
          formData.operation.trim() !== "" &&
          formData.equipments.trim() !== ""
        );

      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    }
  };
  const handleOrganizationTypeChange = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      typeofOrganization: type,
    }));
  };
  const handleRoofTypeChange = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      typeofRoof: {
        ...prevData.typeofRoof,
        [type]: prevData.typeofRoof[type] === type ? "" : type,
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const changeHandle = (e, fileType) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [fileType]: file,
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true); // Update state to show the "Thank You" page
  };

  const isLastStep = [9, 20, 23, 29, 32, 38, 42, 9].includes(step);

  return {
    step,
    formData,
    handleBack,
    handleNext,
    handleChange,
    changeHandle,
    handleSubmit,
    validateStep, // Make sure validateStep is included here
    isLastStep,
    setFormData,
    handleFileChange,
    handleOrganizationTypeChange,
    setStep,
    handleRoofTypeChange,
    isSubmitted,
  };
};

export default LogicsforQuote;

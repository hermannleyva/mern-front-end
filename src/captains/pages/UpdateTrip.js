import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import Input from "../../shared/components/FormElements/Input/Input";
import Button from "../../shared/components/FormElements/Button";
import "./css/UpdateTrip.css";

const DUMMY_TRIPS = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    userName: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl: "https://media.timeout.com/images/101705309/750/422/image.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    userName: "u2",
  },
];

const UpdateTrip = () => {
  const tripId = useParams().tripId;
  const [isLoading, setIsLoading] = useState(true)

  const identifiedTrip = DUMMY_TRIPS.find((trip) => trip.id === tripId);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    if (identifiedTrip) {
      setFormData(
        {
          title: {
            value: identifiedTrip.title,
            isValid: true,
          },
          description: {
            value: identifiedTrip.description,
            isValid: true,
          },
        },
        true
      );
      setIsLoading(false)
    }
 
  }, [setFormData, identifiedTrip]);

  if (!identifiedTrip) {
    return (
      <div className="center">
        <h2>Could not find trip!</h2>
      </div>
    );
  }

  const tripUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <React.Fragment>
      <h1 className="center">Update your trip</h1>
      <form className="place-form" onSubmit={tripUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description"
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Save
        </Button>
      </form>
    </React.Fragment>
  );
};

export default UpdateTrip;

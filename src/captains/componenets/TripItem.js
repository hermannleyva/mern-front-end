import React, { useState } from "react";

import "./css/TripItem.css";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card/Card";
import Modal from "../../shared/components/UIElements/Modal/Modal";

import Map from "../../shared/components/UIElements/Map/Map";

const TripItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    console.log("DELETED");
    setShowConfirmModal(false);
  };

  const MapHandler = () => {
    setShowMap(!showMap);
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={MapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={MapHandler}>Close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
      show={showConfirmModal}
      onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
            <Button danger onClick={confirmDeleteHandler}>Delete</Button>
          </React.Fragment>
        }
      >
        <p>Are you sure you want to delete?</p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>

          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={MapHandler}>
              Map
            </Button>
            <Button to={`/${props.creator}/trips/${props.id}`}>Edit</Button>
            <Button danger onClick={showDeleteWarningHandler}>Delete</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default TripItem;

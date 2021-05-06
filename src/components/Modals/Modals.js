import React from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "./Modal";

const Modals = () => {
    const [isOpen, openModal, closeModal] = useModal(false);
    return (
        <>
            <h2>Modals</h2>
            <button onClick={openModal}>Modal 1</button>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <h3>Title Modal</h3>
                <p>Hi, this is the modal content </p>
                <img
                    src="https://placeimg.com/400/400/animals"
                    alt="Animal Random"
                />
            </Modal>
        </>
    );
};

export default Modals;

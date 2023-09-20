// import useClickOutsideToClose from "../../hooks/useClickOutsideHandler";
import styles from "./BookAppointmentModal.module.scss";
import { useRef } from "react";
import { closebookAppointmentModal } from "../../redux/features/bookAppointmentModal/bookAppointmentModalSlice";
import { useDispatch } from "react-redux/es/exports";

const BookAppointmentModal = () => {
  const dispatch = useDispatch();
  const bookAppointmentModalRef = useRef<HTMLDivElement>(null);
  // const bookAppointmentModalIsOpen = useSelector(
  //   selectbookAppointmentModalIsOpen
  // );

  const closeBookAppointmentModalHandler = () => {
    dispatch(closebookAppointmentModal());
  };

  // useClickOutsideToClose(
  //   closeBookAppointmentModalHandler,
  //   bookAppointmentModalIsOpen,
  //   bookAppointmentModalRef
  // );

  const submitFormHandler = () => {
    dispatch(closebookAppointmentModal());
  };

  return (
    <>
      <div
        className={styles.BookAppointmentModal}
        ref={bookAppointmentModalRef}
      >
        <h2 className={styles.modal_header}>Book an Appointment</h2>

        <p className={styles.modal_body}>
          This reservation is not guaranteed on the selected day and time. We
          will contact you by phone as soon as possible to confirm your time.
        </p>

        <div className={styles.input_container}>
          <input type="text" className={styles.input_box} placeholder="Name" />
          <input
            type="text"
            className={styles.input_box}
            placeholder="Phone number"
          />
        </div>

        <div className={styles.input_container}>
          <input
            type="text"
            className={styles.input_box}
            placeholder="Email Address"
          />
          <input type="text" className={styles.input_box} placeholder="Date" />
        </div>

        <div className={styles.button_container}>
          <button
            className={styles.modal_book_button}
            onClick={() => submitFormHandler()}
          >
            Book an Appointment
          </button>

          <button
            className={styles.close_modal_button}
            onClick={() => closeBookAppointmentModalHandler()}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default BookAppointmentModal;

import ModalPortal from './ModalPortal';

const BaseModal = ({ children, isOpen, closeModal }) => {
  return (
    <>
      <ModalPortal>
        {isOpen && (
          <div
            className="fixed flex justify-center items-center left-0 top-0 w-screen h-screen bg-modal cursor-pointer"
            onClick={closeModal}
          >
            <div className="bg-white py-11 px-16 rounded-2xl">{children}</div>
          </div>
        )}
      </ModalPortal>
    </>
  );
};

export default BaseModal;

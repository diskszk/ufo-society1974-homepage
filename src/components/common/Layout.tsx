import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore, ModalStatus } from "../../types";
import { ModalWrapper } from "./Modal";

export const Layout: React.FC = () => {
  const modalStatus = useSelector<RootStore, ModalStatus>(
    (state) => state.modalStatus
  );

  return (
    <>
      <Header />
      {modalStatus.isOpen && <ModalWrapper />}
      <Outlet />
    </>
  );
};

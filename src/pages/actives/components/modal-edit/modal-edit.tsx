import { Modal } from "antd";
import { useState } from "react";

const ModalEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Modal
      title="Editar Ativo"
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
    ></Modal>
  );
};

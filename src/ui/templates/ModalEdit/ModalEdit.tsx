import { Col, Form, Modal, Row } from "antd";
import { ReactNode, memo, useEffect, useId, useState } from "react";

export interface ModalEditFieldProps {
  label: string;
  span: number;
  field: ReactNode;
}

export interface ModalEditBaseProps<T> {
  initialData?: T;
  onOk: (data: T) => void;
  onCancel: () => void;
}

export interface ModalEditProps<T> extends ModalEditBaseProps<T> {
  title: string;
  children: Array<ModalEditFieldProps>;
  open?: boolean;
}

export const ModalEdit = <T extends any>({
  title,
  children,
  open,
  onOk,
  onCancel,
}: ModalEditProps<T>) => {
  const updateData = () => {
    onOk();
  };

  return (
    <Modal title={title} open={open} onOk={updateData} onCancel={onCancel}>
      <Form layout="vertical">
        <Row>
          {children.map((item, index) => {
            const { label, span, field } = item;
            return (
              <Col span={span} key={index}>
                <Form.Item label={label}>{field}</Form.Item>
              </Col>
            );
          })}
        </Row>
      </Form>
    </Modal>
  );
};

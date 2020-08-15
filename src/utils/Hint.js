import { Modal, Button } from 'antd';


export function Hint(text) {
  const modal = Modal.success({
    // title: text,
    content: text,
    footer: [
      <Button key="cancel" size="large">取消</Button>,
    ],
  });
  setTimeout(() => modal.destroy(), 1500);
}

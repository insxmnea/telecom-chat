import { message, Upload, UploadProps } from "antd";

export const AttachmentProps: UploadProps = {
  listType: "text",
  beforeUpload: (file) => {
    const isPNG = file.type === "image/png";

    if (!isPNG) {
      message.error(`${file.name} is not a png file`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
  },
};

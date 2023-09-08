import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AppTextEditor = () => {
  const [value, setValue] = useState("");

  const toolbarOptions = [
    [
      "bold",
      "italic",
      "underline",
      "strike",
      { list: "ordered" },
      { list: "bullet" },
      "link",
      "code-block",
    ],

    // [{ indent: "-1" }, { indent: "+1" }],

    // [{ header: [1, 2, 3, 4, 5, 6, false] }],

    // [{ align: [] }],
  ];
  const modules = {
    toolbar: toolbarOptions,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      modules={modules}
      onChange={setValue}
      placeholder={"tell us about yourself"}
    />
  );
};

export default AppTextEditor;

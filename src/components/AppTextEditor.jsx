import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AppTextEditor = (props) => {
  const { label, value, onChange, placeholder } = props;

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
  console.log(value);
  return (
    <>
      <label className="text-xs text-[#77777A] font-medium pb-4 pl-1">
        {label}
      </label>
      <ReactQuill
        theme="snow"
        value={value}
        modules={modules}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default AppTextEditor;

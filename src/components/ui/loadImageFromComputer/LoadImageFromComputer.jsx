import s from "./LoadImageFromComputer.module.scss";
import { IoImagesOutline } from "react-icons/io5";
import React, { useRef, useState } from "react";

const LoadImageFromComputer = ({ onChange, title, describe, ...props }) => {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileSize = selectedFile.size / 1024 / 1024; // Sprawdzamy rozmiar w MB

      if (fileSize > 5) {
        setError("Plik jest za duży! Maksymalny rozmiar to 5 MB.");
        setFile(null);
        setFileName("");
        return;
      }

      setError("");
      setFile(selectedFile);
      setFileName(selectedFile.name);
      convertToBase64(selectedFile);
    }
  };
  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (onChange) {
        onChange({
          file: file,
          base64: reader.result,
        });
      }
    };
    reader.onerror = (error) => {
      console.error("File reading error:", error);
    };
  };

  function deleteImg() {
    onChange({ file: "", base64: "" });
  }

  return (
    <div className={s.block}>
      <div className={s.blockForIc}>
        <input
          onChange={handleFileChange}
          ref={inputRef}
          type={"file"}
          className={s.inputFile}
        />
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="Podgląd"
            className={s.inputFilePreviewImage}
          />
        ) : (
          <IoImagesOutline className={s.icStyle} />
        )}
      </div>
      <div className={s.blockForContent}>
        <h5 className={s.title}>{title}</h5>
        <span className={s.describe}>{describe}</span>
      </div>
    </div>
  );
};
export default LoadImageFromComputer;

import s from "./LoadImageFromComputer.module.scss";
import { IoImagesOutline } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";

const LoadImageFromComputer = ({
  name,
  onChange,
  value,
  title,
  describe,
  ...props
}) => {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setFile({ base64: value }); // Używaj bezpośrednio wartości `value`
  }, [value]);

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
      setFileName(selectedFile.name);
      convertToBase64(selectedFile);
    }
  };

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Po zakończeniu odczytu pliku
      const fileWithBase64 = {
        file: file,
        base64: reader.result,
      };
      // Ustawiamy stan i informujemy rodzica
      setFile(fileWithBase64);
      if (onChange) {
        onChange(reader.result);
      }
    };
    reader.onerror = (error) => {
      console.error("Błąd podczas odczytu pliku:", error);
    };
  };

  const deleteImg = () => {
    setFile(null);
    setFileName("");
    onChange("");
  };

  return (
    <div className={s.block}>
      <div className={s.blockForIc}>
        <input
          name={name}
          onChange={handleFileChange}
          ref={inputRef}
          type="file"
          className={s.inputFile}
        />
        {file && file.base64 ? (
          <div>
            <img
              src={file.base64}
              alt="Podgląd"
              className={s.inputFilePreviewImage}
            />
            <button onClick={deleteImg} className={s.deleteButton}>
              X
            </button>
          </div>
        ) : (
          <IoImagesOutline className={s.icStyle} />
        )}
      </div>
      <div className={s.blockForContent}>
        <h5 className={s.title}>{title}</h5>
        <span className={s.describe}>{describe}</span>
        {error && <span className={s.error}>{error}</span>}{" "}
        {/* Obsługa błędów */}
      </div>
    </div>
  );
};

export default LoadImageFromComputer;

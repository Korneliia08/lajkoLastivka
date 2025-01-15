import React, {useRef, useState} from "react";
import styles from "./InputFile.module.scss"; // Importujemy plik SCSS

const InputFile = ({label, name, onChange, initialImage, disabled}) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState("");
    const inputRef = useRef(null);


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

    // Funkcja konwertująca plik na Base64
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
        onChange({file: '', base64: ''})
    }

    return (
        <div className={styles.inputFileContainer}>
            <div className={styles.inner}>

                {/* Podgląd obrazu w lewym rogu, jeśli jest dostępny */}


                <label className={styles.inputFileLabel}>{label}</label>


                {/* Ukrywamy input, wywołując go przez przycisk */}
                <input disabled={disabled}
                       ref={inputRef}
                       type="file"
                       className={styles.inputFileInput}
                       name={name}
                       onChange={handleFileChange}
                       accept="image/*" // Akceptujemy tylko obrazy
                />
                <button disabled={disabled}
                        type="button"
                        className={styles.inputFileButton}
                        onClick={() => inputRef.current.click()}
                >
                    Виберіть файл
                </button>
              
                <div className={styles.inputFilePreviewContainer}>
                    <img
                        src={file ? URL.createObjectURL(file) : initialImage ? initialImage : 'https://placehold.co/400'}
                        alt="Podgląd"
                        className={styles.inputFilePreviewImage}
                    />
                </div>
                <button disabled={disabled} onClick={deleteImg} className={styles.deleteImg}>X</button>
            </div>
            {/*/!* Wyświetlanie podglądu nazwy pliku *!/*/}
            {/*{fileName && !error && (*/}
            {/*    <div className={styles.inputFilePreview}>Wybrany plik: {fileName}</div>*/}
            {/*)}*/}


            {error && <div className={styles.inputFileError}>{error}</div>}
        </div>
    );
};

export default InputFile;

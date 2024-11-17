import React, {useEffect, useRef, useState} from "react";
import styles from "./InputFile.module.scss"; // Importujemy plik SCSS

const InputFile = ({label, name, onChange, initialImage}) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState("");
    const inputRef = useRef(null);

    // Jeśli istnieje początkowy obraz, ustawiamy go w stanie
    useEffect(() => {
        if (initialImage) {
            setFileName(initialImage.name || "Wybrane zdjęcie");
            setFile(initialImage);
        }
    }, [initialImage]);

    // Funkcja do obsługi zmiany pliku
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

    return (
        <div className={styles.inputFileContainer}>
            <div className={styles.inner}>

                {/* Podgląd obrazu w lewym rogu, jeśli jest dostępny */}
                {file || initialImage ? (
                    <div className={styles.inputFilePreviewContainer}>
                        <img
                            src={file ? URL.createObjectURL(file) : initialImage}
                            alt="Podgląd"
                            className={styles.inputFilePreviewImage}
                        />
                    </div>
                ) : null}
                <label className={styles.inputFileLabel}>{label}</label>


                {/* Ukrywamy input, wywołując go przez przycisk */}
                <input
                    ref={inputRef}
                    type="file"
                    className={styles.inputFileInput}
                    name={name}
                    onChange={handleFileChange}
                    accept="image/*" // Akceptujemy tylko obrazy
                />
                <button
                    type="button"
                    className={styles.inputFileButton}
                    onClick={() => inputRef.current.click()}
                >
                    Wybierz plik
                </button>
            </div>
            {/* Wyświetlanie podglądu nazwy pliku */}
            {fileName && !error && (
                <div className={styles.inputFilePreview}>Wybrany plik: {fileName}</div>
            )}

            {/* Wyświetlanie błędu, jeśli plik jest za duży */}
            {error && <div className={styles.inputFileError}>{error}</div>}
        </div>
    );
};

export default InputFile;

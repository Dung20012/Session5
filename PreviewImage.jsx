import React, { useState, useEffect } from 'react';

const PreviewImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedFile(file);
        } else {
            alert("Vui lòng chọn đúng file hình ảnh!");
        }
    };

    useEffect(() => {
        if (!selectedFile) {
            setPreviewURL(null);
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewURL(reader.result);
        };
        reader.readAsDataURL(selectedFile);

        // Dọn dẹp bộ nhớ khi thay ảnh
        return () => {
            setPreviewURL(null);
        };
    }, [selectedFile]);

    return (
        <div style={containerStyle}>
            <h2>Preview:</h2>
            <input type="file" accept="image/*" onChange={handleChange} />
            {previewURL ? (
                <div style={{ marginTop: 20 }}>
                    <img
                        src={previewURL}
                        alt="Preview"
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
                    />
                </div>
            ) : (
                <p style={{ marginTop: 20 }}>Chưa có hình ảnh nào được chọn.</p>
            )}
        </div>
    );
};

// Style
const containerStyle = {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center'
};

export default PreviewImage;

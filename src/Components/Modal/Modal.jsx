import React, { useState, useEffect } from "react";
import "./Modal.css"; // Para los estilos que te recomendé anteriormente

const Modal = ({ isOpen, onClose, onSave, video }) => {
    const [formData, setFormData] = useState({
        titulo: "",
        categoria: "",
        img: "",
        url: "",
        descripcion: "",
    });

    // Si el modal está abierto, se debe llenar el formulario con los datos del video
    useEffect(() => {
        if (video) {
            setFormData({
                titulo: video.titulo,
                categoria: video.categoria,
                img: video.img,
                url: video.url,
                descripcion: video.descripcion,
            });
        }
    }, [video, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleClear = () => {
        setFormData({
            titulo: "",
            categoria: "",
            img: "",
            url: "",
            descripcion: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData); // Guardamos los cambios
    };

    if (!isOpen) return null; // Si el modal no está abierto, no renderizamos nada

    return (
        <div className="modal-backdrop">
            <div className="modal-container">
                <button className="modal-close" onClick={onClose}>
                    ✖
                </button>
                <h2>Editar Video</h2>
                <form onSubmit={handleSubmit}>
                    {/* Título */}
                    <div className="form-group">
                        <label htmlFor="titulo">Título:</label>
                        <input
                            type="text"
                            id="titulo"
                            name="titulo"
                            value={formData.titulo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Categoría */}
                    <div className="form-group">
                        <label htmlFor="categoria">Categoría:</label>
                        <select
                            id="categoria"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona una categoría</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Innovacion y gestion">Innovacion y gestion</option>
                        </select>
                    </div>

                    {/* Imagen */}
                    <div className="form-group">
                        <label htmlFor="img">URL de la Imagen:</label>
                        <input
                            type="text"
                            id="img"
                            name="img"
                            value={formData.img}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* URL del video */}
                    <div className="form-group">
                        <label htmlFor="url">URL del Video:</label>
                        <input
                            type="text"
                            id="url"
                            name="url"
                            value={formData.url}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Descripción */}
                    <div className="form-group">
                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-save">
                            Guardar
                        </button>
                        <button type="button" className="btn-clear" onClick={handleClear}>
                            Limpiar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;

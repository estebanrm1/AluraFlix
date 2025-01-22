import React, { useState } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Select,
  Option,
  Textarea,
  Button,
  FormTitle,
} from "./NewVideo.styled";

const NewVideo = () => {
  const { addVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    img: "",
    url: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formData);
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      url: "",
      descripcion: "",
    });
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      url: "",
      descripcion: "",
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Agregar Nuevo Vídeo</FormTitle>
      <Input
        type="text"
        name="titulo"
        placeholder="Título"
        value={formData.titulo}
        onChange={handleChange}
        required
      />
      <Select>
      <Option value="">Selecciona una categoría</Option>
                            <Option value="Frontend">Frontend</Option>
                            <Option value="Backend">Backend</Option>
                            <Option value="Innovacion y gestion">Innovacion y gestion</Option>
      </Select>
      <Input
        type="text"
        name="img"
        placeholder="URL de la Imagen"
        value={formData.img}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="url"
        placeholder="URL del Vídeo"
        value={formData.url}
        onChange={handleChange}
        required
      />
      <Textarea
        name="descripcion"
        placeholder="Descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        required
      />
      <Button type="submit">Guardar</Button>
      <Button type="button" onClick={handleReset}>
        Limpar
      </Button>
    </FormContainer>
  );
};

export default NewVideo;

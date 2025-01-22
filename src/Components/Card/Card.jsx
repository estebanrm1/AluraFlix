import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
} from "./Card.styled";

import { useVideoContext } from "../../Contexts/VideoContext";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Card = ({ video }) => {
  const { deleteVideo, updateVideo } = useVideoContext();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEdit = () => {
    setModalOpen(true); // Abrimos el modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Cerramos el modal
  };

  const handleSave = (updatedData) => {
    updateVideo(video.id, updatedData); // Llamamos a la función para actualizar el video
    setModalOpen(false); // Cerramos el modal
  };

  return (
    <>
    <CardContainer key={video.id} categoria={video.categoria}>
      <CardImage src={video.img} alt={video.title} />
      <CardActions>
        <IconButton onClick={() => deleteVideo(video.id)}>
          <FaTrashAlt />
        </IconButton>

        <IconButton onClick={handleEdit}>
          <FaEdit />
        </IconButton>
      </CardActions>
    </CardContainer>
    <Modal 
    isOpen={isModalOpen}
    onClose={handleCloseModal}
    onSave={handleSave}
    video={video}
    />
    </>
  );
};

export default Card;

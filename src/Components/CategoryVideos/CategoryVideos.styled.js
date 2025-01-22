import styled from "styled-components";



export const CategoryTitle = styled.h2`
  width: 25%;
  background-color: ${({ theme, categoria }) => {
  console.log("Categoría recibida:", categoria);
  return theme.colors.categoryColors[categoria];
}};
  color:rgb(252, 252, 252);
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.5rem; 
  text-align: center; 

  @media (max-width: 768px) {
    width: 50%; 
    font-size: 1.25rem;
    padding: 0.75rem;
  }

  @media (max-width: 576px) {
    width: 100%; 
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;



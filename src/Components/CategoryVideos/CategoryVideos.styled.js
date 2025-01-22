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
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;



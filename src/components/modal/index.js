import styled from "@emotion/styled";
import BgImage from "../../assets/modal_Bg.jpg";
import { Button, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { clearAll } from "../../features/itemsSlice";
import { modalActive } from "../../features/modalSlice";

const ModalWindow = () => {
  const modalStatus = useSelector((state) => {
    return state.modal.modalStatus;
  });

  const dispatch = useDispatch();
  const clearAllfunc = () => {
    dispatch(clearAll());
    dispatch(modalActive());
  };
  return (
    <Wrapper className={modalStatus ? "active" : ""}>
      <ContentConteiner className={modalStatus ? "activeCont" : ""}>
        <Tittlestyled>Are you are sure?</Tittlestyled>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={clearAllfunc}>
            yes
          </Button>
          <Button variant="contained" onClick={() => dispatch(modalActive())}>
            no
          </Button>
        </Stack>
      </ContentConteiner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transform: ${(props) =>
    props.className === "active" ? "scale(1)" : "scale(0)"};
`;
const ContentConteiner = styled.div`
  box-sizing: border-box;
  display: flex;
  padding-bottom: 30px;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  border: 1px solid lightBlue;
  transform: ${(props) =>
    props.className === "activeCont" ? "scale(1)" : "scale(0)"};
  transition: 0.5s;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.4)
    ),
    url(${BgImage});
  background-size: cover;
`;
const Tittlestyled = styled.h2({
  fontSize: "34px",
  lineHeight: "40px",
});
export default ModalWindow;

import React from "react";
import { TextField, Button, Stack } from "@mui/material";
import styled from "styled-components";
import ModalWindow from "../modal/";
import Item from "../item/";
import Logo from "../../assets/logo.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import { addItem, addInputValue } from "../../features/toDoListSlice";
import { modalActive } from "../../features/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const ToDoList = () => {
  const { items, errorStatus, inputValue } = useSelector((state) => {
    return state.toDoList;
  });
  useEffect(() => {
    window.localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  const dispatch = useDispatch();
  return (
    <WrapperStyled>
      <ConteinerStyled>
        <LogoImage src={Logo} />
        <LabelStyled>Cat's To Do List</LabelStyled>
        <InputStyled
          id="outlined-basic"
          label="Enter text please"
          variant="outlined"
          onChange={(event) => {
            dispatch(addInputValue(event.target.value));
          }}
          value={inputValue}
          error={errorStatus}
          helperText={errorStatus ? "Incorrect entry." : ""}></InputStyled>
      </ConteinerStyled>
      <BtnWrapper>
        <Stack direction="row" spacing={2}>
          <BtnStyled
            variant="outlined"
            onClick={() => {
              dispatch(addItem());
            }}>
            Add Item
          </BtnStyled>
          <BtnStyled
            variant="outlined"
            onClick={items.length !== 0 ? () => dispatch(modalActive()) : null}
            startIcon={<DeleteIcon />}>
            Clear all!
          </BtnStyled>
        </Stack>
      </BtnWrapper>

      <ListStyled>
        {items.map((element, index) => {
          return (
            <Item
              elementItem={element}
              indexItem={index}
              key={"item_" + index + element.text}
            />
          );
        })}
      </ListStyled>
      <ModalWindow />
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div({
  margin: "50px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const LogoImage = styled.img({
  width: "200px",
  borderRadius: "10px",
});
const ConteinerStyled = styled.div({
  width: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  margin: "10px 0",
});
const LabelStyled = styled.label({
  margin: "10px 0",
  fontSize: "30px",
  lineHeight: "36px",
});
const InputStyled = styled(TextField)({
  width: "100%",
});
const BtnWrapper = styled.div({
  display: "flex",
  justifyContent: "start",
  width: "80%",
});
const BtnStyled = styled(Button)({});
const ListStyled = styled.ul({
  padding: 0,
  listStyle: "none",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export default ToDoList;

import styled from "styled-components";
import { Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { clearItem, doItem } from "../../features/itemsSlice";

const Item = ({ elementItem }) => {
  const dispatch = useDispatch();

  return (
    <ItemStyled>
      <div>
        <DateSpanStyled className={elementItem.isDone ? "done" : ""}>
          {elementItem.date}
        </DateSpanStyled>
        <SpanStyled className={elementItem.isDone ? "done" : ""}>
          {elementItem.text}
        </SpanStyled>
      </div>
      <Stack direction="row" spacing={2}>
        <IconButton
          variant="outlined"
          onClick={() => dispatch(clearItem(elementItem.key))}
          color="primary">
          <DeleteIcon />
        </IconButton>

        <IconButton
          variant="outlined"
          onClick={() => dispatch(doItem(elementItem.key))}
          color="primary">
          <CheckBoxIcon data-key={elementItem.key} />
        </IconButton>
      </Stack>
    </ItemStyled>
  );
};
const ItemStyled = styled.li({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #ccc",
  padding: "3px 20px",
  borderRadius: "3px",
  margin: "10px",
  boxSizing: "border-box",
});
const DateSpanStyled = styled.span`
  font-size: 14px;
  margin-right: 50px;
  text-decoration: ${(props) =>
    props.className === "done" && "3px line-through red "};
`;
const SpanStyled = styled.span`
  font-size: 20px;
  text-decoration: ${(props) =>
    props.className === "done" && "3px line-through red "};
`;
export default Item;

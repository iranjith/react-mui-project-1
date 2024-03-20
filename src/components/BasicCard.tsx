import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { cardStyles } from "../styles/cardStyles";
import React from "react";
 
interface Props {
    header: React.ReactElement;
    content: React.ReactElement;
}

const BasicCard = ({header,content}:Props) => {
  return (
    <>
      <Card sx={cardStyles}>
            {header}
            <CardContent>
                {content}
            </CardContent>
        </Card>
    </>
  );
};

export default BasicCard;

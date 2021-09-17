import { useContext, useEffect } from "react";
import { CalcContext } from "../contexts/CalcContext";

const ItSOverNineThousand = () => {
  const { actionState, setLowerScreenState, setUpperScreenState } =
  useContext(CalcContext);
  
  useEffect(() => {
    if (actionState === "over9000") {
    setUpperScreenState("Appuyez sur 'C'");
    setLowerScreenState("It's over 9000 !!!");
    }
  });

  return <></>;
};

export default ItSOverNineThousand;

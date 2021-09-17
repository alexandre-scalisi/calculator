import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

const ItSOverNineThousand = () => {
  const { actionState, setResultScreenState, setOperationScreenState } =
    useContext(CalcContext);

  if (actionState === "over9000") {
    setOperationScreenState("Appuyez sur 'C'");
    setResultScreenState("It's over 9000 !!!");
  }
  return <></>;
};

export default ItSOverNineThousand;

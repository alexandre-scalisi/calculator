import { useContext, useEffect } from "react";
import { CalcContext } from "../contexts/CalcContext";

const ItSOverNineThousand = () => {
  const { actionState, setLowerScreenState, setUpperScreenState } =
    useContext(CalcContext);

  // J'utilise useEffect pour attendre que le component soit rendu avant de modifier le state
  useEffect(() => {
    if (actionState === "over9000") {
      setUpperScreenState("Appuyez sur 'C'");
      setLowerScreenState("It's over 9000 !");
    }
  });

  return <></>;
};

export default ItSOverNineThousand;

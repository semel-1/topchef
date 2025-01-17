import React from "react";
import Background from "../Component/Background/Background";
import ReserveTable from "../Component/ReserveTable/ReserveTable";
import Commitment from "../Component/Commitment/Commitment";

const Reservation = () => {
  return (
    <div>
      <Background text="RESERVATION" />
      <ReserveTable />
      <Commitment/>
    </div>
  );
};

export default Reservation;

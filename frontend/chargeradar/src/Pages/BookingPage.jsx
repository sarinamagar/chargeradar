import React from "react";
import BookingForm from '../Components/Forms/BookingForm'
// import BookingSuccess from '../Components/PopUp/BookingSuccess'
// import PopUp from "../Components/PopUp/PopUp";
// import NavigationInfo from "../Components/PopUp/NavigationInfo";

function BookingPage() {
  return (
    <div>
      <BookingForm/>
      {/* <BookingSuccess/> */}
      {/* <PopUp
        title={"Token Downloaded Successfully"}
        subtitle={
          "Please, show this token at the charging station for bookin confirmation"
        }
        optionA={"Continue"}
        optionB={"Continue"}
      /> */}
      {/* <NavigationInfo/> */}
    </div>
  );
}

export default BookingPage;

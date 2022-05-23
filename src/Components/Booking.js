import { async } from "@firebase/util";
import { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../App";
import API, { authAxios, endpoints } from "../configs/API";

const Booking = () => {
   const [totalPrice, setTotalPrice] = useState(0);
   const [ticketAdult, setTicketAdult] = useState(0);
   const [ticketChild, setTicketChild] = useState(0);
   const { tourId } = useParams();
   const nav = useNavigate();
   const [priceAdult, setPriceAdult] = useState(0);
   const [priceChild, setPriceChild] = useState(0);

   const [user, dispatch] = useContext(UserContext);

   useEffect(() => {
      const loadTour = async (event) => {
         const infoTour = await API.get(endpoints["tour-detail"](tourId));
         console.log(infoTour.data);
         setPriceAdult(infoTour.data.price_for_adults);
         setPriceChild(infoTour.data.price_for_children);
      };
      loadTour();
   }, []);

   const BookTour = async (event) => {
      event.preventDefault();
      console.log(ticketAdult);
      console.log(ticketChild);

      const idBooking = await authAxios().post(endpoints["book-tour"], {
         num_of_adults: ticketAdult,
         num_of_children: ticketChild,
         tour: tourId,
      });
      console.log(idBooking);
      const sendMailBooking = await authAxios().get(
         endpoints["send-mail-book-tour"](`${idBooking.data.id}`)
      );
      console.log(idBooking.data);
      console.log(sendMailBooking.data);
      if (idBooking.status == 201) {
         alert("Booking successful! Check your mail");
         nav(`/bill/${user.id}/`);
      }
   };

   useEffect(() => {
      setTotalPrice(
         parseInt(ticketAdult) * priceAdult + parseInt(ticketChild) * priceChild
      );
   }, [ticketAdult, ticketChild]);

   return (
      <>
         <div className="booking-tour-container">
            <h2 className="title-booking-tour">Booking tour</h2>
            <Form onSubmit={BookTour}>
               <FormGroup>
                  <Form.Label>
                     <span className="title-price-bookin-tour">
                        AdultPrice:
                     </span>{" "}
                     {priceAdult.toLocaleString("en-US", {
                        style: "currency",
                        currency: "VND",
                     })}
                     /ticket
                  </Form.Label>
                  <Form.Control
                     type="number"
                     value={ticketAdult}
                     onChange={(evt) => {
                        setTicketAdult(evt.target.value);
                     }}
                     className="input-booking"
                     min="0"
                  ></Form.Control>
               </FormGroup>
               <FormGroup>
                  <Form.Label>
                     <span className="title-price-bookin-tour">
                        ChildPrice:{" "}
                     </span>
                     {priceChild.toLocaleString("en-US", {
                        style: "currency",
                        currency: "VND",
                     })}
                     /ticket
                  </Form.Label>
                  <Form.Control
                     type="number"
                     value={ticketChild}
                     onChange={(evt) => {
                        setTicketChild(evt.target.value);
                     }}
                     className="input-booking"
                     min="0"
                  ></Form.Control>
               </FormGroup>
               <FormGroup>
                  <Form.Label className="label-totalprice-booking">
                     Total Price:{" "}
                     <span className="total-price-booking">
                        {totalPrice.toLocaleString("en-US", {
                           style: "currency",
                           currency: "VND",
                        })}
                     </span>
                  </Form.Label>
               </FormGroup>
               <Button type="sumbit" className="button-booking-tour">
                  Book
               </Button>
            </Form>
         </div>
      </>
   );
};
export default Booking;

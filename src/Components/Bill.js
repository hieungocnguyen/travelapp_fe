import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { authAxios, endpoints } from "../configs/API";

const Bill = () => {
   const [bills, setBills] = useState([]);
   const [tours, setTours] = useState([]);
   const [detailbill, setdetailbill] = useState([]);
   const [billPaid, setBillPaid] = useState([]);

   useEffect(() => {
      const loadBill = async () => {
         const bill = await authAxios().get(endpoints["user-bill-unpaid"]);
         setBills(bill.data.results);
         console.log(bill.data.results);
         bill.data.results.map(async (i) => {
            const resTour = await authAxios().get(
               endpoints["tour-info-bill"](i.book_tour)
            );
            console.log(resTour.data);
            setTours([...tours, resTour.data]);
         });
      };
      loadBill();
   }, []);

   useEffect(() => {
      const loadHistory = async () => {
         const billpaid = await authAxios().get(
            endpoints["user-get-bill-paid"]
         );
         console.log(billpaid.data);
         setBillPaid(billpaid.data.results);
      };
      loadHistory();
   }, []);

   if (bills === null || billPaid === null)
      return (
         <Container>
            <Spinner animation="grow" />
         </Container>
      );

   return (
      <>
         <div className="bill-container">
            <h2 className="title-bill">Bill</h2>
            {bills.map((item) => (
               <form className="bill-unpaid">
                  <div className="infoBill-unpaid">
                     <div>Id Bill:{item.book_tour}</div>
                     <div>Total price: {item.total_price} VND</div>
                  </div>
                  <div className="button-payment">
                     <button type="submit" className="button-byCash-bill">
                        Pay
                     </button>
                  </div>
               </form>
            ))}
            <h2 className="title-bill">History</h2>
            {billPaid.map((item) => (
               <form className="bill-unpaid paid">
                  <div className="infoBill-unpaid">
                     <div>IdBook:{item.book_tour}</div>
                     <div>Total price: {item.total_price}</div>
                  </div>
               </form>
            ))}
         </div>
      </>
   );
};
export default Bill;

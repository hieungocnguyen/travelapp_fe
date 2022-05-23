// const Momo = () => {
//    const pay_bill_with_momo = () => {
//       var re_url = "http://localhost:3000";
//       var amount = "2000";
//       var bill_id = "1";
//       const endpoint = "https://test-payment.momo.vn/v2/gateway/api/create";
//       const partnerCode = "MOMO";
//       const accessKey = "F8BBA842ECF85";
//       const secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
//       const orderInfo = "Pay with MoMo";
//       const redirectUrl = re_url;
//       const ipnUrl = "http://momo.vn";
//       const orderId = bill_id;
//       const requestId = "511515415";
//       const requestType = "captureWallet";
//       // extraData = ""  # pass empty value or Encode base64 JsonString

//       // before sign HMAC SHA256 with format: accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
//       const rawSignature =
//          "accessKey=" +
//          accessKey +
//          "&amount=" +
//          amount +
//          "&extraData=" +
//          extraData +
//          "&ipnUrl=" +
//          ipnUrl +
//          "&orderId=" +
//          orderId +
//          "&orderInfo=" +
//          orderInfo +
//          "&partnerCode=" +
//          partnerCode +
//          "&redirectUrl=" +
//          redirectUrl +
//          "&requestId=" +
//          requestId +
//          "&requestType=" +
//          requestType;

//       // signature
//       const h = hmac.new(
//          bytes(secretKey, "UTF-8"),
//          rawSignature.encode(),
//          hashlib.sha256
//       );
//       const signature = h.hexdigest();
//       const data = {
//          partnerCode: partnerCode,
//          partnerName: "Test",
//          storeId: "MomoTestStore",
//          requestId: requestId,
//          amount: amount,
//          orderId: orderId,
//          orderInfo: orderInfo,
//          redirectUrl: redirectUrl,
//          ipnUrl: ipnUrl,
//          lang: "vi",
//          extraData: extraData,
//          requestType: requestType,
//          signature: signature,
//       };
//       data = string.JSON(data);
//       data = bytes(data, (encoding = "utf-8"));
//       clen = length(data);
//       req = urllib.request.Request(
//          endpoint,
//          (data = data),
//          (headers = {
//             "Content-Type": "application/json",
//             "Content-Length": clen,
//             "User-Agent": "Mozilla/5.0",
//          }),
//          (method = "POST")
//       );
//       try {
//          f = urllib.request.urlopen(req);
//          response = f.read();
//          f.close();
//          return json.loads(response)["payUrl"];
//       } catch (e) {
//          console.log(e);
//       }
//    };
//    return (
//       <>
//          <div>
//             <button>Momo</button>
//          </div>
//       </>
//    );
// };

// export default Momo;

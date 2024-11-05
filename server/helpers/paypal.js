import paypal from "paypal-rest-sdk";

paypal.configure({
  mode: "sandbox", // Or "live" for production
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_SECRET_KEY,
});

export default paypal; // Ensure this is exported correctly

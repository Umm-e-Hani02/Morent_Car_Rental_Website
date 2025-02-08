export default {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "customername",
      type: "string",
      title: "Customer Name",
    },
    {
      name: "phonenumber",
      type: "string",
      title: "Phone Number",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
    },
    {
      name: "city",
      type: "string",
      title: "City",
    },
    {
      name: "orderdate",
      type: "date",
      title: "Order Date",
    },
    {
      name: "returndate",
      type: "date",
      title: "Return Date",
    },
    {
      name: "cardnumber",
      type: "string",
      title: "Card Number",
    },
    {
      name: "expirationdate",
      title: "Car Expiry",
      type: "date",
    },
    {
      name: "cvc",
      title: "CVC",
      type: "string",
    },
    {
      name: "bookedcars",
      title: "Booked Cars",
      type: "array",
      of: [{ type: "reference", to: { type: "car" } }],
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          { title: "Pending", value: "Pending" },
          { title: "Delivered", value: "Delivered" },
          { title: "Returned", value: "Returned" },
        ],
        layout: "radio",
      },
      initialValue: "Pending",
    },
  ],
};

import { defineType, defineField } from "sanity";
export const dashboard = defineType({
  name: "dashboard",
  type: "document",
  title: "Dashboard",
  fields: [
    defineField({
      title: "Car Image",
      name: "car",
      type: "image",
      options: {
        accept: "image/png",
      },
      validation: Rule => Rule.required().error('Car image is required')
    }),
    defineField({
      title: "Car name",
      name: "carname",
      type: "string",
      validation: Rule => Rule.required().error('Car name is required')
    }),
    defineField({
      title: "Category",
      name: "category",
      type: "string",
    }),
    defineField({
      title: "Date",
      name: "date",
      type: "string",
    }),
    defineField({
      title: "Price",
      name: "price",
      type: "string",
    }),
  ],
});

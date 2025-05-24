import toast from "react-hot-toast";

export default function parsWithAlert(schema: any, data: any) {
  const { error } = schema.safeParse(data);

  if (error) {
    toast.error(error.errors[0].message);
    return true;
  }
}

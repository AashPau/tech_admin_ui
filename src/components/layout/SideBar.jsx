import Stack from "react-bootstrap/Stack";

export const SideBar = () => {
  return (
    <Stack gap={3}>
      <div className="p-2">Dashboard</div>
      <div className="p-2">Categories</div>
      <div className="p-2">Products</div>
      <div className="p-2">Users</div>
      <div className="p-2">Orders</div>
      <div className="p-2">Reviews</div>
      <hr />
      <div className="p-2">Admins</div>
    </Stack>
  );
};

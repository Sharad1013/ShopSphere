import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { DeleteIcon, Trash2 } from "lucide-react";

const AddressCard = ({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) => {
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer border-black ${
        selectedId?._id === addressInfo?._id
          ? "border-[4px]"
          : "border-black"
      }`}
    >
      <CardContent
        className={` ${
          selectedId === addressInfo?._id ? " border-black" : ""
        }  grid p-4 gap-4`}
      >
        <Label>Address : {addressInfo?.address}</Label>
        <Label>City: {addressInfo?.city}</Label>
        <Label>Pincode: {addressInfo?.pincode}</Label>
        <Label>Phone: {addressInfo?.phone}</Label>
        <Label>Notes: {addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="p-3 flex justify-between">
        <Button
          variant="outline"
          onClick={() => handleEditAddress(addressInfo)}
        >
          Edit
        </Button>
        <Button onClick={() => handleDeleteAddress(addressInfo)}>
          Delete <Trash2 />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AddressCard;

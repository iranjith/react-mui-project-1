import { Box, Input, TextField } from "@mui/material";
import { modalStyles } from "../styles/modalStyles";
import BasicModal from "./BasicModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { SetStateAction, useEffect, useState } from "react";
import { AddBusiness } from "@mui/icons-material";

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  addNewUser: (data: {
    userId: string;
    email: string;
    phoneNumber: string;
  }) => void;
}

const defaultInputValues = {
  userId: "",
  email: "",
  phoneNumber: "",
};

const NewUserModal = ({ modalOpen, onClose, addNewUser }: Props) => {
  const [values, setValues] = useState(defaultInputValues);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .required("User ID is required")
      .min(6, "User ID must be at least 6 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid."),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const addUser = (data: {
    userId: string;
    email: string;
    phoneNumber: string;
  }) => {
    addNewUser(data);
  };

  const handleChange = (
    value: SetStateAction<{
      userId: string;
      email: string;
      phoneNumber: string;
    }>
  ) => {
    setValues(value);
  };

  useEffect(() => {
    if (modalOpen) setValues(defaultInputValues);
  }, [open]);

  const getContent = () => {
    return (
      <Box sx={modalStyles.inputFields}>
        <TextField
          placeholder="User ID"
          label="User ID"
          required
          {...register("userId")}
          error={errors.userId ? true : false}
          helperText={errors.userId?.message}
          value={values.userId}
          onChange={(event) =>
            handleChange({ ...values, userId: event.target.value })
          }
        />
        <TextField
          placeholder="Email"
          label="Email"
          required
          {...register("email")}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          value={values.email}
          onChange={(event) =>
            handleChange({ ...values, email: event.target.value })
          }
        />
        <TextField
          placeholder="Phone number"
          label="Phone number"
          required
          {...register("phoneNumber")}
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber?.message}
          value={values.phoneNumber}
          onChange={(event) =>
            handleChange({ ...values, phoneNumber: event.target.value })
          }
        />
      </Box>
    );
  };

return (
    <>
        <BasicModal
            modalOpen={modalOpen}
            onClose={onClose}
            title="New User"
            subTitle="Add a new user to the system."
            content={getContent()}
            validate={handleSubmit((data: { userId: string; email: string; phoneNumber?: string }) => addUser({ ...data, phoneNumber: data.phoneNumber || "" }))}
        ></BasicModal>
    </>
);
};

export default NewUserModal;

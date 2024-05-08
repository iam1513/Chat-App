import React, { useState } from "react";
import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import { SampleUsers } from "../../constants/SampleData";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const [members, setMembers] = useState(SampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberhandler = (id) => {
    setSelectedMembers(
      (prev) =>
        prev.includes(id)
          ? prev.filter((currId) => currId !== id) // Remove member if already selected
          : [...prev, id] // Add member if not selected
    );
  };

  const addMemberSubmitHandler = () => {
    closeHandler();
  };
  const closeHandler = () => {
    setSelectedMembers([]);
    setMembers([]);
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((user) => (
              <UserItem
                key={user._id}
                user={user}
                handler={selectMemberhandler}
                isAdded={selectedMembers.includes(user._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" variant="outlined" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            onClick={addMemberSubmitHandler}
            variant="contained"
            disabled={isLoadingAddMember}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;

import { Box } from "@material-ui/core";
import DatePicker from "../date-picker/DatePicker";
import DiaryNavBar from "../diary-navbar/DiaryNavBar";
const Diary = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <DatePicker />
      <DiaryNavBar />
    </Box>
  );
};

export default Diary;

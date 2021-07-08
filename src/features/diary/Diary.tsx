import { Box } from "@material-ui/core";
import DatePicker from "../date-picker/DatePicker";
import DiaryNavBar from "../diary-navbar/DiaryNavBar";
import SearchEngine from "../search-engine/SearchEngine";

const Diary = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <DatePicker />
      <DiaryNavBar />
      <SearchEngine title="BREAKFAST"/>
    </Box>
  );
};

export default Diary;

import { Box } from "@material-ui/core";
import DatePicker from "../date-picker/DatePicker";
import DiaryNavBar from "../diary-navbar/DiaryNavBar";
import SearchEngine from "../search-engine/SearchEngine";

const Diary = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <DatePicker />
      <DiaryNavBar />
      <Box display='flex' flexWrap='wrap' >
      <SearchEngine title="BREAKFAST"/>
      {/* <SearchEngine title="DINNER"/>
      <SearchEngine title="LUNCH"/>
      <SearchEngine title="SUPPER"/>
      <SearchEngine title="SNACKS"/> */}
      </Box>
    </Box>
  );
};

export default Diary;

import { FunctionComponent } from "react";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { TodoProps } from "../../types/todoTypes";
import dayjs from "dayjs";
import moment from "moment";
dayjs.extend(customParseFormat);

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
const dateFormat = "YYYY/MM/DD";

const TodoDate: FunctionComponent<TodoProps> = ({ dateTask }: TodoProps) => {
  return (
    <div className="flex flex-row py-0 pr-0 pl-3 items-center justify-start gap-[18px]">
      <Space direction="vertical">
        <DatePicker
          onChange={onChange}
          defaultValue={moment(`${dateTask}`, dateFormat)}
          format={dateFormat}
        />
      </Space>
    </div>
  );
};

export default TodoDate;

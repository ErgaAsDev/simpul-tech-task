import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import NewTaskButton from "./NewTaskButton";
import TodoHeader from "./TodoHeader";
import TodoItems from "./TodoItems";

type TodosType = {
  onClose?: () => void;
};

const Todos: FunctionComponent<TodosType> = ({ onClose }) => {
  return (
    <div className="relative bg-white w-[734px] h-[737px] flex flex-col py-[18px] px-[22px] box-border items-center justify-start overflow-x-hidden max-w-full max-h-full overflow-auto text-left text-sm text-darkslategray font-inter">
      <div className="flex flex-col items-start justify-start gap-[22px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <Dropdown
            overlay={
              <Menu>
                {(
                  [
                    { value: "Personal Errands" },
                    { value: "Urgent-to-do" },
                  ] as any
                ).map((option: any, index: number) => (
                  <Menu.Item key={index}>
                    <a onClick={(e) => e.preventDefault()}>
                      {option.value || ""}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            }
            trigger={["click"]}
          >
            <Button onClick={(e) => e.preventDefault()}>
              {`My Tasks `}
              <DownOutlined />
            </Button>
          </Dropdown>
          <NewTaskButton />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <TodoHeader />
            <TodoItems />
          </div>
          <img
            className="relative w-[671px] h-px"
            alt=""
            src="/vector-8-stroke.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[39px]">
              <input
                className="relative box-border w-[18px] h-[18px] border-[2px] border-solid border-gray-3"
                type="checkbox"
              />
              <div className="relative font-semibold">
                Close off Case #012920 - RODRIGUES, Amiguel
              </div>
              <div className="flex-1 flex flex-row items-center justify-end gap-[15px]">
                <img
                  className="relative w-[67.35px] h-[12.58px]"
                  alt=""
                  src="/2-days-left.svg"
                />
                <img
                  className="relative w-[73.26px] h-[10.94px]"
                  alt=""
                  src="/12062021.svg"
                />
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/expand-more-24px.svg"
                />
                <img
                  className="relative w-3.5 h-[3.5px]"
                  alt=""
                  src="/iconnavigationmore-vert-24px.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col py-0 pr-0 pl-10 items-start justify-start gap-[12px] text-gray">
              <div className="flex flex-row py-0 pr-0 pl-3 items-center justify-start gap-[18px]">
                <img
                  className="relative w-[16.67px] h-[16.67px]"
                  alt=""
                  src="/iconactionschedule-24px.svg"
                />
                <img
                  className="relative w-[193px] h-10"
                  alt=""
                  src="/group-1711.svg"
                />
              </div>
              <div className="flex flex-row py-0 pr-0 pl-3 items-start justify-start gap-[24px]">
                <img
                  className="relative w-[15px] h-[15px]"
                  alt=""
                  src="/iconimageedit-24px.svg"
                />
                <div className="relative">Some Description</div>
              </div>
              <div className="self-stretch rounded-lg bg-whitesmoke flex flex-col items-start justify-center text-base text-gray-3 font-lato">
                <div className="flex flex-row py-2 pr-0 pl-3 items-start justify-start gap-[19px]">
                  <img
                    className="relative w-[14.17px] h-[18.33px]"
                    alt=""
                    src="/iconactionbookmarks-24px.svg"
                  />
                  <i className="relative inline-block w-24 shrink-0">
                    Add Stickers
                  </i>
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative w-[671px] h-px"
            alt=""
            src="/vector-8-stroke.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[39px]">
              <input
                className="relative box-border w-[18px] h-[18px] border-[2px] border-solid border-gray-3"
                type="checkbox"
              />
              <div className="relative font-semibold">
                Set Up Appointment with Dr. Abe
              </div>
              <div className="flex-1 flex flex-row items-center justify-end gap-[15px]">
                <img
                  className="relative w-[67.35px] h-[12.58px]"
                  alt=""
                  src="/2-days-left1.svg"
                />
                <img
                  className="relative w-[73.26px] h-[10.94px]"
                  alt=""
                  src="/120620211.svg"
                />
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/expand-more-24px.svg"
                />
                <img
                  className="relative w-3.5 h-[3.5px]"
                  alt=""
                  src="/iconnavigationmore-vert-24px.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col py-0 pr-0 pl-10 items-start justify-start gap-[12px] text-gray">
              <div className="flex flex-row py-0 pr-0 pl-3 items-center justify-start gap-[18px]">
                <img
                  className="relative w-[16.67px] h-[16.67px]"
                  alt=""
                  src="/iconactionschedule-24px1.svg"
                />
                <img
                  className="relative w-[193px] h-10"
                  alt=""
                  src="/group-17111.svg"
                />
              </div>
              <div className="flex flex-row py-0 pr-0 pl-3 items-start justify-start gap-[24px]">
                <img
                  className="relative w-[15px] h-[15px]"
                  alt=""
                  src="/iconimageedit-24px.svg"
                />
                <div className="relative">No Description</div>
              </div>
              <div className="self-stretch rounded-lg bg-whitesmoke flex flex-col items-start justify-center text-base text-gray-3 font-lato">
                <div className="flex flex-row py-2 pr-0 pl-3 items-start justify-start gap-[19px]">
                  <img
                    className="relative w-[14.17px] h-[18.33px]"
                    alt=""
                    src="/iconactionbookmarks-24px.svg"
                  />
                  <i className="relative inline-block w-24 shrink-0">
                    Add Stickers
                  </i>
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative w-[671px] h-px"
            alt=""
            src="/vector-8-stroke.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-[229px]">
          <img className="relative w-72 h-6" alt="" src="/group-1942.svg" />
          <div className="flex flex-row items-center justify-start gap-[17px]">
            <img
              className="relative w-[65.8px] h-[10.94px]"
              alt=""
              src="/3062021.svg"
            />
            <img
              className="relative w-5 h-5"
              alt=""
              src="/expand-more-24px1.svg"
            />
            <img
              className="relative w-3.5 h-[3.5px]"
              alt=""
              src="/iconnavigationmore-vert-24px1.svg"
            />
          </div>
        </div>
        <img
          className="relative w-[671px] h-px"
          alt=""
          src="/vector-8-stroke.svg"
        />
        <div className="flex flex-row items-center justify-start gap-[274px]">
          <img
            className="relative w-[243px] h-6"
            alt=""
            src="/group-19421.svg"
          />
          <div className="flex flex-row items-center justify-start gap-[17px]">
            <img
              className="relative w-[65.83px] h-[10.94px]"
              alt=""
              src="/2062021.svg"
            />
            <img
              className="relative w-5 h-5"
              alt=""
              src="/expand-more-24px2.svg"
            />
            <img
              className="relative w-3.5 h-[3.5px]"
              alt=""
              src="/iconnavigationmore-vert-24px2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;

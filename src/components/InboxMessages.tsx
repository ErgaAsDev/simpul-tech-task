import { FunctionComponent } from "react";
import Messages from "./Messages";

type InboxMessagesType = {
  onClose?: () => void;
};

const InboxMessages: FunctionComponent<InboxMessagesType> = ({ onClose }) => {
  return (
    <div className="relative bg-white w-[734px] h-[737px] flex flex-col items-center justify-start gap-[10px] max-w-full max-h-full overflow-auto text-left text-sm text-goldenrod font-inter">
      <div className="hidden flex-col items-start justify-start gap-[23px]">
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <img className="relative w-6 h-6" alt="" src="/group-16071.svg" />
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-col py-0 px-5 items-start justify-start gap-[9px]">
                <img
                  className="relative w-[429.03px] h-[15.26px]"
                  alt=""
                  src="/i589--amarkhil-obaidullah-affirmative-filing-with-zhn1.svg"
                />
                <img
                  className="relative w-[71.35px] h-[10.81px]"
                  alt=""
                  src="/3-participants1.svg"
                />
              </div>
            </div>
            <img
              className="relative w-3.5 h-3.5"
              alt=""
              src="/iconnavigationclose-24px1.svg"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
            alt=""
            src="/vector-6-stroke1.svg"
          />
        </div>
        <div className="self-stretch h-[550.97px] flex flex-col items-start justify-start gap-[23px]">
          <div className="self-stretch flex flex-col items-end justify-start gap-[4px] text-darkorchid">
            <div className="relative font-medium">You</div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-dimgray">
              <img
                className="relative w-[10.67px] h-[2.67px]"
                alt=""
                src="/iconnavigationmore-horiz-24px4.svg"
              />
              <div className="rounded-8xs bg-lavender-200 flex flex-col p-2.5 items-start justify-start gap-[10px]">
                <div className="relative">{`Some messagesSomeasdsad `}</div>
                <img
                  className="relative w-[29.05px] h-[8.79px]"
                  alt=""
                  src="/1932.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[27px]">
            <img
              className="relative w-[217px] h-px"
              alt=""
              src="/vector-14-stroke2.svg"
            />
            <img
              className="relative w-[144.09px] h-[14.57px]"
              alt=""
              src="/today-june-09-20211.svg"
            />
            <img
              className="relative w-60 h-px"
              alt=""
              src="/vector-15-stroke2.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="relative font-medium">Panjul</div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-dimgray">
              <div className="rounded-8xs bg-papayawhip flex flex-col p-2.5 items-start justify-start gap-[10px]">
                <div className="relative">{`Some messagesSomeasdsad `}</div>
                <img
                  className="relative w-[29.05px] h-[8.79px]"
                  alt=""
                  src="/19321.svg"
                />
              </div>
              <img
                className="relative w-[10.67px] h-[2.67px]"
                alt=""
                src="/iconnavigationmore-horiz-24px5.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[4px] text-darkorchid">
            <div className="relative font-medium">You</div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-dimgray">
              <img
                className="relative w-[10.67px] h-[2.67px]"
                alt=""
                src="/iconnavigationmore-horiz-24px6.svg"
              />
              <div className="rounded-8xs bg-lavender-200 flex flex-col p-2.5 items-start justify-start gap-[10px]">
                <div className="relative">{`Some messagesSomeasdsad `}</div>
                <img
                  className="relative w-[29.05px] h-[8.79px]"
                  alt=""
                  src="/19322.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative font-medium">Panjul</div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-dimgray">
              <div className="rounded-8xs bg-papayawhip flex flex-col p-2.5 items-start justify-start gap-[10px]">
                <div className="relative">{`Some messagesSomeasdsad `}</div>
                <img
                  className="relative w-[29.05px] h-[8.79px]"
                  alt=""
                  src="/19323.svg"
                />
              </div>
              <img
                className="relative w-[10.67px] h-[2.67px]"
                alt=""
                src="/iconnavigationmore-horiz-24px7.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[9px]">
            <img
              className="relative w-[250px] h-px"
              alt=""
              src="/vector-14-stroke3.svg"
            />
            <img
              className="relative w-[97.27px] h-[14.46px]"
              alt=""
              src="/new-message1.svg"
            />
            <img
              className="relative w-[10.67px] h-[10.67px]"
              alt=""
              src="/iconnavigationarrow-downward-24px1.svg"
            />
            <img
              className="relative w-[272px] h-px"
              alt=""
              src="/vector-15-stroke3.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative font-medium">Panjul</div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-dimgray">
              <div className="rounded-8xs bg-papayawhip flex flex-col p-2.5 items-start justify-start gap-[10px]">
                <div className="relative">{`Some messagesSomeasdsad `}</div>
                <img
                  className="relative w-[29.05px] h-[8.79px]"
                  alt=""
                  src="/19324.svg"
                />
              </div>
              <img
                className="relative w-[10.67px] h-[2.67px]"
                alt=""
                src="/iconnavigationmore-horiz-24px8.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[13px]">
          <input
            className="bg-white rounded-8xs box-border w-[580px] h-10 flex flex-row py-2.5 px-4 items-center justify-start border-[1px] border-solid border-gray-3"
            placeholder="Type a new message"
            type="text"
          />
          <button className="cursor-pointer [border:none] py-2 px-4 bg-dodgerblue rounded-8xs w-[76px] h-10 flex flex-row box-border items-center justify-center">
            <img
              className="relative w-[33.97px] h-[12.02px]"
              alt=""
              src="/send1.svg"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col py-5 px-0 items-start justify-start gap-[28px] text-dodgerblue">
        <input
          className="font-medium font-inter text-xs bg-white rounded-8xs box-border w-[666px] flex flex-row p-2.5 items-center justify-center border-[1px] border-solid border-gray-3"
          placeholder="Search"
          type="text"
        />
        <Messages />
        <div className="flex flex-col items-start justify-start gap-[28px]">
          <div className="flex flex-row items-start justify-start gap-[17px]">
            <img
              className="relative w-[51px] h-[34px]"
              alt=""
              src="/groupchat.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <b className="relative">109220-Naturalization</b>
                <div className="relative text-xs font-medium text-dimgray">
                  January 1, 2021 19:20
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px] text-dimgray">
                <div className="relative font-medium">Cameron Phillips :</div>
                <div className="relative text-xs">Please Check this out !</div>
              </div>
            </div>
          </div>
          <img
            className="relative w-[666px] h-px"
            alt=""
            src="/vector-7-stroke.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[28px]">
          <div className="flex flex-row items-start justify-start gap-[17px]">
            <img
              className="relative w-[51px] h-[34px]"
              alt=""
              src="/groupchat.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <b className="relative">109220-Naturalization</b>
                <div className="relative text-xs font-medium text-dimgray">
                  January 1, 2021 19:20
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px] text-dimgray">
                <div className="relative font-medium">Cameron Phillips :</div>
                <div className="relative text-xs">Please Check this out !</div>
              </div>
            </div>
          </div>
          <img
            className="relative w-[666px] h-px"
            alt=""
            src="/vector-7-stroke.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[23px] text-xs text-white">
          <div className="relative rounded-[50px] bg-dodgerblue w-[34px] h-[34px]">
            <div className="absolute top-[9px] left-[13px]">F</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px] text-sm text-dodgerblue">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <b className="relative">FastVisa Support</b>
              <div className="relative text-xs font-medium text-dimgray">
                January 1, 2021 19:20
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-xs text-dimgray">
              <div className="relative">Welcome to your inbox !</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxMessages;

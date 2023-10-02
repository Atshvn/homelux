import { useRef } from "react";
import { motion } from "framer-motion";
import SubHead from "../Atoms/subhead";
export default function Some() {
  const bannerContainer = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };
  const someContainer = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: 100, opacity: 0 },
  };
  return (
    <div className="bg-tertiary-300">
      <div className="container mx-auto max-w-[1344px]">
        <div className="px-5 pt-10 pb-[52px] sm:px-10">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={bannerContainer}
            viewport={{ once: true }}
            className="text-center space-y-[18px] flex flex-col items-center"
          >
            <SubHead style="sm:w-4/5 md:w-9/12 lg:w-9/12">
              Thủ tục đăng kí
            </SubHead>
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={someContainer}
            className="text-gray-600 body-font"
          >
            <div className="container px-5 py-12 mx-auto flex flex-wrap">
              <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div className="w-full sm:p-4 px-4 mb-6">
                  <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                    Thủ tục đăng kí tham gia gian hàng hội chợ
                  </h1>

                  <ul class="max-w-md space-y-1 text-black-300 list-inside">
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Gửi phiếu đăng ký về BTC: Bắt đầu từ 01/10/2023
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Đăng ký trước 15/10/2023 được giảm 10%.
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Đăng ký trước, chọn vị trí trước
                    </li>
                    <li class="flex items-center ">
                      <svg
                        class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      Thanh toán:
                    </li>
                    <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside">
                      <li>Đợt 1: 30% giá trị hợp đồng ngay sau khi đăng ký.</li>
                      <li>Đợt 2: 30% tiếp theo trước ngày 01/ 12/2023.</li>
                      <li>Đợt 3: 40% còn lại ngay sau khi kết thúc hội chợ</li>
                    </ol>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                <img
                  className="object-cover object-center w-full h-full"
                  src="/banner2.jpg"
                  alt="stats"
                />
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

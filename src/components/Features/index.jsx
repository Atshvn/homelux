import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Vải sợi gia dụng",
      logo: "/feature-1.svg",
      content:
        "Check out our best practices and support to quickly make text messaging one of your top 3 revenue channels.",
    },
    {
      id: 2,
      title: "Đồ gỗ nội, ngoại thất",
      logo: "/feature-2.svg",
      content:
        "You own your data, store design and business plan, but you are free to use the software platform and resources provided by Shopify.",
    },
    {
      id: 3,
      title: "Đồ dùng nhà bếp",
      logo: "/feature-3.svg",
      content:
        "Shopify is so dedicated to keeping its software current that it sends you free updates for a lifetime without charging you anything.",
    },
    {
      id: 4,
      title: "Điện máy gia dụng",
      logo: "/feature-4.svg",
      content:
        "With our mobile app, you can allow your customers to check their order status, browse your store and create an account on the spot.",
    },
    {
      id: 5,
      title: "Thiết bị vệ sinh, phòng tắm",
      logo: "/feature-5.svg",
      content:
        "You can customize your storefront and everything else in the way you want as the owner of your source code.",
    },
    {
      id: 6,
      title: "Chất tẩy rửa, vệ sinh môi trường",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 7,
      title: "Thiết bị ánh sáng & trang trí",
      logo: "/feature-5.svg",
      content:
        "You can customize your storefront and everything else in the way you want as the owner of your source code.",
    },
    {
      id: 8,
      title: " Dụng cụ cầm tay",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 9,
      title: "Dụng cụ thể dục, sức khoẻ",
      logo: "/feature-5.svg",
      content:
        "You can customize your storefront and everything else in the way you want as the owner of your source code.",
    },
    {
      id: 10,
      title: "Thủ công mỹ nghệ & Quà tặng",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 11,
      title: "Gồm sứ, thủy tinh, nhôm, nhựa",
      logo: "/feature-5.svg",
      content:
        "You can customize your storefront and everything else in the way you want as the owner of your source code.",
    },
    {
      id: 12,
      title: "Làm vườn & sinh vật cảnh",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 13,
      title: "Đồ dùng cho Mẹ & Bé",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 14,
      title: "Thiết bị y tế gia đình",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
    {
      id: 15,
      title: "Đồ thờ cúng, tâm linh & phong thuỷ",
      logo: "/feature-6.svg",
      content:
        "You can have peace of mind knowing that your system is running smoothly thanks to our techs' expertise and precision.",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: -100, opacity: 0 },
  };

  const statsItem = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.05 },
    },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <>
      <div className="container mx-auto max-w-[1344px]">
        <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-20 lg:pb-20">
          {/* Head Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={content}
            className="text-center flex flex-col items-center"
          >
            <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
              Mặt hàng trưng bày tại hội chợ
            </SubHead>
            <Paragraph
              fontSize="text-sm"
              color="text-black-400"
              style="sm:w-3/5 md:w-7/12 lg:w-1/3"
            >
              Tổng quan qua một số mặt hàng được trưng bày tại hội chợ mà khách
              tham quan có thể tìm kiếm và trao đổi.
            </Paragraph>
          </motion.div>

          {/* Feature Items */}
          <div className="grid gap-6 md:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden">
            {dataFeatures?.map((feature, index) => (
              <FeatureItem key={feature.id} feature={feature} i={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-gray-600 body-font bg-white">
        <section className="container mx-auto max-w-[1344px]">
          <div className="container px-5 py-5 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-full  content-start ">
              <div className="w-full sm:p-4 px-4 mb-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={content}
                  className="text-center flex flex-col items-center"
                >
                  <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
                    Quy mô hội chợ
                  </SubHead>
                  <Paragraph
                    fontSize="text-sm"
                    color="text-black-400"
                    style="sm:w-3/5 md:w-7/12 lg:w-1/3"
                  >
                    Tổng quan qua một số mặt hàng được trưng bày tại hội chợ mà
                    khách tham quan có thể tìm kiếm và trao đổi.
                  </Paragraph>
                </motion.div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col items-center">
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  variants={statsItem}
                  viewport={{ amount: 0 }}
                  className="flex flex-col items-center"
                >
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    150
                  </h2>

                  <p className="leading-relaxed">Nhà triển lãm</p>
                </motion.section>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col items-center">
                {" "}
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  variants={statsItem}
                  viewport={{ amount: 0 }}
                  className="flex flex-col items-center"
                >
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    500
                  </h2>
                  <p className="leading-relaxed">Gian hàng</p>
                </motion.section>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col items-center">
                {" "}
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  variants={statsItem}
                  viewport={{ amount: 0 }}
                  className="flex flex-col items-center"
                >
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    10.000
                  </h2>
                  <p className="leading-relaxed">Sản phẩm trưng bày</p>
                </motion.section>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col items-center">
                {" "}
                <motion.section
                  initial="hidden"
                  whileInView="visible"
                  variants={statsItem}
                  viewport={{ amount: 0 }}
                  className="flex flex-col items-center"
                >
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    20.000
                  </h2>
                  <p className="leading-relaxed">Khách tham quan</p>
                </motion.section>
              </div>
            </div>
            {/* <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://dummyimage.com/600x300"
              alt="stats"
            />
          </div> */}
          </div>
        </section>
      </div>
    </>
  );
}

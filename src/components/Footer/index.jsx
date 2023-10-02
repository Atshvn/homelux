import { motion } from "framer-motion";
import MainButton from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";

export default function Footer() {
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <div className="bg-primary-300" id="contact">
      {/* Contact */}
      <div className="border-b border-white/15 relative overflow-hidden">
        <div className="container mx-auto max-w-[1344px]">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="px-5 py-10 flex flex-col items-center sm:px-10"
          >
            <div className="isolate bg-white px-6 py-12 sm:py-8 lg:px-8 w-full flex ">
              <div className="mx-auto w-full md:w-1/2">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Liên hệ với chúng tôi
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Aute magna irure deserunt veniam aliqua magna enim voluptate.
                </p>
              </div>
              <form
                action="#"
                method="POST"
                className="mx-auto mt-5  w-full md:w-1/2  sm:mt-6"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Họ và tên
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-200 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset
                         ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-200 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Số điện thoại
                    </label>
                    <div className="relative mt-2.5">
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-200 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Nội dung
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                         placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-200 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <MainButton primary={true}>Đăng ký gian hàng ngay</MainButton>
                </div>
              </form>
            </div>
          </motion.section>
        </div>

        {/* Eclipse */}
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 15, repeat: "Infinity", ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-1/4 -left-28"
          src="/eclipse-1.svg"
          alt="eclipse"
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 30, repeat: "Infinity", ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-[20%] -right-24"
          src="/eclipse-2.svg"
          alt="eclipse"
        />
      </div>
      {/* Footer */}
      <footer className="container mx-auto max-w-[1344px]">
        <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 lg:gap-y-32">
          {/* <div className="lg:col-span-1">
            <img
              className="w-[125px] h-auto mb-10 lg:mb-0"
              src="shopify-footer.png"
              alt="shopify-footer"
            />
          </div>
          <div className="grid grid-cols-2 gap-9 font-body mb-[52px] md:grid-cols-4 lg:col-span-2 lg:mb-0">
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Features</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Find a Patner
                </a>
                <a className="footer-link" href="#">
                  Become a Patner
                </a>
                <a className="footer-link" href="#">
                  Affiliates
                </a>
                <a className="footer-link" href="#">
                  Patner Offers
                </a>
                <a className="footer-link" href="#">
                  Store Examples
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Company</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Leaders
                </a>
                <a className="footer-link" href="#">
                  About Us
                </a>
                <a className="footer-link" href="#">
                  Careers
                </a>
                <a className="footer-link" href="#">
                  Press
                </a>
                <a className="footer-link" href="#">
                  Awards
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Resources</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Overview
                </a>
                <a className="footer-link" href="#">
                  Articles
                </a>
                <a className="footer-link" href="#">
                  Webinars
                </a>
                <a className="footer-link" href="#">
                  Events
                </a>
                <a className="footer-link" href="#">
                  Ecommerce
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Get Help</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Shopify Company
                </a>
                <a className="footer-link" href="#">
                  Knowledge Base
                </a>
                <a className="footer-link" href="#">
                  Videos Contact
                </a>
                <a className="footer-link" href="#">
                  Tech Support
                </a>
                <a className="footer-link" href="#">
                  API Documentation
                </a>
              </div>
            </div>
          </div> */}
          <div className="text-center lg:col-span-3 md:flex justify-between items-center">
            <div className="flex items-center justify-center gap-4 mb-4 order-2">
              <a
                href="https://www.instagram.com/bethup97/?next=%2F"
                target="_blank"
              >
                <img
                  className="footer-icon"
                  src="/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="https://github.com/berthutapea" target="_blank">
                <img className="footer-icon" src="/github.svg" alt="github" />
              </a>
              <a href="https://t.me/bethup97" target="_blank">
                <img
                  className="footer-icon"
                  src="/telegram.svg"
                  alt="telegram"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/gilberthutapea/"
                target="_blank"
              >
                <img
                  className="footer-icon"
                  src="/linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <p className="font-body text-white font-medium order-1">
              © 2023 Homelux by{" "}
              <a
                className="italic underline"
                href="https://cak-solution.com/"
                target="_blank"
              >
                Cak Solution
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

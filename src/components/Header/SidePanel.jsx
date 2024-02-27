import { Sidebar } from 'flowbite-react';
import { IoIosWoman, IoIosMan } from "react-icons/io";
import {
  HiArrowSmRight,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { GiHealthNormal } from "react-icons/gi";
import { LuBaby } from "react-icons/lu";

const SidePanel = () => {
  return (
    <>
      {/* Side panel*/}
      <section >
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className=" hidden h-60 sm:h-64 xl:h-80 2xl:h-96 lg:block"
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Collapse
                icon={IoIosWoman}
                label="Women's Fashion"
                className="py-0 text-sm"
              >
                <Sidebar.Item href="#" className="py-0 text-sm">
                  Bags
                </Sidebar.Item>
                <Sidebar.Item href="#" className="py-0 text-sm">
                  Shoes
                </Sidebar.Item>
                <Sidebar.Item href="#" className="py-0 text-sm">
                  Jewelries
                </Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Collapse
                icon={IoIosMan}
                label="Men's Fashion"
                className="py-0 text-sm"
              >
                <Sidebar.Item href="#" className="py-0 text-sm">
                  Shoes
                </Sidebar.Item>
                <Sidebar.Item href="#" className="py-0 text-sm">
                  Belts
                </Sidebar.Item>
                <Sidebar.Item href="#" className="py-0 text-sm">
                  Shirts
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#" icon={HiInbox} className="py-0 text-sm">
                Electronics
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser} className="py-0 text-sm">
                Home & Lifestyle
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiShoppingBag}
                className="py-0 text-sm"
              >
                Medicine
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiArrowSmRight}
                className="py-0 text-sm"
              >
                Sports & Outdoor
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={LuBaby} className="py-0 text-sm">
                Baby's Toys
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable} className="py-0 text-sm">
                Groceries and Pets
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={GiHealthNormal} className="py-0 text-sm">
                Health & Beauty
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </section>
    </>
  );
};

export default SidePanel;

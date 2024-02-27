import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const lists = ["Subscribe", "Get 10% off your first order"];
  const lists2 = [
    "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
    "exclusive@gmail.com",
    "+88015-88888-9999",
  ];
  const lists3 = ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"];
  const lists4 = ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"];
  const lists5 = ["Save $3 with App New User Only"];
  return (
    
    <>
      <main className="bg-black text-white ">
        <div className="grid mx-10 my-auto py-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* 1 */}
          <div className="p-3">
            <h3 className="font-bold text-lg">Exclusive</h3>
            {lists.map((list) => (
              <p className="text-sm leading-6" key={list}>
                {list}
              </p>
            ))}
          </div>

          {/* 2 */}
          <div className="p-3">
            <h3 className="font-bold text-lg">Support</h3>
            {lists2.map((list2) => (
              <p className="text-sm leading-6" key={list2}>
                {list2}
              </p>
            ))}
          </div>

          {/* 3 */}
          <div className="p-3">
            <h3 className="font-bold text-lg">Account</h3>
            {lists3.map((list3) => (
              <p className="text-sm leading-6" key={list3}>
                {list3}
              </p>
            ))}
          </div>

          {/* 4 */}
          <div className="p-3">
            <h3 className="font-bold text-lg">Quick Link</h3>
            {lists4.map((list4) => (
              <ul>
                <li className="text-sm leading-6">
                  <NavLink>{list4}</NavLink>
                </li>
              </ul>
            ))}
          </div>

          {/* 5 */}
          <div className="p-3">
            <h3 className="font-bold text-lg">Download App</h3>
            {lists5.map((list5) => (
              <p className="text-sm leading-6" key={list5}>
                {list5}
              </p>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-700 text-sm pb-3">
          {" "}
          Copyright Rimel 2022. All right reserved.
        </p>
      </main>
    </>
  );
};

export default Footer;

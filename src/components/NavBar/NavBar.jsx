export default function NavBar() {
  const listNavBar = [
    {
      name: "Home",
    },
    {
      name: "Documents",
    },
    {
      name: "History",
    },
    {
      name: "Downloads",
    },
    {
      name: "Bookmarks",
    },
    {
      name: "Support",
    },
  ];

  return (
    <main className="flex flex-col w-[17%] h-full border-r border-gray-800">
      <section className="w-full h-[90%] flex flex-col gap-8 justify-start items-center py-14">
        {listNavBar.map((list) => (
          <h3 key={list.id} className="text-gray-500 font-medium">
            {list.name}
          </h3>
        ))}
      </section>
      <section className="w-full h-[10%] flex justify-center ">
        {" "}
        <h3 className="text-gray-500 font-medium">Log Out</h3>{" "}
      </section>
    </main>
  );
}

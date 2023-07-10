import React from "react";

const Feedback = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      designation: "CEO, Company A",
      image: "https://static.bgf.org.my/wp-content/uploads/2020/08/Prof-Ewe-Hong-Tat.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "CTO, Company B",
      image: "https://th.bing.com/th/id/R.927ae538e5ebf76e6245210e36c0bc3c?rik=UfoaWk4iXA9OxQ&pid=ImgRaw&r=0",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 3,
      name: "David Johnson",
      designation: "COO, Company C",
      image: "https://th.bing.com/th/id/OIP.hXhjHfmhKB7IXZiZbgErKQHaE8?pid=ImgDet&w=600&h=400&rs=1",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      name: "Al Habib",
      designation: "COO, Company C",
      image: "https://tvovermind.com/wp-content/uploads/2017/10/Fan-Luyuan.jpg",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  return (
    <div className="m-24">
      <div className="text-center lg:px-64 mb-4">
        <h1 className="text-4xl font-semibold mb-4">Our Happy Students</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
          inventore dolorum rem tempore officiis officia doloremque repudiandae
          culpa quam nobis iusto alias similique amet optio, iste ipsam porro a
          eius quos illo magnam fuga minus quod. Numquam nisi laboriosam enim,
          vel, sed corporis totam aperiam facilis inventore sapiente reiciendis
          quam!
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg overflow-hidden shadow-lg mx-4 my-4">
          <img className="h-48 w-full object-cover" src={testimonial.image} alt={testimonial.name} />
          <div className="py-4 px-6">
            <h2 className="text-xl font-semibold text-white">{testimonial.name}</h2>
            <p className="mt-2 text-gray-200">{testimonial.designation}</p>
            <p className="mt-4 text-gray-100">{testimonial.content}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Feedback;

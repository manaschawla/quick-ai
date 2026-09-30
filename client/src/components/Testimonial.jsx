
import { assets } from "../assets/assets";

const Testimonial = () => {
    const dummyTestimonialData = [
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            name: "John Doe",
            title: "Marketing Director, TechCorp",
            content: "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
            rating: 4,
        },
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            name: "Jane Smith",
            title: "Content Creator, TechCorp",
            content: "ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
            name: "David Lee",
            title: "Content Writer, TechCorp",
            content: "ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
            rating: 4,
        },
    ];

    return (
        <section className="px-4 sm:px-10 lg:px-20 xl:px-32 py-20 sm:py-24">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-slate-700">
                    Loved by Creators
                </h2>

                <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
                    Don't just take our word for it. Here's what our users are saying.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
                {dummyTestimonialData.map((testimonial, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div
                            className="flex items-center gap-1"
                            aria-label={`${testimonial.rating} out of 5 stars`}
                        >
                            {Array(5).fill(0).map((_, i) => (
                                <img
                                    key={i}
                                    src={
                                        i < testimonial.rating
                                            ? assets.star_icon
                                            : assets.star_dull_icon
                                    }
                                    className="w-4 h-4"
                                    alt=""
                                />
                            ))}
                        </div>

                        <p className="text-gray-600 text-sm leading-7 my-6 flex-grow">
                            "{testimonial.content}"
                        </p>

                        <hr className="mb-5 border-gray-200" />

                        <div className="flex items-center gap-4">
                            <img
                                src={testimonial.image}
                                className="w-12 h-12 rounded-full object-cover shrink-0"
                                alt={testimonial.name}
                            />

                            <div className="min-w-0">
                                <h3 className="text-sm font-semibold text-gray-800">
                                    {testimonial.name}
                                </h3>

                                <p className="text-xs text-gray-500 mt-1">
                                    {testimonial.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function StartPage() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const aboutUsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handlescroll() {
            const isScroll = window.scrollY > 0;
            setScrolled(isScroll);
        }

        window.addEventListener('scroll', handlescroll);
        return () => {
            window.removeEventListener('scroll', handlescroll);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.01, // Adjust the threshold as needed
            }
        );

        if (aboutUsRef.current) {
            observer.observe(aboutUsRef.current);
        }

        // Cleanup observer on unmount
        return () => {
            if (aboutUsRef.current) {
                observer.unobserve(aboutUsRef.current);
            }
        };
    }, []);

    function doSignUp() {
        navigate("/gotosignup");
    }

    function doLogin() {
        navigate("/gotoLogin");
    }

    function logout() {
        localStorage.removeItem("access_token");
        navigate("/gotohome");
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <>
            <div className={`fixed text-center font-medium pt-2 text-2xl flex w-screen h-[85px] text-white ${scrolled ? 'bg-green-500 bg-opacity-80' : 'bg-amber-200 bg-opacity-20'}`}>
                <button className='ml-2 h-12 w-10 mt-2'>
                    <img src="https://static.thenounproject.com/png/462023-200.png" alt="" />
                </button>
                <button className='ml-2 mt-2 h-12 w-1/4 sm:w-72 hover:bg-black hover:rounded-lg hover:bg-opacity-60 font-serif text-2xl'>Categories</button>
                <button className='ml-2 mt-2 h-12 w-1/4 sm:w-72 hover:bg-black hover:rounded-lg hover:bg-opacity-60 font-serif text-2xl'>Products</button>
                <button className='ml-2 mt-2 h-12 w-1/4 sm:w-72 hover:bg-black hover:rounded-lg hover:bg-opacity-60 font-serif text-2xl'>Services</button>
                <div className='ml-2 mt-2 h-12 w-72'></div>
                <div className='ml-2 mt-2 h-12 w-72 flex'>
                    <input type="button" value="SignUp" className='font-normal text-xl p-2 ml-3 rounded items-end hover:bg-black hover:bg-opacity-60 font-serif' onClick={doSignUp} />
                    <input type="button" value="Login" className='font-normal text-xl p-2 ml-3 rounded items-end hover:bg-black hover:bg-opacity-60 font-serif' onClick={doLogin} />
                    <Menu as="div" className="ml-10 w-10">
                        <div>
                            <Menu.Button className="relative flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <img src="https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png" alt="" />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={classNames(active ? 'bg-gray-100 text-center' : '', 'block px-4 py-2 text-sm text-gray-700 text-center font-medium')}
                                        >
                                            Account Settings
                                        </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={logout}
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium text-center')}
                                        >
                                            Sign out
                                        </button>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20240102/pngtree-abundant-organic-wheat-vibrant-green-and-yellow-ears-filled-with-grains-image_13823662.png" alt="" className='w-screen h-96' />

            <div className='h-80 w-screen mt-1 flex-col'>
                <div className='text-center text-2xl bg-amber-700 text-white bg-opacity-90 pb-2 p-1 font-semibold container rounded-md' style={{ fontFamily: "merriweather" }}>
                    Categories
                </div>
                <div className='w-screen flex h-60 mt-3'>
                    <div className='h-64 w-60 mx-auto rounded-lg border-green-700 border-3 shadow-md flex-col shadow-green-500 border-solid translate-y-4'>
                        <div class="relative border border-black h-40 overflow-hidden">
                            <img src="https://www.chanakyadairy.com/wp-content/uploads/2019/04/blog-pic.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className='flex-col h-20'>
                            <div className='w-full h-1/2 text-center text-2xl font-mono font-medium'>
                                Milk Products
                            </div>
                            <div className='w-full h-1/2'>
                                <button class='w-28 text-white rounded-lg ml-16 text-center h-full p-1 bg-black font-sans font-medium'>View Items</button>
                            </div>
                        </div>
                    </div>
                    <div className='h-64 w-60 mx-auto rounded-lg border-amber-700 border-3 shadow-md flex-col shadow-amber-500 border-solid -translate-y-2'>
                        <div class="relative border border-black h-40 overflow-hidden">
                            <img src="https://www.fruitsmith.com/pub/media/mageplaza/blog/post/o/n/one_seed_fruits.png" alt="" class="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className='flex-col h-20'>
                            <div className='w-full h-1/2 text-center text-2xl font-mono font-medium'>
                                Fruits
                            </div>
                            <div className='w-full h-1/2'>
                                <button class='w-28 text-white rounded-lg ml-16 text-center h-full p-1 bg-black font-sans font-medium'>View Items</button>
                            </div>
                        </div>
                    </div>
                    <div className='h-64 w-60 mx-auto rounded-lg border-green-700 border-3 shadow-md flex-col shadow-green-500 border-solid translate-y-4'>
                        <div class="relative border border-black h-40 overflow-hidden">
                            <img src="https://extension.umn.edu/sites/extension.umn.edu/files/Harvested-veggies.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className='flex-col h-20'>
                            <div className='w-full h-1/2 text-center text-2xl font-mono font-medium'>
                                Vegetables
                            </div>
                            <div className='w-full h-1/2'>
                                <button class='w-28 text-white rounded-lg ml-16 text-center h-full p-1 bg-black font-sans font-medium'>View Items</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={aboutUsRef} className={`transition-transform mt-5 pl-5 pt-3 duration-1000 transform w-screen bg-amber-200 h-60 ${isVisible ? 'translate-x-0' : 'translate-x-[91rem]'}`}>
                <h2 className="text-3xl font-bold text-purple-700">About Us</h2>
                <p className="mt-4 font-light font-sans text-lg">
                    Welcome to G2C, where we bridge the gap between farmers and consumers, empowering growers to connect directly with those who appreciate fresh, natural, and organic produce. Our mission is to revolutionize the way food is grown, sold, and consumed by eliminating intermediaries and bringing growers and consumers closer together. We prioritize fair trade, eco-conscious practices, and community support, ensuring that by supporting local farmers, you not only enjoy the freshest produce but also contribute to the preservation of our planet and the livelihoods of hardworking growers.
                </p>
                <p className='font-light text-lg'>
                    Whether you're a farmer looking to share your harvest with the world or a consumer seeking wholesome and nutritious food straight from the source, G2C is your go-to destination. Join us in cultivating a healthier, more sustainable future for all. Thank you for choosing G2C. Together, let's cultivate connections, one farm-fresh delivery at a time.
                </p>
            </div>
        </>
    );
}

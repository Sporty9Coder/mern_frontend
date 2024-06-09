import axios from 'axios';
import { useState } from 'react';
import { doSaveWithAxiosPost, doSearchAxiosGet } from '../../../services/user-controller';
import { baseURL } from '../../../services/axios.config';

export default function Example() {
    const [growerobj, setGrowerobj] = useState({
        name: "",
        email: "",
        address: "",
        category: "",
        mobile: 0,
        city: "",
        aadharno: 0,
        aadharpic: null
    });

    const [prevImg, setPrevImg] = useState("");

    function doUpdateGrowerObj(event) {
        const { name, value } = event.target;
        if (name === "aadharpic") {
            setGrowerobj({ ...growerobj, [name]: event.target.files[0] });
        } else {
            setGrowerobj({ ...growerobj, [name]: value });
        }
    }

    async function doSaveWithAxios() {
        const formdata = new FormData();
        for (var props in growerobj) {
            formdata.append(props, growerobj[props]);
        }
        const serverMsg = await doSaveWithAxiosPost(formdata);

        if (serverMsg.data.status === true) {
            alert("signed in successfully");
            setPrevImg("https://mern-project-wnyo.onrender.com/uploads/" + serverMsg.data.res.picpath);
        } else {
            alert(serverMsg.data.msg + " " + serverMsg.data.err);
        }
    }

    async function dofetch() {
        const servermsg = await doSearchAxiosGet(growerobj.email);
        if (servermsg.data.status === true) {
            setGrowerobj(servermsg.data.res);
            setPrevImg("https://mern-project-wnyo.onrender.com/uploads/" + servermsg.data.res.picpath);
        } else {
            alert(servermsg.data.err);
        }
    }

    async function doUpdateWithAxios() {
        var url = baseURL + "/users/update-grower";
        const formdata = new FormData();
        for (var props in growerobj) {
            formdata.append(props, growerobj[props]);
        }
        const serverMsg = await axios.post(url, formdata, { headers: { "Content-type": "multipart/form-data" } });

        if (serverMsg.data.status === true) {
            alert("updated successfully");
            setGrowerobj(serverMsg.data.res);
            setPrevImg("https://mern-project-wnyo.onrender.com/uploads/" + serverMsg.data.res.picpath);
        } else {
            alert(serverMsg.data.err);
        }
    }

    return (
        <form className='container mx-auto'>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">

                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdateGrowerObj} value={growerobj.name}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdateGrowerObj} value={growerobj.email}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdateGrowerObj} value={growerobj.city}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdateGrowerObj} value={growerobj.address}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                                Mobile
                            </label>
                            <div className="mt-2">
                                <input type="number" id="mobile"
                                    name="mobile"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={doUpdateGrowerObj} value={growerobj.mobile} />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="aadharno" className="block text-sm font-medium leading-6 text-gray-900">
                                Aadhar Number
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="aadharno"
                                    id="aadharno"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={doUpdateGrowerObj} value={growerobj.aadharno}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <div className="mt-10 flex items-center gap-x-3">
                                <input
                                    type="file"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" name='aadharpic' onChange={doUpdateGrowerObj}
                                />
                                <button type='button' className='border border-black p-1 rounded-md w-32 bg-indigo-600 text-white hover:bg-indigo-700' onClick={dofetch}>Fetch</button>
                            </div>
                            <img src={prevImg} alt="" className='w-48 h-48 mt-4' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
                <button type="button" className="w-32 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-indigo-700" onClick={doUpdateWithAxios}>
                    Update
                </button>
                <button
                    type="button"
                    className="w-32 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={doSaveWithAxios}
                >
                    Save
                </button>
            </div>

        </form>
    );
}

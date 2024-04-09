import { useState } from "react";
import { toast } from 'react-toastify';

// import {useDispatch} from 'react-redux';
// import { addMessage } from "../../Utils/messageSlice";


function Help() {
    const [name, setName] = useState('');
    const [query, setQuery] = useState('');
    const [email, setEmail] = useState('');

    // const dispatch = useDispatch();

    const handleSubmit = () => {
        // dispatch an action to add the user message to the redux store
        // dispatch(addMessage({ name, query}));

        // check the field
        if (!name || !email || !query) {
            toast.error("OOPS, you miss every field!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false
            });
            return; //stop further execution
        }

        // save the query to local storage
        saveQueryToLocalStorage({ name, query, email});

        // display toast notification
        toast.success("Your query submitted successfully!", {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })

        // clear input field after submiting the message
        setName('')
        setQuery('')
        email('')
    }

    // function to save query to local storage
    const saveQueryToLocalStorage = (message) => {

        // retrieve existing message from local storage or initialize an empty array
        const existingMessages = JSON.parse(localStorage.getItem("messages")) || [];

        // add the new message to the existing array
        const updateMessages = [...existingMessages, message];

        // save the updated messages array back to local storage
        localStorage.setItem("messages", JSON.stringify(updateMessages));
    }
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-[34px] mt-10 font-semibold tracking-[3px] mb-[30px] text-[#3E4152] font-serif">Send Your Query🫠!!!</h1>
            <div className="flex flex-col items-center justify-center gap-[20px]">
            <input className="text-[20px] text-[#686B78] pt-[5px] pb-[5px] pl-[8px] pr-[100px] border border-[#686B78] border-opacity-50 rounded-[6px] outline-none font-serif shadow-lg" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className="text-[20px] text-[#686B78] pt-[5px] pb-[5px] pl-[8px] pr-[100px] border border-[#686B78] border-opacity-50 rounded-[6px] outline-none font-serif shadow-lg" type=" text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="text-[20px] text-[#686B78] pt-[5px] pb-[120px] pl-[8px] pr-[100px] border border-[#686B78] border-opacity-50 rounded-[6px] outline-none font-serif shadow-xl" type="text" placeholder=" Write your Query" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button className="text-[22px]  pt-[6px] pb-[6px] pl-[8px] pr-[8px] border border-[#686B78] border-opacity-50 ml-[30px] rounded-[6px] text-[#3E4152] font-serif font-medium shadow-lg" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}


export {Help}
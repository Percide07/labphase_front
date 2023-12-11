import React, { useEffect, useState } from 'react';
import Avatar from '../../assets/avatar.svg';
import Input from '../../components/inputs';
const Dashboard = () => {
    const contacts = () => [
        { name: 'Saad', status: 'Avalaible', img: Avatar},
        { name: 'Percide', status : 'Avalaible', img: Avatar},
        { name: 'Mamadou', status: 'Avalaible', img: Avatar},
        { name: 'Yousra', status: 'Avalaible', img: Avatar},
        { name: 'Adam', status: 'Avalaible', img: Avatar},
        { name: 'Manassé', status: 'Avalaible', img: Avatar},
    ]

        useEffect(()=> {
            const loggedInUser = JSON.parse(localStorage.getItem('user:detail'))
            const fetchConversations = async()=> {
                const res = await fetch(`http://localhost:8000/api/conversations/${loggedInUser?.id}`,{
                    method:'GET',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                });
                const resData = await res.json()
                console.log('resData:::::', resData);
                setConversations(resData)
            }
            fetchConversations()
        }, [])


        const [user,setUser] = useState(JSON.parse(localStorage.getItem('user:detail')))
        const [conversations, setConversations] = useState([])
        console.log('user: ', user);
        console.log('conversations: ', conversations);
    return(
        <div className="w-screen flex">
            <div className="w-[25%] h-screen  border-black bg-secondary">
                <div className='flex items-center my-5 mx-14'>
                    <div className='border border-primary p-[2px] rounded-full'>
                        <img src={Avatar} width={50} height={50} alt="avatar's photo" />
                    </div>
                    <div className='ml-8'>
                        <h3 className='text-2xl'> {user?.fullName} </h3>
                        <p className='text-lg font-light'>My Account</p>
                    </div>
                </div>
                <hr/>
                <div className='mx-5 mt-5'>
                    <div className='text-primary text-lg'>Messages</div>
                    <div>
                        {
                            conversations.map(({conversationId , user}) => {
                            return(
                                <div  className='flex items-center py-4 border-b border-b-gray-600'>
                                    <div className='cursor-pointer flex items-center'>
                                        <div className='border border-primary p-[2px] rounded-full'>
                                            <img src={Avatar} width={50} height={50} alt="avatar's photo"/>
                                        </div>
                                        <div className='ml-8'>
                                            <h3 className='text-lg'> {user?.fullName} </h3>
                                            <p className='text-sm font-light text-gray-600'>{user?.email}</p>
                                        </div>
                                    </div>  
                                </div>
                            )
                        })
                    }
                    </div>
            </div>
        </div>
            <div className="w-[50%] h-screen bg-white flex flex-col items-center">
                <div className=" flex w-[75%] bg-secondary h-[80px] mt-14 rounded-full items-center px-14 shadow-lg">
                    <div className='cursor-pointer'> <img src={Avatar} width={50} height={50} alt="avatar's photo"/></div>
                    <div className='ml-6 mr-auto'>
                        <h3 className='text-lg '>Alexander</h3>
                        <p className='text-sm font-light text-gray-600'>Online</p>
                    </div>
                    <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" 
                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="black" fill="none" 
                        stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
                        fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <path d="M15 9l5 -5" /><path d="M16 4l4 0l0 4" />
                        </svg>
                    </div>
                </div>
                <div className='h-[75%]  w-full overflow-y-scroll shadow-sm'>
                    <div className='p-[10vh] '>
                        <div className='max-w-[40%] p-4 bg-secondary rounded-b-xl rounded-tr-xl mb-6'>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className='max-w-[40%] p-4 bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6'>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className='max-w-[40%] p-4 bg-secondary rounded-b-xl rounded-tr-xl mb-6'>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className='max-w-[40%] p-4 bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6'>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className='max-w-[40%] p-4 bg-secondary rounded-b-xl rounded-tr-xl mb-6'>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className='max-w-[40%] p-4 bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6'>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className='max-w-[40%] p-4 bg-secondary rounded-b-xl rounded-tr-xl mb-6'>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className='max-w-[40%] p-4 bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6'>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className='max-w-[40%] p-4 bg-secondary rounded-b-xl rounded-tr-xl mb-6'>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className='max-w-[40%] p-4 bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white mb-6'>
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </div>
                <div className='flex p-10 w-full flex-row items-center'>
                    <div className='mr-4 p-2 cursor-pointer bg-light rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler 
                        icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" 
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" 
                        stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
                    </div>
                    <Input type="text" placeholder='Type your message...' className='w-[75%]' inputClassName='p-4 border-0 shadow-md rounded-full bg-secondary'/>
                    <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" 
                        width="24" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        fill="none" stroke-linecap="round" stroke-linejoin="round"><path 
                        stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path 
                        d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                    </div>
                </div>
            </div>
            <div className="w-[25%] h-screen bg-light ">

            </div>
        </div>
    )
};
export default Dashboard;
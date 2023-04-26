'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { useCallback, useState } from 'react'
import MenuItems from './MenuItems'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'

// interface

interface UserMenuProps {
    currentUser?: User | null
}
const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    // register modal for onClick function
    const registerModal = useRegisterModal();

    const loginModal = useLoginModal();
    // user menu Open state
    const [isOpen, setIsOpen] = useState(false);
    // user menu toggle open
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, []);
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer " onClick={() => { }}>
                    Airbnb Your Home
                </div>
                <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                    onClick={toggleOpen}>
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        {currentUser ? (
                            <>
                                <MenuItems
                                    label="My trips"
                                    onClick={() => { }}
                                />
                                <MenuItems
                                    label="My favorites"
                                    onClick={() => { }}
                                />
                                <MenuItems
                                    label="My reservations"
                                    onClick={() => { }}
                                />
                                <MenuItems
                                    label="My properties"
                                    onClick={() => { }}
                                />
                                <MenuItems
                                    label="Airbnb your home"
                                    onClick={() => { }}
                                />
                                <hr />
                                <MenuItems
                                    label="Logout"
                                    onClick={() => signOut()}
                                />
                            </>

                        ) : (

                            <>
                                <MenuItems
                                    onClick={loginModal.onOpen}
                                    label='Login'
                                />
                                <MenuItems
                                    onClick={registerModal.onOpen}
                                    label='Sign up'
                                />
                            </>

                        )}

                    </div>
                </div>
            )}
        </div>
    )
}
export default UserMenu
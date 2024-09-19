'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import ThemeToggle from '@/components/theme-toggler'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Role } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { SignOutButton } from './auth-components'
import { Avatar, AvatarFallback } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'

type UserDropdownProps = {
  className?: string
}

export function UserDropdown({ className }: UserDropdownProps) {
  // const {data: session, status} = { data: {user: {name: '', id: '', role: 'ADMIN'}}, status: 'authenticated' }
  // console.log(useSession)
  const { data: session, status } = useSession()
  return (
    <DropdownMenu>
      {status == 'authenticated' && session?.user && <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn(className, 'rounded-full')} size="icon">
          <Avatar>
            <AvatarImage src={session.user.image as string}/>
            <AvatarFallback>{session.user.name?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      }
      <DropdownMenuContent className="w-56 mx-6">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>{session?.user?.name}</span>
          <ThemeToggle className="theme-toggler" />
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {/* Stuff Admin can do in this group */}
          {(session?.user?.role == Role.ADMIN) && (<>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Dropdown</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className='mx-2'>
                  <DropdownMenuItem><Link href="/" className="w-full">Item (goes home)</Link></DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem><Link href="/" className="w-full">Main item</Link></DropdownMenuItem>
          </>)}
          {/* Stuff Teachers can do in this group */}
          {(session?.user?.role == Role.USER) && (<>
            <DropdownMenuItem><Link href="/" className="w-full">Dashboard</Link></DropdownMenuItem>
          </>)}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer" asChild>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export default UserDropdown